"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, Building2, Eye, EyeOff, Loader2 } from "lucide-react"
import { authService, ApiError } from '@/services/authServices'
import { toast } from 'sonner'
import Link from 'next/link'

const BusinessLoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  // Check if user is already logged in
  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleBack = () => {
    router.push('/login')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    // Basic validation
    let hasErrors = false
    const newErrors: Record<string, string[]> = {}
    
    if (!email.trim()) {
      newErrors.email = ["Email is required"]
      hasErrors = true
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = ["Please enter a valid email address"]
      hasErrors = true
    }
    
    if (!password) {
      newErrors.password = ["Password is required"]
      hasErrors = true
    }
    
    if (hasErrors) {
      setErrors(newErrors)
      return
    }
    
    try {
      setLoading(true)
      await authService.login({
        email,
        password,
        userType: 'business',
        rememberMe
      })
      toast.success("Login successful! Welcome back.")
      router.push('/dashboard')
    } catch (error: any) {
      const apiError = error as ApiError;
      if (apiError.errors) {
        setErrors(apiError.errors);
        toast.error(apiError.message);
      } else {
        toast.error(apiError.message || "Failed to login. Please try again.");
      }
    } finally {
      setLoading(false)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      {/* Header with logo and back button */}
      <header className="border-b bg-white py-4 px-6 flex items-center justify-between shadow-sm">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleBack}
          className="text-gray-600"
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <div className="flex items-center">
          <span className="text-green-600 font-bold text-lg">Green Trace QR</span>
        </div>
        <div className="w-20"></div> {/* Spacer for centering */}
      </header>
      
      <div className="flex flex-grow items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-green-700" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Business Login</CardTitle>
            <CardDescription className="text-center text-gray-500">
              Access your recycling business dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="company@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`border-gray-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email[0]}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-800 font-medium">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-gray-300 pr-10 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password[0]}</p>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="rememberMe" 
                  checked={rememberMe} 
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="text-green-600 focus:ring-green-500"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 text-white"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : "Sign In"}
              </Button>
              
              <div className="text-sm text-gray-500 text-center mt-6">
                Don't have an account?
                <div className="mt-2 flex justify-center space-x-4">
                  <Link href="/login/business_signup" className="text-green-600 hover:text-green-800 font-medium">Get started</Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="text-green-600 hover:text-green-800 font-medium">Contact sales</Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <footer className="bg-white border-t py-4 px-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Green Trace QR. All rights reserved.
      </footer>
    </div>
  )
}

export default BusinessLoginPage
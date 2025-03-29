"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Building2 } from "lucide-react"
import { authService, ApiError } from '@/services/authServices'
import { toast } from 'sonner'

const BusinessLoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const handleBack = () => {
    router.push('/login')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    try {
      setLoading(true)
      await authService.login({
        email,
        password,
        userType: 'business'
      })
      toast.success("Login successful!")
      router.push('/dashboard')
    } catch (error: any) {
      const apiError = error as ApiError;
      if (apiError.errors) {
        setErrors(apiError.errors);
        // Show the main error message
        toast.error(apiError.message);
      } else {
        toast.error(apiError.message);
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with back button */}
      <header className="border-b bg-white py-4 px-6 flex items-center">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleBack}
          className="text-gray-600"
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Back
        </Button>
      </header>
      
      <div className="flex flex-grow items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-gray-700" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Business Login</CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="company@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border-gray-300 ${errors.email ? 'border-red-500' : ''}`}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Button variant="link" size="sm" className="p-0 h-auto text-green-600">
                    Forgot Password?
                  </Button>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`border-gray-300 ${errors.password ? 'border-red-500' : ''}`}
                  required
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password[0]}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-800 text-white"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              
              <div className="text-sm text-gray-500 text-center mt-6">
                Don't have an account?
                <div className="mt-2">
                  <a href="/login/business_signup" className="text-green-600 font-medium mr-4">Contact sales</a>
                  <span>or</span>
                  <a href="/login/business_signup" className="text-green-600 font-medium ml-4">Get free trial</a>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BusinessLoginPage
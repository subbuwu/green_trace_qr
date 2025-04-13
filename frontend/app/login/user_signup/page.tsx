"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, Eye, EyeOff, Loader2, CheckCircle, XCircle } from "lucide-react"
import { authService } from '@/services/authServices'
import { toast } from 'sonner'
import Link from 'next/link'

// Custom RecycleIcon component
const RecycleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
    <path d="m14 16-3 3 3 3" />
    <path d="M8.293 13.596 4.875 9.5l3.326-4.35" />
    <path d="m10.038 9.5 5.126.001" />
    <path d="M16.658 12.538 19.3 9.5l-3.336-4.338" />
    <path d="M4.5 16h6" />
  </svg>
)

const UserSignupPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [receiveUpdates, setReceiveUpdates] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const handleBack = () => {
    router.push('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: []
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string[]> = {}
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = ["Full name is required"]
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = ["Email is required"]
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = ["Please enter a valid email address"]
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = ["Password is required"]
    } else if (formData.password.length < 8) {
      newErrors.password = ["Password must be at least 8 characters"]
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = ["Password must include uppercase, lowercase, and numbers"]
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = ["Passwords do not match"]
    }
    
    // Validate terms acceptance
    if (!acceptTerms) {
      newErrors.terms = ["You must accept the terms and conditions"]
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)
      await authService.signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType: 'user',
        phone: formData.phone,
        location: formData.location,
        receiveUpdates
      })
      
      // Show confetti animation on successful signup - assuming you have a confetti library imported
      try {
        // This would be implemented with react-confetti or similar
        window.dispatchEvent(new CustomEvent('confetti-trigger'));
      } catch (error) {
        console.error('Confetti error:', error);
      }
      
      toast.success("Account created successfully! Welcome to Green Trace QR!")
      router.push('/dashboard')
    } catch (error: any) {
      toast.error(error.message || "Failed to create account. Please try again.")
      if (error.errors) {
        setErrors(error.errors)
      }
    } finally {
      setLoading(false)
    }
  }

  const getPasswordStrength = () => {
    const { password } = formData
    if (!password) return { strength: 0, text: "" }
    
    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[a-z]/.test(password)) strength += 1
    if (/\d/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1
    
    let text = ""
    let color = ""
    
    switch (strength) {
      case 0:
      case 1:
        text = "Weak"
        color = "bg-red-500"
        break
      case 2:
      case 3:
        text = "Medium"
        color = "bg-yellow-500"
        break
      case 4:
      case 5:
        text = "Strong"
        color = "bg-green-500"
        break
    }
    
    return { strength: strength * 20, text, color }
  }

  const passwordStrength = getPasswordStrength()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
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
              <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                <RecycleIcon className="h-7 w-7 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Join Green Trace QR</CardTitle>
            <CardDescription className="text-center text-gray-500">
              Start your sustainable recycling journey today
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`border-gray-300 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 focus:border-blue-500'}`}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="user@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`border-gray-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 focus:border-blue-500'}`}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email[0]}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number (Optional)</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">Location (Optional)</Label>
                <Input 
                  id="location" 
                  name="location"
                  type="text" 
                  placeholder="City, Country" 
                  value={formData.location}
                  onChange={handleChange}
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500">This helps us find recycling centers near you</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleChange}
                    className={`border-gray-300 pr-10 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 focus:border-blue-500'}`}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className={`h-2 rounded-full ${passwordStrength.color}`}
                          style={{ width: `${passwordStrength.strength}%` }}
                        ></div>
                      </div>
                      <span className="text-xs">{passwordStrength.text}</span>
                    </div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <div className="flex items-center">
                        {formData.password.length >= 8 ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-gray-400 mr-1" />}
                        <span className={formData.password.length >= 8 ? "text-green-500" : "text-gray-500"}>
                          At least 8 characters
                        </span>
                      </div>
                      <div className="flex items-center">
                        {/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-gray-400 mr-1" />}
                        <span className={/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password) ? "text-green-500" : "text-gray-500"}>
                          Uppercase and lowercase letters
                        </span>
                      </div>
                      <div className="flex items-center">
                        {/\d/.test(formData.password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-gray-400 mr-1" />}
                        <span className={/\d/.test(formData.password) ? "text-green-500" : "text-gray-500"}>
                          At least one number
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                <div className="relative">
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`border-gray-300 pr-10 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 focus:border-blue-500'}`}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword[0]}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms} 
                    onCheckedChange={(checked) => {
                      setAcceptTerms(checked as boolean)
                      if (errors.terms) {
                        setErrors({...errors, terms: []})
                      }
                    }}
                    className={`${errors.terms ? 'border-red-500' : ''}`}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept the <Link href="/terms" className="text-blue-600 hover:underline">terms and conditions</Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500 mt-1">{errors.terms[0]}</p>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="updates" 
                  checked={receiveUpdates} 
                  onCheckedChange={(checked) => setReceiveUpdates(checked as boolean)}
                />
                <label
                  htmlFor="updates"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I want to receive updates about recycling tips and events
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : "Create Account"}
              </Button>
              
              <div className="text-sm text-gray-500 text-center mt-6">
                Already have an account?
                <div className="mt-2">
                  <Link href="/login/user_login" className="text-blue-600 hover:text-blue-800 font-medium">Sign in</Link>
                </div>
              </div>
              
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="border-gray-300">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                  Facebook
                </Button>
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

export default UserSignupPage
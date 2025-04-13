"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Building2, Eye, EyeOff, Loader2, CheckCircle, XCircle } from "lucide-react"
import { authService, ApiError } from '@/services/authServices'
import { toast } from 'sonner'
import Link from 'next/link'

const BusinessSignupPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessAddress: "",
    businessType: "",
    phone: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  // Check if user is already logged in
  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  const businessTypes = [
    "Recycling Center",
    "Waste Management Facility",
    "Scrap Yard",
    "E-Waste Collector",
    "Composting Facility",
    "Other"
  ]

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
    
    // Validate business name
    if (!formData.businessName.trim()) {
      newErrors.businessName = ["Business name is required"]
    }
    
    // Validate business address
    if (!formData.businessAddress.trim()) {
      newErrors.businessAddress = ["Business address is required"]
    }
    
    // Validate business type
    if (!formData.businessType) {
      newErrors.businessType = ["Please select a business type"]
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
        userType: 'business',
        businessName: formData.businessName,
        businessAddress: formData.businessAddress,
        businessType: formData.businessType,
        phone: formData.phone
      })
      toast.success("Business account created successfully!")
      router.push('/dashboard')
    } catch (error: any) {
      const apiError = error as ApiError;
      if (apiError.errors) {
        setErrors(apiError.errors);
        toast.error(apiError.message);
      } else {
        toast.error(error.message || "Failed to create account. Please try again.")
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
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
            <CardTitle className="text-2xl font-bold text-center">Create Business Account</CardTitle>
            <CardDescription className="text-center text-gray-500">
              Join our network of recycling businesses
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
                  className={`border-gray-300 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-sm font-medium">Business Name</Label>
                <Input 
                  id="businessName" 
                  name="businessName"
                  type="text" 
                  placeholder="Your Company Name" 
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`border-gray-300 ${errors.businessName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
                  required
                />
                {errors.businessName && (
                  <p className="text-sm text-red-500">{errors.businessName[0]}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-sm font-medium">Business Type</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => {
                    setFormData({...formData, businessType: value})
                    if (errors.businessType) {
                      setErrors({...errors, businessType: []})
                    }
                  }}
                >
                  <SelectTrigger className={`border-gray-300 ${errors.businessType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.businessType && (
                  <p className="text-sm text-red-500">{errors.businessType[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessAddress" className="text-sm font-medium">Business Address</Label>
                <Input 
                  id="businessAddress" 
                  name="businessAddress"
                  type="text" 
                  placeholder="123 Business St, City, Country" 
                  value={formData.businessAddress}
                  onChange={handleChange}
                  className={`border-gray-300 ${errors.businessAddress ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
                  required
                />
                {errors.businessAddress && (
                  <p className="text-sm text-red-500">{errors.businessAddress[0]}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="company@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`border-gray-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email[0]}</p>
                )}
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
                    className={`border-gray-300 pr-10 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
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
                    className={`border-gray-300 pr-10 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'focus:ring-green-500 focus:border-green-500'}`}
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
                  I accept the <Link href="/terms" className="text-green-600 hover:underline">terms and conditions</Link>
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-500 mt-1">{errors.terms[0]}</p>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 text-white"
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
                  <Link href="/login/business_login" className="text-green-600 hover:text-green-800 font-medium">Sign in</Link>
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

export default BusinessSignupPage
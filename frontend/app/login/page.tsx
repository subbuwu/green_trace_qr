"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Navbar } from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'

const LoginPage = () => {
  const router = useRouter()

  const handleBusinessLogin = () => {
    router.push('/login/business_login')
  }

  const handleDeveloperLogin = () => {
    router.push('/login/user_login')
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Decorative gradient elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-70 blur-3xl transform rotate-12"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gradient-to-tr from-green-100 to-teal-200 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-10 -left-20 w-80 h-80 bg-gradient-to-tr from-green-200 to-teal-300 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute top-2 left-1/2 -translate-y-1/2 w-85 h-85 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full opacity-60 blur-2xl"></div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-grow relative z-10">
        {/* Left side - Business */}
        <div className="flex-1 p-12 md:p-20 flex flex-col items-center justify-center backdrop-blur-sm bg-white/30 border-r border-gray-200 transition-all duration-300 hover:bg-white/40">
          <div className="max-w-md w-full">
            <div className="inline-block mb-6 px-3 py-1 bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-medium rounded-full shadow-sm transition-transform duration-300 hover:scale-105">
              BUSINESS
            </div>
            
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">For Business</h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Welcome to the Green Trace platform. Business owners can use this platform to receive and track the recycling materials of their customers.
            </p>
            
            <Button 
              onClick={handleBusinessLogin}
              className="mb-8 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-md text-lg font-semibold transition-all duration-300 hover:shadow-lg  cursor-pointer"
            >
              Login
            </Button>
          </div>
        </div>
        
        {/* Right side - Customers */}
        <div className="flex-1 p-12 md:p-20 flex flex-col items-center justify-center backdrop-blur-sm bg-white/20 transition-all duration-300 hover:bg-white/30">
          <div className="max-w-md w-full">
            <div className="inline-block mb-6 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium rounded-full shadow-sm transition-transform duration-300 hover:scale-105">
              CUSTOMERS
            </div>
            
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">For Customers</h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Join Green Trace to recycle your materials and earn rewards. Customers can use this gamified platform to recycle their materials and earn rewards.
            </p>
            
            <Button 
              onClick={handleDeveloperLogin}
              className="mb-8 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 shadow-md transition-all duration-300 hover:shadow-lg text-lg font-semibold cursor-pointer"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-6 text-center relative z-10">
        <p className="text-sm text-gray-400">
          &copy; 2025 Green Trace. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default LoginPage
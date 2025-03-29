"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Navbar } from '@/components/Navbar'
import { 
  Building2, 
  Users, 
  ArrowRight, 
  Leaf, 
  Lock, 
  BarChart4,
  Facebook,
  Twitter,
  Instagram,
  Shield,
  Award,
  Target,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  Info,
  HelpCircle
} from "lucide-react"

export default function LoginPage (){
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<any>(null)

  const handleBusinessLogin = () => {
    router.push('/login/business_login')
  }

  const handleUserLogin = () => {
    router.push('/login/user_login')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-16 relative">

        
        {/* Enhanced Header */}
        <div className="text-center mb-12 relative z-10 max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
            <Leaf className="h-8 w-8 text-teal-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Welcome to <span className="text-teal-600">GreenTrace</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Choose your portal to access our sustainable ecosystem. Together, we're making a difference.
          </p>
        </div>
        
        {/* Enhanced Login options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10">
          {/* Business Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative ${
              hoveredCard === 'business' ? 'border-l-4 border-teal-500 ring-2 ring-teal-100' : 'border border-slate-200'
            }`}
            onMouseEnter={() => setHoveredCard('business')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"></div>
            <div className="p-8">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-teal-600" />
              </div>
              
              <h2 className="text-2xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                Business Portal
                <Shield className="h-5 w-5 text-teal-500" />
              </h2>
              
              <p className="text-slate-600 mb-6">
                For businesses tracking recycling efforts, managing customer rewards, and accessing sustainability analytics.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Track material collection metrics',
                  'Manage customer reward programs',
                  'Access sustainability dashboards'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={handleBusinessLogin}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center gap-2 py-6 group rounded-xl"
              >
                <span>Business Login</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Customer Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative ${
              hoveredCard === 'customer' ? 'border-l-4 border-blue-500 ring-2 ring-blue-100' : 'border border-slate-200'
            }`}
            onMouseEnter={() => setHoveredCard('customer')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
            <div className="p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              
              <h2 className="text-2xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                Customer Portal
                <Award className="h-5 w-5 text-blue-500" />
              </h2>
              
              <p className="text-slate-600 mb-6">
                For individuals participating in recycling programs, tracking personal impact, and redeeming rewards.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Track your recycling contributions',
                  'Redeem points for eco-friendly rewards',
                  'Monitor your environmental impact'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={handleUserLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-6 group rounded-xl"
              >
                <span>Customer Login</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Additional options */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center z-10">
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-2 rounded-full px-6">
            <Lock className="h-4 w-4" />
            <span>Privacy Policy</span>
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-2 rounded-full px-6">
            <Leaf className="h-4 w-4" />
            <span>About GreenTrace</span>
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-2 rounded-full px-6">
            <BarChart4 className="h-4 w-4" />
            <span>Impact Report</span>
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-2 rounded-full px-6">
            <HelpCircle className="h-4 w-4" />
            <span>Help Center</span>
          </Button>
        </div>
      </div>
      
      {/* Enhanced Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-teal-600" />
            <span className="text-slate-800 font-semibold text-lg">
              GreenTrace
            </span>
          </div>
          
          <div className="text-sm text-slate-500 flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>© 2025 GreenTrace. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-teal-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

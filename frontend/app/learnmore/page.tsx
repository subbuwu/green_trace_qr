"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Building2 } from "lucide-react"
import Home from '../page'
import { motion } from 'motion/react'
import { Leaf } from 'lucide-react'

const LearnmorePage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg1_image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-green-950/80" />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mt-6"
        >
          <div className="flex items-start justify-center h-screen gap-2 mt-6">
            <Leaf className="h-12 w-12 text-green-400" />
            <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight ">
            Green<span className="text-green-400">Trace</span>
            </h1>
          </div>
        </motion.div>
      </div>  
      
    <div className="min-h-screen bg-white flex flex-col">
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
      
        GreenTrace is an innovative QR-based recycling rewards platform that encourages individuals to recycle by offering points that can be redeemed at local businesses. Our mission is to create a sustainable and rewarding recycling ecosystem that benefits both the environment and the community.  
        
        How Does It Work?
        1. Collect Recyclables – Gather recyclable items such as plastic bottles, paper, or metal cans. 
        2. Scan & Drop – Visit a partnered recycling center and scan the provided QR code.  
        3. Earn Points – The center verifies your recyclables and awards GreenPoints based on the quantity and type.  
        4. Redeem Rewards – Use your points to get discounts, vouchers, and exclusive deals at local partner businesses.  
        5. Track Your Impact – View your recycling history and see how much waste you’ve helped divert from landfills.  
        
        Why Choose GreenTrace?  
        Gamified Recycling: Our point-based system makes recycling engaging and rewarding.  
        Support Local Businesses: Earn rewards that can be used at partnered stores, cafés, and service providers.  
        EcoFriendly Impact: Every action contributes to a greener community and helps reduce waste.  
        RealTime Tracking: Monitor your progress and environmental contribution through our dashboard.  
        Community Recognition: Compete on the leaderboard and get featured for your sustainability efforts.  
        
        Join the Green Movement!  
        Recycling is no longer just a responsibility—it’s an opportunity. With GreenTrace, you can make an impact while enjoying exciting rewards.  
        
        Start Recycling Today! Sign up now and take the first step toward a greener future!  
    </div>   
    </div>
  )  
}

export default LearnmorePage
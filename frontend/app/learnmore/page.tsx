"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: 'url(/bg1_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-green-950/80" />
    </div>
          
    {/* Header with logo and back button */}
    <div className="relative z-20 p-4 flex items-center justify-between">
      {/* Back button */}
      <Button 
        variant="outline" 
        onClick={handleBack} 
        className="bg-green-800/40 text-white hover:bg-green-700/60 border-green-600"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
      
      {/* Centered GreenTrace logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2"
      >
        <Leaf className="h-10 w-10 text-green-400" />
        <h1 className="text-6xl font-extrabold text-white tracking-tight h-15">
          Green<span className="text-green-400">Trace</span>
        </h1>
      </motion.div>
      
      {/* Empty div to maintain spacing */}
      <div className="w-32"></div>
    </div> 
    
    <div className="container mx-auto px-4 py-1 mt-5">
      <Card className="bg-white/10 backdrop-blur-sm text-white border-green-600/30 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-400">GreenTrace: Recycle, Scan, Reward, <span className="text-white">A Smarter Way to Environmental Impact</span></CardTitle>
          
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="mb-4">In today's world, individual actions can create meaningful change. Our QR-based recycling rewards system is designed to transform the way you think about waste management and environmental responsibility.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-2">How It Works</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Scan QR codes on recyclable items using our mobile app</li>
              <li>Each scan tracks your recycling efforts and converts to reward points</li>
              <li>Redeem points at local businesses, donate to environmental causes, or get discounts on eco-friendly products</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-2">Beyond Individual Rewards</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We collect detailed recycling data to help municipalities and organizations</li>
              <li>This data helps understand waste patterns and optimize recycling processes</li>
              <li>Your participation contributes to data-driven environmental conservation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-2">Environmental Impact</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Our system addresses low participation and high contamination rates in traditional recycling</li>
              <li>Get real-time feedback and education about proper recycling techniques</li>
              <li>Learn about the specific environmental impact of your actions, including saved energy, water, and raw materials</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-2">Privacy & Security</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>All user data is anonymized and encrypted</li>
              <li>Your recycling information remains confidential</li>
              <li>We partner with local governments, waste management facilities, and eco-conscious businesses</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-2">Join Our Mission</h3>
            <p className="mt-2">Every scan, every item, every point is a step towards a more sustainable future. Together, we can turn everyday waste into opportunities for personal reward and global environmental impact.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>    
  )  
}

export default LearnmorePage
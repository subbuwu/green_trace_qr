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
          
    {/* Main content */}
    <div className="relative top-0 left-0 z-20 p-4">
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1,x: 0, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="flex items-center gap-3 mt-6"
      >
        <Leaf className="h-12 w-12 text-green-400" />
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight pointer-cursor">
          Green<span className="text-green-400">Trace</span>
        </h1>
      </motion.div>
    </div> 
    <div>
      <header>
      <p className="text-white mt-6">
      Recycle, Scan, Reward: A Smarter Way to Environmental Impact

In today's world, individual actions can create meaningful change. Our QR-based recycling rewards system is designed to transform the way you think about waste management and environmental responsibility. By simply scanning QR codes on your recyclable items, you're not just disposing of waste – you're actively participating in a sustainable ecosystem that benefits both the environment and your personal rewards.

How does our system work? Every time you recycle an eligible item, you'll use our mobile app to scan the unique QR code. This simple action tracks your recycling efforts, converting each scanned item into reward points. These points aren't just numbers – they're tangible benefits that can be redeemed at local businesses, donated to environmental causes, or used for discounts on eco-friendly products. We've gamified recycling to make sustainable living both easy and exciting.

Our technology goes beyond individual rewards. By collecting detailed recycling data, we help municipalities and environmental organizations understand waste patterns, optimize recycling processes, and develop more effective sustainability strategies. Your small action of scanning a QR code contributes to a larger, data-driven approach to environmental conservation. We're not just creating a rewards program; we're building a community of conscious consumers committed to reducing waste.

Environmental impact is at the heart of our mission. Traditional recycling often suffers from low participation and high contamination rates. Our QR system provides real-time feedback, educating users about proper recycling techniques and the specific environmental impact of their actions. Each scan comes with insights about how much energy, water, and raw materials are saved by recycling that particular item. We believe that when people understand the direct consequences of their choices, they're more likely to make sustainable decisions.

Privacy and security are paramount in our approach. All user data is anonymized and encrypted, ensuring that your recycling information remains confidential. Our system is designed to protect your personal information while providing transparent, meaningful rewards. We collaborate with local governments, waste management facilities, and eco-conscious businesses to create a comprehensive, trustworthy recycling ecosystem.

Join us in revolutionizing recycling. Every scan, every item, every point is a step towards a more sustainable future. Together, we can turn everyday waste into opportunities for personal reward and global environmental impact.
      </p>
      </header>
    </div> 
  </div>    
  )  
}

export default LearnmorePage
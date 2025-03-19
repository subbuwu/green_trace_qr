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
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url(/bg1_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-green-950/80" />
    </div>
          
    {/* Main content */}
    <div className="relative z-20 flex flex-col items-center  h-screen px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mt-6"
      >
        <Leaf className="h-12 w-12 text-green-400" />
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight pointer-cursor">
          Green<span className="text-green-400">Trace</span>
        </h1>
      </motion.div>
    </div>  
    <div className="flex items-center ">
      <header>
        
      </header>
    </div>
  </div>    
  )  
}

export default LearnmorePage
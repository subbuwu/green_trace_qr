"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Building2 } from "lucide-react"
import Home from '../page'

const LearnmorePage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/')
  }

  return (
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
      
    </div>   
  )  
}

export default LearnmorePage
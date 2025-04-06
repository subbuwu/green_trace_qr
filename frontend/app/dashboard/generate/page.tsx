"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Printer, Leaf, QrCode } from "lucide-react"
import { motion } from 'framer-motion' // Using framer-motion instead of motion/react
import dynamic from 'next/dynamic'

// Dynamically import QRCode to avoid SSR issues
const QRCode = dynamic(() => import('qrcode.react'), { ssr: false })

const GenerateQRPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("user123") // Assume user is logged in
  const [wasteType, setWasteType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [unit, setUnit] = useState("grams")
  const [qrGenerated, setQrGenerated] = useState(false)
  const [qrData, setQrData] = useState("")

  const generateQR = () => {
    if (!wasteType || !quantity) {
      alert("Please fill in all fields");
      return;
    }

    const data = JSON.stringify({
      username: username,
      wasteType: wasteType,
      quantity: `${quantity} ${unit}`
    });

    setQrData(data);
    setQrGenerated(true);
  }

  const handlePrint = () => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const printWindow = window.open('', '_blank');
      const qrCodeElement = document.getElementById('qrcode');
      const qrCanvas = qrCodeElement ? qrCodeElement.querySelector('canvas') : null;
      
      if (qrCanvas) {
        const qrImageUrl = qrCanvas.toDataURL('image/png');
        
        printWindow.document.write(`
          <html>
            <head>
              <title>GreenTrace QR Code</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  text-align: center;
                  padding: 20px;
                }
                .container {
                  max-width: 400px;
                  margin: 0 auto;
                  border: 1px solid #ccc;
                  padding: 20px;
                  border-radius: 8px;
                }
                .qr-info {
                  margin-top: 15px;
                  text-align: left;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>GreenTrace Recycling QR Code</h2>
                <div id="qrcode">
                  <img src="${qrImageUrl}" alt="QR Code" />
                </div>
                <div class="qr-info">
                  <p><strong>User:</strong> ${username}</p>
                  <p><strong>Waste Type:</strong> ${wasteType}</p>
                  <p><strong>Quantity:</strong> ${quantity} ${unit}</p>
                  <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
      }
    }
  }

  return (
    <div className="relative w-full overflow-hidden">           
      <div className="container mx-auto px-4 py-8 mt-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Form */}
          <Card className="bg-white/10 backdrop-blur-sm text-white border-green-600/30 shadow-xl flex-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-400 flex items-center">
                <QrCode className="mr-2 h-6 w-6" /> Generate QR Code
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-green-400 mb-1 block ">Username</Label>
              </div>

              <div>
                <Label htmlFor="wasteType" className="text-green-400 mb-1 block">Waste Type</Label>
                <Select onValueChange={setWasteType} value={wasteType}>
                  <SelectTrigger className="bg-white/20 border-green-600/30 text-green-400 cursor-pointer">
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent className="bg-green-950 text-green-400 border-green-600/30">
                    <SelectItem value="plastic">Plastic</SelectItem>
                    <SelectItem value="paper">Paper</SelectItem>
                    <SelectItem value="metal">Metal</SelectItem>
                    <SelectItem value="glass">Glass</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <Label htmlFor="quantity" className="text-green-400 mb-1 block">Quantity</Label>
                  <Input 
                    id="quantity" 
                    type="number"
                    min="0"
                    placeholder="Enter quantity" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    className="bg-white/20 border-green-600/30 text-green-400 cursor-pointer" 
                  />
                </div>
                <div className="w-32">
                  <Label htmlFor="unit" className="text-green-400 mb-1 block">Unit</Label>
                  <Select onValueChange={setUnit} value={unit}>
                    <SelectTrigger className="bg-white/20 border-green-600/30 text-green-400 cursor-pointer">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-green-950 text-green-400 border-green-600/30 cursor-pointer">
                      <SelectItem value="grams">grams</SelectItem>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="items">items</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={generateQR} 
                className="bg-green-500 hover:bg-green-600 text-white font-medium w-full mt-6 cursor-pointer"
              >
                Generate QR Code
              </Button>
            </CardContent>
          </Card>

          {/* Right Section - QR Display */}
          <Card className="bg-white/10 backdrop-blur-sm text-white border-green-600/30 shadow-xl flex-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-400">Your QR Code</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-64">
              {qrGenerated ? (
                <div className="flex flex-col items-center">
                  <div 
                    id="qrcode" 
                    className="bg-white p-4 rounded-lg"
                  >
                    <QRCode 
                      value={qrData} 
                      size={200} 
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p><strong>Waste Type:</strong> {wasteType}</p>
                    <p><strong>Quantity:</strong> {quantity} {unit}</p>
                  </div>
                  <Button 
                    onClick={handlePrint} 
                    className="mt-6 bg-green hover:bg-green-700"
                  >
                    <Printer className="mr-2 h-4 w-4" /> Print QR Code
                  </Button>
                </div>
              ) : (
                <div className="text-center opacity-60 text-green-500 ">
                  <QrCode size={100} className="mx-auto mb-4 text-black" />
                  <p>Your QR code will appear here</p>
                  <p className="text-sm mt-2">Fill in the form and click Generate</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default GenerateQRPage
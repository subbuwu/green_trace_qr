import { useState } from "react"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export const QRScanner = ({onScan}: {onScan: (data: string) => void}) => {
    const [formData, setFormData] = useState({
      userId: '',
      wasteType: '',
      quantity: 1
    })
    const [qrImageUrl, setQRImageUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const handleGenerateQR = async () => {
      if (!formData.userId || !formData.wasteType) {
        toast.error("Missing information", {
          description: "Please fill in all required fields",
        })
        return
      }
      
      setIsLoading(true)
      
      try {
        // In a real implementation, this would call your API
        // For demo purposes, we'll simulate an API call
        setTimeout(() => {
          // Simulated response with entryId
          const entryId = "entry-" + Math.floor(Math.random() * 1000000)
          setQRImageUrl(`/api/qr/image/${entryId}`)
          setIsLoading(false)
          
          toast.success("QR Code Generated", {
            description: "Your QR code has been generated successfully",
          })
        }, 1500)
      } catch (error) {
        toast.error("Failed to generate QR code", {
          description: "Please try again later",
        })
        setIsLoading(false)
      }
    }
    
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="backdrop-blur-sm bg-white/30 border-white/20 transition-all duration-300 hover:bg-white/40">
          <CardHeader>
            <CardTitle>Generate QR Code</CardTitle>
            <CardDescription>Enter waste recycling details to generate a QR code</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="userId">User ID</Label>
                <Input 
                  id="userId" 
                  placeholder="Enter your User ID" 
                  value={formData.userId}
                  onChange={(e) => setFormData({...formData, userId: e.target.value})}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="wasteType">Waste Type</Label>
                <Select 
                  value={formData.wasteType} 
                  onValueChange={(value) => setFormData({...formData, wasteType: value})}
                >
                  <SelectTrigger id="wasteType">
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plastic">Plastic</SelectItem>
                    <SelectItem value="paper">Paper</SelectItem>
                    <SelectItem value="glass">Glass</SelectItem>
                    <SelectItem value="metal">Metal</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="quantity">Quantity (kg)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="quantity"
                    min={0.5}
                    max={10}
                    step={0.5}
                    value={[formData.quantity]}
                    onValueChange={(value) => setFormData({...formData, quantity: value[0]})}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{formData.quantity} kg</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
              onClick={handleGenerateQR}
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate QR Code"}
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="backdrop-blur-sm bg-white/30 border-white/20 transition-all duration-300 hover:bg-white/40">
          <CardHeader>
            <CardTitle>Your QR Code</CardTitle>
            <CardDescription>Scan this at a recycling center</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-64">
            {qrImageUrl ? (
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-lg shadow-md mb-4">
                  <img 
                    src={qrImageUrl}
                    alt="Generated QR Code" 
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">
                  This QR code contains details about your recycling submission.
                  Present it at any Green Trace collection point.
                </p>
              </div>
            ) : (
              <div className="text-gray-400 text-center">
                QR code will appear here after generation
              </div>
            )}
          </CardContent>
          {qrImageUrl && (
            <CardFooter className="flex justify-center">
              <Button variant="outline" onClick={() => window.print()}>
                Print QR Code
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    )
  }
  
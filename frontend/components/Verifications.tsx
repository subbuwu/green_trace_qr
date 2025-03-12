import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QRScanner } from "./QRScanner"

export const VerificationResult = ({ data }: { data: any }) => {
    return (
      <Card className="w-full backdrop-blur-sm bg-white/30 border-white/20 transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white">
          <CardTitle>Verification Successful</CardTitle>
          <CardDescription className="text-white text-opacity-90">
            QR code has been verified and processed
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">User ID</p>
                <p className="text-lg">{data.userId}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Entry ID</p>
                <p className="text-lg">{data.entryId}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Waste Type</p>
                <p className="text-lg capitalize">{data.wasteType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Quantity</p>
                <p className="text-lg">{data.quantity} kg</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500">Timestamp</p>
              <p className="text-lg">{new Date(data.timestamp).toLocaleString()}</p>
            </div>
            
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-green-800">Points Earned</p>
                  <p className="text-2xl font-bold text-green-600">
                    {Math.floor(data.quantity * 10)} points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
            Complete Process
          </Button>
        </CardFooter>
      </Card>
    )
  }
  
  // Business QR Verification component
export const BusinessVerification = () => {
    const [scannedData, setScannedData] = useState<any>(null)
    const [businessId, setBusinessId] = useState("business-123")
    
    const handleQRScan = (qrData: string) => {
      try {
        const parsedData = JSON.parse(qrData)
        // In a real implementation, we would call the API to verify
        setScannedData(parsedData)
      } catch (error) {
        toast.error("Invalid QR Code", {
          description: "The scanned QR code is not valid",
        })
      }
    }
    
    const resetScan = () => {
      setScannedData(null)
    }
    
    return (
      <div className="grid gap-6">
        {!scannedData ? (
          <>
            <Card className="backdrop-blur-sm bg-white/30 border-white/20 transition-all duration-300 hover:bg-white/40">
              <CardHeader>
                <CardTitle>Verify Recycling QR</CardTitle>
                <CardDescription>Scan a customer's QR code to verify and process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Label htmlFor="businessId">Business ID</Label>
                  <Input 
                    id="businessId" 
                    value={businessId} 
                    onChange={(e) => setBusinessId(e.target.value)}
                    className="mb-4"
                  />
                </div>
                <QRScanner onScan={handleQRScan} />
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <VerificationResult data={scannedData} />
            <Card className="backdrop-blur-sm bg-white/30 border-white/20 transition-all duration-300 hover:bg-white/40">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Complete the recycling process</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal list-inside text-gray-600">
                  <li>Verify the material type matches what's shown in the details</li>
                  <li>Weigh the materials to confirm the quantity</li>
                  <li>Process the materials according to standard procedure</li>
                  <li>Click "Complete Process" to finalize the transaction</li>
                </ol>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700">
                    Completing this process will award the user with points and record 
                    the transaction in the Green Trace system.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  onClick={resetScan}
                  className="w-full"
                >
                  Scan Another QR Code
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    )
  }
  
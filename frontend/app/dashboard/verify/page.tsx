"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Camera, Check, Loader2, X } from "lucide-react";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";

// Types
interface QRCodeData {
  id: string;
  consumerId: string;
  wasteType: string;
  quantity: number;
  unit: string;
  description: string;
  isVerified: boolean;
  consumer: {
    user: {
      name: string;
      email: string;
    };
    points: number;
  };
}

interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  acceptedWasteTypes: string[];
}

interface VerificationResponse {
  success: boolean;
  message: string;
  recyclingHistory?: {
    id: string;
    pointsEarned: number;
    consumer: {
      user: {
        name: string;
      };
      points: number;
    };
  };
}

export default function VerifyQRCode() {
  const router = useRouter();
  const [qrCode, setQrCode] = useState<string>("");
  const [qrCodeData, setQrCodeData] = useState<QRCodeData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [scanning, setScanning] = useState<boolean>(false);
  const [centers, setCenters] = useState<RecyclingCenter[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<{ title: string; message: string }>({
    title: "",
    message: "",
  });
  const [verificationResult, setVerificationResult] = useState<VerificationResponse | null>(
    null
  );
  const [staffName, setStaffName] = useState<string>("");
  
  const qrScannerRef = useRef<Html5QrcodeScanner | null>(null);
  const qrScannerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetchRecyclingCenters(token);

    // Improved cleanup function
    return () => {
      // Clean up on component unmount
      if (qrScannerRef.current) {
        try {
          qrScannerRef.current.clear().catch(err => {
            console.error("Error during scanner cleanup:", err);
          });
        } catch (error) {
          console.error("Scanner cleanup error:", error);
        }
      }
    };
  }, [router]);

  const fetchRecyclingCenters = async (token: string) => {
    try {
      const response = await fetch("/api/business/recycling-centers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recycling centers");
      }

      const data = await response.json();
      setCenters(data.centers);
      if (data.centers.length > 0) {
        setSelectedCenter(data.centers[0].id);
      }
    } catch (error) {
      console.error("Error fetching recycling centers:", error);
      showAlert("Error", "Failed to load recycling centers. Please try again later.");
    }
  };

  const handleQrCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrCode(e.target.value);
  };

  const handleQrLookup = async (code: string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      // Parse the QR code data
      let qrCodeId: string;
      try {
        const parsedData = JSON.parse(code);
        if (!parsedData.id) {
          throw new Error("Invalid QR code data: missing ID");
        }
        qrCodeId = parsedData.id;
      } catch (error) {
        // If parsing fails, assume the code is the ID itself
        qrCodeId = code;
      }

      const response = await fetch(`/api/business/qr-code?id=${qrCodeId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to lookup QR code: ${response.status}`);
      }

      const data = await response.json();
      
      // Validate the QR code data matches what was scanned
      if (data.qrCode.id !== qrCodeId) {
        throw new Error("QR code data mismatch");
      }
      
      setQrCodeData(data.qrCode);
      
      if (data.qrCode.isVerified) {
        showAlert("Already Verified", "This QR code has already been verified.");
      }
    } catch (error) {
      console.error("Error looking up QR code:", error);
      showAlert("Error", error instanceof Error ? error.message : "Failed to find QR code. Please check the ID and try again.");
      setQrCodeData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleManualLookup = async () => {
    if (!qrCode) {
      showAlert("Error", "Please enter a QR code ID");
      return;
    }
    await handleQrLookup(qrCode);
  };

  // Add useEffect for scanner initialization
  useEffect(() => {
    const initializeScanner = async () => {
      if (scanning && qrScannerContainerRef.current) {
        try {
          // Clear any existing scanner first
          if (qrScannerRef.current) {
            await qrScannerRef.current.clear();
            qrScannerRef.current = null;
          }
          
          // Clear the container's content
          qrScannerContainerRef.current.innerHTML = '';

          // Create scanner with more reliable settings
          qrScannerRef.current = new Html5QrcodeScanner(
            "qr-scanner-container",
            {
              fps: 5,
              qrbox: { width: 200, height: 200 },
              aspectRatio: 1.0,
              disableFlip: false,
              formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
              showTorchButtonIfSupported: true,
              defaultZoomValueIfSupported: 1.5,
            },
            false
          );

          // Start scanning
          qrScannerRef.current.render(
            async (decodedText) => {
              console.log("QR code detected:", decodedText);
              setQrCode(decodedText);
              await stopCamera();
              setTimeout(() => {
                handleQrLookup(decodedText);
              }, 500);
            },
            (errorMessage) => {
              if (errorMessage !== "QR code not found") {
                console.error("QR scanning error:", errorMessage);
              }
            }
          );
        } catch (error) {
          console.error("Camera initialization error:", error);
          showAlert("Camera Error", "Unable to access camera. Please check camera permissions or try manual entry.");
          setScanning(false);
        }
      }
    };

    initializeScanner();
  }, [scanning]);

  const startCamera = async () => {
    try {
      setScanning(true);
    } catch (error) {
      console.error("Error starting camera:", error);
      showAlert("Camera Error", "Unable to start camera. Please try again.");
      setScanning(false);
    }
  };

  const stopCamera = async () => {
    try {
      if (qrScannerRef.current) {
        await qrScannerRef.current.clear();
        qrScannerRef.current = null;
        
        // Also clear the container's content
        if (qrScannerContainerRef.current) {
          qrScannerContainerRef.current.innerHTML = '';
        }
      }
    } catch (error) {
      console.error("Error stopping camera:", error);
    } finally {
      setScanning(false);
    }
  };

  const verifyQrCode = async () => {
    if (!qrCodeData || !selectedCenter || !staffName) {
      showAlert("Missing Information", "Please ensure you have selected a recycling center and entered staff name.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch("/api/business/verify-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          qrCodeId: qrCodeData.id,
          recyclingCenterId: selectedCenter,
          staffName: staffName.trim(),
          notes: notes.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to verify QR code");
      }

      const result = await response.json();
      setVerificationResult(result);
      setVerified(true);
      showAlert("Success", `Successfully verified recycling for ${result.recyclingHistory?.consumer.user.name}. They earned ${result.recyclingHistory?.pointsEarned} points!`);
      
      // Reset form
      setQrCode("");
      setQrCodeData(null);
      setNotes("");
      setStaffName("");
    } catch (error) {
      console.error("Error verifying QR code:", error);
      showAlert("Error", error instanceof Error ? error.message : "Failed to verify QR code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setQrCode("");
    setQrCodeData(null);
    setNotes("");
    setStaffName("");
    setVerified(false);
    setVerificationResult(null);
  };

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  const showAlert = (title: string, message: string) => {
    setAlertMessage({ title, message });
    setAlertOpen(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Verify Recycling QR Code</h1>
          <p className="text-gray-600">
            Scan or enter a QR code to verify consumer recycling
          </p>
        </div>
        <Button onClick={navigateToDashboard}>Back to Dashboard</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>
              Use your camera to scan a consumer's QR code
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {scanning ? (
              <div className="space-y-4">
                <div 
                  id="qr-scanner-container" 
                  ref={qrScannerContainerRef} 
                  className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100"
                  style={{ minHeight: "300px" }}
                />
                <Button onClick={stopCamera} variant="outline" className="w-full">
                  Cancel Scan
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center h-48 bg-muted rounded-lg">
                  <Camera size={64} className="text-muted-foreground" />
                </div>
                <Button 
                  onClick={startCamera} 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  Start Camera
                </Button>
              </div>
            )}
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or enter code manually
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Enter QR code ID"
                value={qrCode}
                onChange={handleQrCodeChange}
              />
              <Button 
                onClick={handleManualLookup} 
                disabled={loading}
                variant="outline"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Lookup"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {qrCodeData ? "QR Code Information" : "Verification Details"}
            </CardTitle>
            <CardDescription>
              {qrCodeData
                ? "Verify the recycling information below"
                : "QR code details will appear here after scanning"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {qrCodeData ? (
              <>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Consumer</Label>
                      <p className="text-lg font-medium">{qrCodeData.consumer.user.name}</p>
                    </div>
                    <div>
                      <Label>Material</Label>
                      <p className="text-lg font-medium capitalize">{qrCodeData.wasteType.toLowerCase()}</p>
                    </div>
                    <div>
                      <Label>Quantity</Label>
                      <p className="text-lg font-medium">{qrCodeData.quantity} {qrCodeData.unit}</p>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <p className="text-lg font-medium">
                        {qrCodeData.isVerified ? (
                          <span className="text-green-600 flex items-center">
                            <Check size={16} className="mr-1" /> Verified
                          </span>
                        ) : (
                          <span className="text-amber-600 flex items-center">
                            <X size={16} className="mr-1" /> Pending
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  
                  {qrCodeData.description && (
                    <div>
                      <Label>Description</Label>
                      <p className="text-sm text-gray-600">{qrCodeData.description}</p>
                    </div>
                  )}
                </div>

                {!qrCodeData.isVerified && (
                  <div className="space-y-4 border-t pt-4">
                    <div>
                      <Label htmlFor="recyclingCenter">Recycling Center</Label>
                      <Select value={selectedCenter} onValueChange={setSelectedCenter}>
                        <SelectTrigger id="recyclingCenter" className="mt-1">
                          <SelectValue placeholder="Select a center" />
                        </SelectTrigger>
                        <SelectContent>
                          {centers.map((center) => (
                            <SelectItem key={center.id} value={center.id}>
                              {center.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="staffName">Staff Name</Label>
                      <Input
                        id="staffName"
                        placeholder="Enter staff name"
                        value={staffName}
                        onChange={(e) => setStaffName(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Add any notes about this recycling verification"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      onClick={verifyQrCode}
                      disabled={loading || !selectedCenter || !staffName}
                      className="w-full"
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                      Verify Recycling
                    </Button>
                  </div>
                )}
              </>
            ) : verified && verificationResult ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h3 className="text-xl font-semibold">Verification Successful!</h3>
                <p>
                  {verificationResult.recyclingHistory?.consumer.user.name} earned{" "}
                  {verificationResult.recyclingHistory?.pointsEarned} points for recycling.
                </p>
                <p className="text-sm text-gray-600">
                  Their total points: {verificationResult.recyclingHistory?.consumer.points}
                </p>
                <Button onClick={resetForm} className="mt-4">
                  Verify Another QR Code
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera size={32} className="text-gray-400" />
                </div>
                <p className="text-gray-500">
                  Scan a QR code or enter a code manually to view details
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertMessage.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertMessage.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QrScannerProps {
  onScanSuccess: (data: string) => void;
  width?: string;
  height?: string;
}

const QrScannerComponent: React.FC<QrScannerProps> = ({
  onScanSuccess,
  width = '100%',
  height = '300px'
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const scannerContainerId = 'qr-reader';

  useEffect(() => {
    // Cleanup function
    return () => {
      if (scannerRef.current && scannerRef.current.getState() === Html5QrcodeScannerState.SCANNING) {
        scannerRef.current.stop().catch(error => {
          console.error("Error stopping scanner:", error);
        });
      }
    };
  }, []);

  const startScanner = async () => {
    setError(null);
    
    try {
      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode(scannerContainerId);
      }
      
      // Start scanning
      setIsScanning(true);
      
      const qrboxFunction = (viewfinderWidth: number, viewfinderHeight: number) => {
        const minEdgePercentage = 0.7; // 70%
        const minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
        const qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
        return {
          width: qrboxSize,
          height: qrboxSize
        };
      };
      
      await scannerRef.current.start(
        { facingMode: "environment" }, // Use back camera
        {
          fps: 10,
          qrbox: qrboxFunction,
          aspectRatio: 1.0,
        },
        (decodedText) => {
          // On successful scan
          stopScanner();
          onScanSuccess(decodedText);
        },
        (errorMessage) => {
          // Ignore errors during scanning as they're usually just frames without QR codes
          console.log(errorMessage);
        }
      );
    } catch (err) {
      setIsScanning(false);
      setError('Camera access denied or not available. Please ensure you have granted camera permissions.');
      console.error("Error starting scanner:", err);
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current && scannerRef.current.getState() === Html5QrcodeScannerState.SCANNING) {
      try {
        await scannerRef.current.stop();
        setIsScanning(false);
      } catch (error) {
        console.error("Error stopping scanner:", error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Card className="w-full overflow-hidden relative mb-4" style={{ height, minHeight: '300px' }}>
        <div id={scannerContainerId} className="w-full h-full">
          {!isScanning && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Camera preview will appear here</p>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 p-4">
              <p className="text-red-500 text-center">{error}</p>
            </div>
          )}
          
          {isScanning && (
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-scan"></div>
            </div>
          )}
        </div>
      </Card>
      
      <div className="flex gap-4">
        {!isScanning ? (
          <Button 
            onClick={startScanner}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
          >
            Start Scanner
          </Button>
        ) : (
          <Button 
            onClick={stopScanner}
            variant="outline"
          >
            Stop Scanner
          </Button>
        )}
      </div>
    </div>
  );
};

export default QrScannerComponent;
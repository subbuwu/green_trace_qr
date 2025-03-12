'use client'

import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

// TypeScript interfaces
interface ScanResult {
  text: string;
  format: string;
}

interface VerificationResultEntry {
  id: string;
  userId: string;
  wasteType: string;
  quantity: number;
  createdAt: string;
}

interface VerificationResult {
  success: boolean;
  entry: VerificationResultEntry;
}

// Global window type extension
declare global {
  interface Window {
    scanner: Html5Qrcode | null;
  }
}

export default function QRScanner() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [scanError, setScanError] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);

  // Start scanning
  const startScanner = (): void => {
    setIsScanning(true);
    setScanError('');
    setScanResult(null);
    setVerificationResult(null);
    
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    html5QrCode.start(
      { facingMode: "environment" }, 
      config,
      onScanSuccess,
      onScanFailure
    )
    .catch((err: Error) => {
      setScanError(`Failed to start scanner: ${err.message}`);
      setIsScanning(false);
    });
    
    // Store scanner instance to stop it later
    window.scanner = html5QrCode;
  };

  // Handle successful scan
  const onScanSuccess = async (decodedText: string, decodedResult: any): Promise<void> => {
    // Stop scanner
    if (window.scanner) {
      window.scanner.stop().catch((err: Error) => console.error(err));
      setIsScanning(false);
    }

    const initialPayload = Buffer.from(decodedText, 'base64').toString('utf-8');

    setScanResult({
      text: initialPayload,
      format: decodedResult.result.format.format
    });
    console.log('text is', decodedText)
    console.log(decodedResult)
    
    // try {
    //   const response = await fetch('/api/scan/verify', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       qrContent: decodedText
    //     }),
    //   });
      
    //   const data = await response.json();
      
    //   if (!response.ok) {
    //     setScanError(data.error || 'Verification failed');
    //     return;
    //   }
      
    //   setVerificationResult(data);
    // } catch (error) {
    //   setScanError(`API error: ${error instanceof Error ? error.message : String(error)}`);
    // }
  };

  // Handle scan failures
  const onScanFailure = (error: string): void => {
    // Don't set error for every frame failure
    console.warn(`QR scan error: ${error}`);
  };

  // Stop scanner when component unmounts
  useEffect(() => {
    return () => {
      if (window.scanner) {
        window.scanner.stop().catch((err: Error) => console.error(err));
        window.scanner = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Scan Recycling QR Code</h2>
      
      {!isScanning && !scanResult && (
        <button 
          onClick={startScanner} 
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-200"
        >
          Start Scanner
        </button>
      )}
      

      <div className={`w-full ${isScanning ? 'block' : 'hidden'}`}>
  <div id="reader" className="border-2 border-gray-300 rounded-lg overflow-hidden w-full max-w-md mx-auto"></div>


          <div id="reader" className="border-2 border-gray-300 rounded-lg overflow-hidden w-full max-w-md mx-auto"></div>
          <button 
            onClick={() => {
              if (window.scanner) {
                window.scanner.stop().catch((err: Error) => console.error(err));
                setIsScanning(false);
              }
            }}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors duration-200 mx-auto block"
          >
            Cancel
          </button>
        </div>

      
      {scanError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg w-full text-center">
          {scanError}
        </div>
      )}
      
      {scanResult && !verificationResult && !scanError && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg w-full">
          <p className="font-medium">QR Code detected:</p>
          <p className="break-all mt-1">{scanResult.text}</p>
          <p className="text-sm text-blue-500 mt-1">Verifying...</p>
        </div>
      )}
      
      {verificationResult && (
        <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-lg w-full">
          <h3 className="text-xl font-bold text-green-700 mb-2">Verification Successful!</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Waste Type:</span> {verificationResult.entry.wasteType}</p>
            <p><span className="font-semibold">Quantity:</span> {verificationResult.entry.quantity}</p>
            <p><span className="font-semibold">Created:</span> {new Date(verificationResult.entry.createdAt).toLocaleString()}</p>
          </div>
          <button 
            onClick={() => {
              setScanResult(null);
              setVerificationResult(null);
              startScanner();
            }}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
          >
            Scan Another
          </button>
        </div>
      )}
    </div>
  );
}
"use client";
import { BusinessVerification } from "@/components/Verifications";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { QRGenerator } from "@/components/QRGenerator";
import { useRouter } from "next/navigation";

export default function QRPage() {
  const router = useRouter();
  
  return (
    <div className="h-full w-full flex flex-col relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
      {/* Decorative gradient elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-70 blur-3xl transform rotate-12"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gradient-to-tr from-green-100 to-teal-200 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto p-6 flex-grow relative z-10">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Green Trace QR Platform</h1>
        
        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="generate">Generate QR</TabsTrigger>
            <TabsTrigger value="verify">Verify QR</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate" className="mt-0">
            <QRGenerator />
          </TabsContent>
          
          <TabsContent value="verify" className="mt-0">
            <BusinessVerification />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertCircle, CheckCircle2, Upload, Building, Briefcase, Clock } from 'lucide-react';
import { toast } from 'sonner';

const verificationSchema = z.object({
  businessRegistrationNumber: z.string().min(5, "Registration number must be at least 5 characters"),
  taxIdentificationNumber: z.string().min(5, "Tax ID must be at least 5 characters"),
  businessDescription: z.string().min(30, "Please provide a detailed business description (min 30 characters)"),
  websiteUrl: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  documentUrl: z.string().optional(),
});

const BusinessVerificationCard = ({ businessData, onVerificationComplete } : { businessData: any, onVerificationComplete: any }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [documentFile, setDocumentFile] = useState<File | null> (null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const form = useForm({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      businessRegistrationNumber: '',
      taxIdentificationNumber: '',
      businessDescription: '',
      websiteUrl: '',
      documentUrl: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentFile(e.target.files[0]);
    }
  };

  const uploadDocument = async () => {
    if (!documentFile) return '';
    
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('file', documentFile);
    
    try {
      // Simulate upload progress
      const uploadInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 95) {
            clearInterval(uploadInterval);
            return 95;
          }
          return prev + 5;
        });
      }, 100);
      
      // Get token from local storage
      const token = localStorage.getItem('token');
      
      // Send the file to your API
      const response = await fetch('/api/upload/document', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });
      
      clearInterval(uploadInterval);
      setUploadProgress(100);
      
      if (!response.ok) {
        throw new Error('Failed to upload document');
      }
      
      const data = await response.json();
      return data.fileUrl;
    } catch (error) {
      console.error('Error uploading document:', error);
      toast.error('Failed to upload document. Please try again.');
      throw error;
    }
  };

  const onSubmit = async (values: any) => {
    setIsSubmitting(true);
    
    try {
      // Upload document if available
      let documentUrl = '';
      if (documentFile) {
        documentUrl = await uploadDocument();
        values.documentUrl = documentUrl;
      }
      
      // Get token from local storage
      const token = localStorage.getItem('token');
      
      if (!token) {
        toast.error('Authentication error. Please log in again.');
        return;
      }
      
      // Submit verification request
      const response = await fetch('/api/business/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Verification failed');
      }
      
      const data = await response.json();
      
      toast.success('Business verified successfully!');
      
      // Notify parent component about successful verification
      if (onVerificationComplete) {
        onVerificationComplete(data);
      }
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error : any) {
      console.error('Error during verification:', error);
      toast.error(error.message || 'Verification failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-amber-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Building className="h-5 w-5 mr-2 text-amber-600" /> 
          Business Verification
        </CardTitle>
        <CardDescription>
          Complete verification to unlock full business features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-amber-50 p-4 rounded-lg mb-4 flex items-start gap-3">
          <Clock className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-800">Verification Required</p>
            <p className="text-xs text-amber-700 mt-1">
              Please provide your business details and supporting documentation to verify your account.
              Once verified, you'll have full access to all business features.
            </p>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="businessRegistrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Registration Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your registration number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="taxIdentificationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Identification Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your tax ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="businessDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your recycling business operations, locations, and goals..." 
                      className="min-h-24"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Provide details about your recycling operations and how you help the environment
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourwebsite.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <FormLabel>Supporting Document</FormLabel>
              <div className="border rounded-md p-4 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <Upload className="h-5 w-5 text-gray-400" />
                  <div className="text-sm">
                    {documentFile ? (
                      <span className="font-medium text-green-600">
                        {documentFile.name}
                      </span>
                    ) : (
                      <span className="text-gray-500">
                        Upload business registration or license
                      </span>
                    )}
                  </div>
                </div>
                
                {documentFile && uploadProgress > 0 && (
                  <div className="w-full mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-600 h-1.5 rounded-full transition-all" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-gray-500">{uploadProgress}%</span>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="text-xs h-8"
                    onClick={() => {
                      const inputElement = document.getElementById('document-upload') as HTMLInputElement;
                      if (inputElement) {
                        inputElement.click();
                      }
                    }}
                  >
                    Select File
                  </Button>
                  <input
                    id="document-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                  />
                  
                  <div className="text-xs text-gray-500 flex items-center">
                    PDF, JPG, PNG (Max 5MB)
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-amber-600 hover:bg-amber-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⟳</span>
                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Complete Verification
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BusinessVerificationCard;
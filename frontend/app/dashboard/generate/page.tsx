// app/dashboard/generate/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

// Icons
import {
  QrCode,
  Camera,
  Download,
  Printer,
  Share2,
  ClipboardCopy,
  CheckCircle2,
  Clock,
  AlertCircle,
  Info,
  Loader2,
  Image,
  Trash2,
  Search
} from 'lucide-react';

// Services 
import { authService } from '@/services/authServices';
import { qrCodeService } from '@/services/qrCodeServices';

// Form schema definition
const formSchema = z.object({
  wasteType: z.enum([
    "PAPER", "PLASTIC", "GLASS", "METAL", 
    "ELECTRONICS", "ORGANIC", "TEXTILE", "HAZARDOUS", "OTHER"
  ], {
    required_error: "Please select a waste type",
  }),
  quantity: z.coerce.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be a number",
  }).positive({
    message: "Quantity must be positive",
  }),
  unit: z.string({
    required_error: "Unit is required",
  }).min(1, {
    message: "Unit is required",
  }),
  description: z.string().optional(),
});

// Unit options
const unitOptions = [
  { value: 'kg', label: 'Kilograms (kg)' },
  { value: 'g', label: 'Grams (g)' },
  { value: 'lbs', label: 'Pounds (lbs)' },
  { value: 'oz', label: 'Ounces (oz)' },
  { value: 'pcs', label: 'Pieces (pcs)' },
  { value: 'l', label: 'Liters (l)' },
];

type FormValues = z.infer<typeof formSchema>;

interface QRCodeData {
  id: string;
  wasteType: string;
  quantity: number;
  unit: string;
  qrCodeUrl: string;
  createdAt: string;
  description?: string;
  isVerified: boolean;
  verifiedAt?: string;
  consumerId?: string;
  photos?: string[];
  qrCodeData?: string; // The actual data that will be encoded in the QR
}

interface QRCodeResponse {
  success: boolean;
  qrCode: {
    id: string;
    consumerId: string;
    wasteType: string;
    quantity: number;
    unit: string;
    description?: string;
    photos: string[];
    qrCodeUrl: string;
    isVerified: boolean;
    createdAt: string;
  };
}

const GenerateQRPage = () => {
  const router = useRouter();
  
  // State for handling the form and QR code generation
  const [activeTab, setActiveTab] = useState('create');
  const [loading, setLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFetchingHistory, setIsFetchingHistory] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [generatedQRCode, setGeneratedQRCode] = useState<QRCodeData | null>(null);
  const [qrCodeHistory, setQrCodeHistory] = useState<QRCodeData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'verified' | 'pending'>('all');
  const [error, setError] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(true);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wasteType: 'PAPER',
      quantity: 0,
      unit: 'kg',
      description: '',
    },
  });
  
  // Check authentication and fetch QR code history on mount
  useEffect(() => {
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      router.push('/login');
      return;
    }
    
    // Check if user is a consumer
    const userType = authService.getUserType();
    if (userType !== 'user') {
      // If business user, redirect to dashboard
      router.push('/dashboard');
      return;
    }
    
    // Fetch QR code history
    fetchQRCodeHistory();
  }, [router]);
  
  // Fetch QR code history
  const fetchQRCodeHistory = async () => {
    try {
      setIsFetchingHistory(true);
      const response = await qrCodeService.getQRCodes();
      setQrCodeHistory(response.qrCodes);
    } catch (error: any) {
      console.error('Error fetching QR codes:', error);
      setError(error.message || 'Failed to fetch QR codes');
    } finally {
      setIsFetchingHistory(false);
    }
  };
  
  // Handle form submission to generate QR code
  const onSubmit = async (data: FormValues) => {
    try {
      setIsGenerating(true);
      
      // Prepare payload including photos
      const payload = {
        wasteType: data.wasteType,
        quantity: data.quantity,
        unit: data.unit,
        description: data.description || '',
        photos: photos
      };
      
      // Generate QR code
      const response = await qrCodeService.generateQRCode(payload) as QRCodeResponse;
      
      // Create QR code data object that will be encoded in the QR
      const qrCodeData = {
        id: response.qrCode.id,
        consumerId: response.qrCode.consumerId,
        wasteType: response.qrCode.wasteType,
        quantity: response.qrCode.quantity,
        unit: response.qrCode.unit,
        description: response.qrCode.description,
        photos: response.qrCode.photos,
        timestamp: new Date().toISOString()
      };
      
      // Set the generated QR code data
      setGeneratedQRCode({
        id: response.qrCode.id,
        wasteType: response.qrCode.wasteType,
        quantity: response.qrCode.quantity,
        unit: response.qrCode.unit,
        qrCodeUrl: response.qrCode.qrCodeUrl,
        createdAt: response.qrCode.createdAt,
        description: response.qrCode.description,
        isVerified: response.qrCode.isVerified,
        consumerId: response.qrCode.consumerId,
        photos: response.qrCode.photos,
        qrCodeData: JSON.stringify(qrCodeData)
      });
      
      // Refresh the QR code history
      fetchQRCodeHistory();
      
      // Show success message
      toast.success('QR code generated successfully!');
      
      // Reset form with default values to maintain controlled inputs
      form.reset({
        wasteType: 'PAPER',
        quantity: 0,
        unit: 'kg',
        description: '',
      });
      setPhotos([]);
      
      // Switch to the QR Code tab
      setActiveTab('qrcode');
      
    } catch (error: any) {
      console.error('Error generating QR code:', error);
      toast.error(error.message || 'Failed to generate QR code');
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Handle photo upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setLoading(true);
    
    const files = Array.from(e.target.files);
    const promises = files.map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target && typeof e.target.result === 'string') {
            resolve(e.target.result);
          }
        };
        reader.readAsDataURL(file);
      });
    });
    
    Promise.all(promises)
      .then(newPhotos => {
        setPhotos(prev => [...prev, ...newPhotos]);
        toast.success(`${files.length} photo${files.length > 1 ? 's' : ''} uploaded`);
      })
      .catch(err => {
        console.error('Error uploading photos:', err);
        toast.error('Failed to upload photos');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  // Remove a photo
  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };
  
  // Utility functions
  const getWasteTypeLabel = (wasteType: string): string => {
    return wasteType.charAt(0).toUpperCase() + wasteType.slice(1).toLowerCase();
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };
  
  // Handle QR code actions
  const handlePrint = (qrCode: QRCodeData) => {
    // Open a new window with just the QR code
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Popup blocked. Please allow popups to print.');
      return;
    }
    
    // Write HTML content to the new window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print QR Code - Green Trace QR</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 20px;
            }
            .qr-container {
              margin: 30px auto;
              max-width: 400px;
            }
            .qr-image {
              width: 100%;
              max-width: 300px;
              height: auto;
            }
            .waste-details {
              margin-top: 20px;
              font-size: 14px;
              color: #666;
            }
            .waste-type {
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 5px;
            }
            .app-name {
              margin-top: 30px;
              color: #4ade80;
              font-weight: bold;
            }
            @media print {
              .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="qr-container">
            <img src="${qrCode.qrCodeUrl}" alt="QR Code" class="qr-image" />
            <div class="waste-details">
              <div class="waste-type">${getWasteTypeLabel(qrCode.wasteType)}</div>
              <div>${qrCode.quantity} ${qrCode.unit}</div>
              <div>ID: ${qrCode.id}</div>
            </div>
            <div class="app-name">Green Trace QR</div>
          </div>
          <div class="no-print">
            <button onclick="window.print();window.close();" style="padding: 10px 20px; background: #4ade80; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;">
              Print QR Code
            </button>
          </div>
        </body>
      </html>
    `);
    
    // Focus the new window
    printWindow.document.close();
    printWindow.focus();
  };
  
  const handleDownload = (qrCode: QRCodeData) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = qrCode.qrCodeUrl;
    link.download = `qrcode-${qrCode.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('QR code downloaded successfully');
  };
  
  const handleShare = async (qrCode: QRCodeData) => {
    if (navigator.share) {
      try {
        // Get the QR code as a blob
        const response = await fetch(qrCode.qrCodeUrl);
        const blob = await response.blob();
        const file = new File([blob], `qrcode-${qrCode.id}.png`, { type: 'image/png' });
        
        await navigator.share({
          title: 'Green Trace QR Code',
          text: `Recycling QR code for ${getWasteTypeLabel(qrCode.wasteType)}`,
          files: [file]
        });
        
        toast.success('QR code shared successfully');
      } catch (error) {
        console.error('Error sharing QR code:', error);
        toast.error('Failed to share QR code');
      }
    } else {
      toast.error('Web Share API not supported by your browser');
    }
  };
  
  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success('QR code ID copied to clipboard');
  };

  // Filter QR codes based on search term and status
  const filteredQRCodes = qrCodeHistory.filter(qrCode => {
    const matchesSearch = 
      qrCode.wasteType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      qrCode.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (qrCode.description?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterStatus === 'all') {
      return matchesSearch;
    } else if (filterStatus === 'verified') {
      return matchesSearch && qrCode.isVerified;
    } else {
      return matchesSearch && !qrCode.isVerified;
    }
  });
  
  // Check if the history tab should show mock data
  const showMockHistory = qrCodeHistory.length === 0 && !isFetchingHistory;
  
  // Mock data for demonstration
  const mockQRCodes: QRCodeData[] = [
    {
      id: 'qr-1234567890',
      wasteType: 'PAPER',
      quantity: 2.5,
      unit: 'kg',
      qrCodeUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      description: 'Newspaper and magazines',
      isVerified: true,
      verifiedAt: new Date(Date.now() - 1800000).toISOString() // 30 minutes ago
    },
    {
      id: 'qr-0987654321',
      wasteType: 'PLASTIC',
      quantity: 1.2,
      unit: 'kg',
      qrCodeUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      description: 'Bottles and containers',
      isVerified: false,
      verifiedAt: undefined
    }
  ];
  
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Generate QR Code</h1>
        <p className="text-gray-500">
          Create QR codes for your recyclable waste to track your environmental impact
        </p>
      </div>
      
      {showGuide && (
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">How it works</AlertTitle>
          <AlertDescription className="text-blue-700">
            <ol className="list-decimal ml-5 mt-2 space-y-1">
              <li>Fill in the details about your recyclable waste</li>
              <li>Generate a unique QR code</li>
              <li>Attach the QR code to your waste or show it at a recycling center</li>
              <li>Earn points when a recycling center verifies your waste</li>
            </ol>
            <Button 
              variant="link" 
              className="text-blue-700 p-0 h-auto text-sm mt-2"
              onClick={() => setShowGuide(false)}
            >
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create" className="flex items-center gap-2">
            <QrCode className="h-4 w-4" />
            Create QR Code
          </TabsTrigger>
          <TabsTrigger value="qrcode" className="flex items-center gap-2" disabled={!generatedQRCode}>
            <CheckCircle2 className="h-4 w-4" />
            Your QR Code
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            QR Code History
          </TabsTrigger>
        </TabsList>
        
        {/* Create QR Code Tab */}
        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Waste Details</CardTitle>
              <CardDescription>
                Enter information about the waste you want to recycle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="wasteType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Waste Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select waste type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="PAPER">Paper</SelectItem>
                              <SelectItem value="PLASTIC">Plastic</SelectItem>
                              <SelectItem value="GLASS">Glass</SelectItem>
                              <SelectItem value="METAL">Metal</SelectItem>
                              <SelectItem value="ELECTRONICS">Electronics</SelectItem>
                              <SelectItem value="ORGANIC">Organic</SelectItem>
                              <SelectItem value="TEXTILE">Textile</SelectItem>
                              <SelectItem value="HAZARDOUS">Hazardous</SelectItem>
                              <SelectItem value="OTHER">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select the primary material of your waste
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                step="0.01" 
                                min="0.01" 
                                placeholder="e.g., 1.5" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="unit"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Unit</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select unit" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {unitOptions.map(option => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Add additional details about your waste..." 
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Provide any additional information that might be helpful
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <FormLabel>Photos (Optional)</FormLabel>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        {photos.map((photo, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={photo} 
                              alt={`Waste photo ${index + 1}`} 
                              className="w-24 h-24 object-cover rounded-md border"
                            />
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        
                        {photos.length < 5 && (
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              className="w-24 h-24 flex flex-col items-center justify-center border-dashed"
                              onClick={() => document.getElementById('photo-upload')?.click()}
                              disabled={loading}
                            >
                              {loading ? (
                                <Loader2 className="h-6 w-6 animate-spin" />
                              ) : (
                                <>
                                  <Image className="h-6 w-6 mb-1" />
                                  <span className="text-xs">Upload</span>
                                </>
                              )}
                            </Button>
                            
                            <Button
                              type="button"
                              variant="outline"
                              className="w-24 h-24 flex flex-col items-center justify-center border-dashed"
                              onClick={() => toast.info('Camera functionality would be implemented in a complete app')}
                              disabled={loading}
                            >
                              <Camera className="h-6 w-6 mb-1" />
                              <span className="text-xs">Camera</span>
                            </Button>
                            
                            <input
                              id="photo-upload"
                              type="file"
                              multiple
                              accept="image/*"
                              className="hidden"
                              onChange={handleFileChange}
                              disabled={loading}
                            />
                          </div>
                        )}
                      </div>
                      
                      <FormDescription>
                        Upload up to 5 photos of your waste item to help recycling centers identify it.
                      </FormDescription>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <QrCode className="mr-2 h-4 w-4" />
                        Generate QR Code
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* QR Code Display Tab */}
        <TabsContent value="qrcode">
          {generatedQRCode ? (
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <CardTitle className="flex items-center">
                  <QrCode className="h-5 w-5 mr-2 text-green-600" />
                  Your Generated QR Code
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-white p-4 rounded-lg border flex flex-col items-center w-full md:w-auto">
                    <img 
                      src={generatedQRCode.qrCodeUrl} 
                      alt="QR Code" 
                      className="w-full max-w-[250px] h-auto"
                    />
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500">QR Code ID: {generatedQRCode.id}</p>
                      <p className="text-xs text-gray-400">
                        {generatedQRCode.createdAt 
                          ? `Created ${formatDate(generatedQRCode.createdAt)}` 
                          : 'Just created'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Waste Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-gray-500">Type</p>
                            <p className="text-lg font-semibold">{getWasteTypeLabel(generatedQRCode.wasteType)}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm font-medium text-gray-500">Quantity</p>
                            <p className="text-lg font-semibold">{generatedQRCode.quantity} {generatedQRCode.unit}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">QR Code Status</h3>
                        <div className="flex items-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                          <div>
                            <p className="font-medium text-amber-700">Pending Verification</p>
                            <p className="text-sm text-amber-600">
                              Take this QR code to a recycling center to earn points
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-wrap gap-3 bg-gray-50 border-t p-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handlePrint(generatedQRCode)}
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleDownload(generatedQRCode)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleShare(generatedQRCode)}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => handleCopyId(generatedQRCode.id)}
                >
                  <ClipboardCopy className="h-4 w-4 mr-2" />
                  Copy ID
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No QR Code Generated</h3>
                <p className="text-gray-500 mb-4">
                  You haven't generated a QR code yet. Fill out the form to create one.
                </p>
                <Button onClick={() => setActiveTab('create')}>
                  Create a QR Code
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        {/* QR Code History Tab */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Your QR Code History</CardTitle>
              <CardDescription>
                View and manage your previously generated QR codes
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isFetchingHistory ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-green-600" />
                </div>
              ) : showMockHistory ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="relative w-full max-w-sm">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="text"
                        placeholder="Search QR codes..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="ml-4">
                      <Select
                        value={filterStatus}
                        onValueChange={(value: any) => setFilterStatus(value)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All QR Codes</SelectItem>
                          <SelectItem value="verified">Verified Only</SelectItem>
                          <SelectItem value="pending">Pending Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="divide-y">
                    {mockQRCodes.map((qrCode) => (
                      <div key={qrCode.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                          <div className="flex-shrink-0">
                            <img 
                              src={qrCode.qrCodeUrl} 
                              alt="QR Code" 
                              className="w-20 h-20 border rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-medium">
                                {getWasteTypeLabel(qrCode.wasteType)}
                              </h3>
                              <Badge className={qrCode.isVerified 
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800" 
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100 hover:text-amber-800"
                              }>
                                {qrCode.isVerified ? 'Verified' : 'Pending'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {qrCode.quantity} {qrCode.unit} • {formatDate(qrCode.createdAt)}
                            </p>
                            {qrCode.description && (
                              <p className="text-sm mt-1">{qrCode.description}</p>
                            )}
                          </div>
                          <div className="flex gap-2 ml-auto">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => toast.info("This would show QR code details in a real app")}
                            >
                              View
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handlePrint(qrCode)}
                            >
                              <Printer className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center py-4">
                    <p className="text-sm text-gray-500 mb-1">
                      This is sample data for demonstration. Generate QR codes to see your actual history.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-2"
                      onClick={() => setActiveTab('create')}
                    >
                      Create New QR Code
                    </Button>
                  </div>
                </div>
              ) : filteredQRCodes.length > 0 ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="relative w-full max-w-sm">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="text"
                        placeholder="Search QR codes..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="ml-4">
                      <Select
                        value={filterStatus}
                        onValueChange={(value: any) => setFilterStatus(value)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All QR Codes</SelectItem>
                          <SelectItem value="verified">Verified Only</SelectItem>
                          <SelectItem value="pending">Pending Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="divide-y">
                    {filteredQRCodes.map((qrCode) => (
                      <div key={qrCode.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                          <div className="flex-shrink-0">
                            <img 
                              src={qrCode.qrCodeUrl} 
                              alt="QR Code" 
                              className="w-20 h-20 border rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-medium">
                                {getWasteTypeLabel(qrCode.wasteType)}
                              </h3>
                              <Badge className={qrCode.isVerified 
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800" 
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100 hover:text-amber-800"
                              }>
                                {qrCode.isVerified ? 'Verified' : 'Pending'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {qrCode.quantity} {qrCode.unit} • {formatDate(qrCode.createdAt)}
                            </p>
                            {qrCode.description && (
                              <p className="text-sm mt-1">{qrCode.description}</p>
                            )}
                          </div>
                          <div className="flex gap-2 ml-auto">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setGeneratedQRCode(qrCode);
                                setActiveTab('qrcode');
                              }}
                            >
                              View
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handlePrint(qrCode)}
                            >
                              <Printer className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <QrCode className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No QR Codes Found</h3>
                  <p className="text-gray-500 mb-4">
                    You haven't created any QR codes yet, or none match your search criteria.
                  </p>
                  <Button onClick={() => setActiveTab('create')}>
                    Create Your First QR Code
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GenerateQRPage;
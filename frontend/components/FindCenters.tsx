'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Card, 
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  MapPin,
  Search,
  Navigation,
  Clock,
  Loader2,
  Phone,
  ChevronRight,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';

// Types
interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  operatingHours?: {
    [day: string]: {
      open: string;
      close: string;
    }
  } | null;
  phone?: string;
  email?: string;
  website?: string;
  image?: string;
  description?: string;
  acceptedWasteTypes: string[];
  pointsPerWasteType?: {
    [wasteType: string]: number;
  };
  isActive: boolean;
  business: {
    businessName: string;
    businessAddress: string;
    logo?: string;
  };
  distance?: number;
}

// Distance function using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Day of week helper
function getDayOfWeek(date: Date = new Date()): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

// Check if currently open
function isCurrentlyOpen(hours: {[day: string]: {open: string, close: string}} | null | undefined): boolean {
  if (!hours) return false;
  
  const now = new Date();
  const currentDay = getDayOfWeek(now);
  
  if (!hours[currentDay]) return false;
  
  const { open, close } = hours[currentDay];
  
  // Convert time strings to minutes since midnight
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const [openHour, openMinute] = open.split(':').map(Number);
  const openMinutes = openHour * 60 + openMinute;
  
  const [closeHour, closeMinute] = close.split(':').map(Number);
  const closeMinutes = closeHour * 60 + closeMinute;
  
  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

const FindCentersPage = () => {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [centers, setCenters] = useState<RecyclingCenter[]>([]);
  const [filteredCenters, setFilteredCenters] = useState<RecyclingCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWasteType, setSelectedWasteType] = useState<string>('ALL');

  // Get user location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (err) => {
          console.error('Error getting location:', err);
          toast.error('Unable to get your location. Distances will not be shown.');
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser');
    }
  }, []);

  // Fetch recycling centers
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        setLoading(true);
        
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Not authenticated');
          setLoading(false);
          return;
        }
        
        const response = await fetch('/api/centers', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch recycling centers');
        }
        
        const data = await response.json();
        
        // Calculate distance from user for each center if location is available
        let centersWithDistance = data.centers;
        if (userLocation) {
          centersWithDistance = data.centers.map((center: RecyclingCenter) => ({
            ...center,
            distance: calculateDistance(
              userLocation[0], 
              userLocation[1], 
              center.latitude, 
              center.longitude
            )
          }));
          
          // Sort by distance
          centersWithDistance.sort((a: RecyclingCenter, b: RecyclingCenter) => 
            (a.distance || Infinity) - (b.distance || Infinity)
          );
        }
        
        setCenters(centersWithDistance);
        setFilteredCenters(centersWithDistance);
      } catch (error: any) {
        console.error('Error fetching centers:', error);
        setError(error.message);
        toast.error('Failed to load recycling centers');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCenters();
  }, [userLocation]);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    if (centers.length === 0) return;
    
    let filtered = [...centers];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(center => 
        center.name.toLowerCase().includes(query) || 
        center.address.toLowerCase().includes(query)
      );
    }
    
    // Filter by waste type
    if (selectedWasteType && selectedWasteType !== 'ALL') {
      filtered = filtered.filter(center => 
        center.acceptedWasteTypes.includes(selectedWasteType)
      );
    }
    
    setFilteredCenters(filtered);
  }, [centers, searchQuery, selectedWasteType]);

  // Get directions to a center
  const getDirections = (center: RecyclingCenter) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.latitude},${center.longitude}`;
    window.open(url, '_blank');
  };

  // Format distance
  const formatDistance = (distance?: number): string => {
    if (distance === undefined) return 'Unknown';
    if (distance < 1) return `${Math.round(distance * 1000)} m`;
    return `${distance.toFixed(1)} km`;
  };

  // Waste type options
  const wasteTypeOptions = [
    { value: 'ALL', label: 'All Materials' },
    { value: 'PAPER', label: 'Paper' },
    { value: 'PLASTIC', label: 'Plastic' },
    { value: 'GLASS', label: 'Glass' },
    { value: 'METAL', label: 'Metal' },
    { value: 'ELECTRONICS', label: 'Electronics' },
    { value: 'ORGANIC', label: 'Organic' },
    { value: 'TEXTILE', label: 'Textile' },
    { value: 'HAZARDOUS', label: 'Hazardous' },
    { value: 'OTHER', label: 'Other' }
  ];

  // Get waste type label
  const getWasteTypeLabel = (type: string): string => {
    const option = wasteTypeOptions.find(opt => opt.value === type);
    return option ? option.label : type;
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600">Finding recycling centers near you...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}. Please try refreshing the page.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Find Recycling Centers
        </h1>
        <p className="text-sm text-gray-500">
          {userLocation ? 'Showing centers nearest to your location' : 'Find centers to drop off your recyclables'}
        </p>
      </div>

      {/* Minimal search and filter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <div className="md:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search by name or location..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <Select
            value={selectedWasteType}
            onValueChange={setSelectedWasteType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              {wasteTypeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Centers list */}
      <div className="space-y-3">
        {filteredCenters.length > 0 ? (
          filteredCenters.map(center => (
            <Card key={center.id} className="overflow-hidden hover:shadow-md transition-shadow ">
              <CardContent className="p-0">
                <div className="flex items-center border-l-4 border-green-500 h-full ">
                  <div className="flex-grow p-4 max-w-md">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-base font-medium">{center.name}</h3>
                        <p className="text-xs text-gray-500">{center.business.businessName}</p>
                      </div>
                      {center.distance !== undefined && (
                        <Badge variant="secondary" className="ml-2">
                          {formatDistance(center.distance)}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{center.address}</span>
                    </div>
                    
                    {center.description && (
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{center.description}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      <Badge variant="outline" className={isCurrentlyOpen(center.operatingHours) ? 
                        "bg-green-50 text-green-700 border-green-200" : 
                        "bg-gray-50 text-gray-700 border-gray-200"
                      }>
                        <Clock className="h-3 w-3 mr-1" />
                        {isCurrentlyOpen(center.operatingHours) ? 'Open Now' : 'Closed'}
                      </Badge>
                      
                      {/* Show only first 2 waste types + counter for others */}
                      {center.acceptedWasteTypes.slice(0, 2).map(type => (
                        <Badge key={type} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {getWasteTypeLabel(type)}
                        </Badge>
                      ))}
                      
                      {center.acceptedWasteTypes.length > 2 && (
                        <Badge variant="outline" className="bg-gray-50 text-gray-700">
                          +{center.acceptedWasteTypes.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                      {center.phone && (
                        <div className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          <a href={`tel:${center.phone}`} className="hover:text-gray-800">{center.phone}</a>
                        </div>
                      )}
                      {center.website && (
                        <div className="flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          <a href={center.website} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-full rounded-none border-l mr-0 text-green-600 hover:text-green-800 hover:bg-green-50 px-4"
                    onClick={() => getDirections(center)}
                  >
                    <Navigation className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <Search className="h-10 w-10 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-medium text-gray-900 mb-1">No Centers Found</h3>
            <p className="text-sm text-gray-500 mb-4">
              Try adjusting your search filters
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedWasteType('ALL');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      
      {filteredCenters.length > 0 && (
        <div className="mt-4 text-center text-xs text-gray-500">
          {filteredCenters.length} {filteredCenters.length === 1 ? 'center' : 'centers'} found • Tap the navigation icon to get directions
        </div>
      )}
    </div>
  );
};

export default FindCentersPage;
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const wasteTypes = [
  { value: "PAPER", label: "Paper" },
  { value: "PLASTIC", label: "Plastic" },
  { value: "GLASS", label: "Glass" },
  { value: "METAL", label: "Metal" },
  { value: "ELECTRONICS", label: "Electronics" },
  { value: "ORGANIC", label: "Organic" },
  { value: "TEXTILE", label: "Textile" },
  { value: "HAZARDOUS", label: "Hazardous" },
  { value: "OTHER", label: "Other" },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Center name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  operatingHours: z.record(z.string()).optional(),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),
  image: z.string().optional(),
  description: z.string().optional(),
  acceptedWasteTypes: z.array(z.string()).min(1, { message: "At least one waste type is required" }),
  pointsPerWasteType: z.record(z.number()).optional(),
});

export function AddRecyclingCenterDialog({ onSuccess }: { onSuccess: () => void }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [geocodingLoading, setGeocodingLoading] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<Array<{ display_name: string; lat: string; lon: string }>>([]);
  const [addressSearchOpen, setAddressSearchOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      description: "",
      acceptedWasteTypes: [],
      latitude: undefined,
      longitude: undefined,
    },
  });

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        form.setValue("latitude", position.coords.latitude);
        form.setValue("longitude", position.coords.longitude);
        setLocationError(null);
      },
      (error) => {
        setLocationError("Unable to retrieve your location");
        console.error("Error getting location:", error);
      }
    );
  };

  const geocodeAddress = async () => {
    const address = form.getValues("address");
    if (!address) {
      setLocationError("Please enter an address first");
      return;
    }

    try {
      setGeocodingLoading(true);
      setLocationError(null);
      
      // Using OpenStreetMap's Nominatim API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
        {
          headers: {
            'User-Agent': 'GreenTraceQR/1.0' // Required by Nominatim's usage policy
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to geocode address');
      }

      const data = await response.json();
      
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        form.setValue("latitude", parseFloat(lat));
        form.setValue("longitude", parseFloat(lon));
      } else {
        setLocationError("No coordinates found for this address");
      }
    } catch (error) {
      console.error("Error geocoding address:", error);
      setLocationError("Failed to get coordinates for this address");
    } finally {
      setGeocodingLoading(false);
    }
  };

  const searchAddress = async (query: string) => {
    if (!query || query.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    try {
      setGeocodingLoading(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`,
        {
          headers: {
            'User-Agent': 'GreenTraceQR/1.0'
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to search addresses');
      }

      const data = await response.json();
      setAddressSuggestions(data);
    } catch (error) {
      console.error("Error searching addresses:", error);
      setLocationError("Failed to search addresses");
    } finally {
      setGeocodingLoading(false);
    }
  };

  const handleAddressSelect = (suggestion: { display_name: string; lat: string; lon: string }) => {
    form.setValue("address", suggestion.display_name);
    form.setValue("latitude", parseFloat(suggestion.lat));
    form.setValue("longitude", parseFloat(suggestion.lon));
    setAddressSearchOpen(false);
  };

  useEffect(() => {
    if (open) {
      getCurrentLocation();
    }
  }, [open]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Not authenticated");
        return;
      }

      const response = await fetch("/api/business/recycling-centers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to create recycling center");
      }

      toast.success("Recycling center created successfully");
      setOpen(false);
      onSuccess();
    } catch (error) {
      console.error("Error creating recycling center:", error);
      toast.error("Failed to create recycling center");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Center</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Recycling Center</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Center Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter center name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Search address..."
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            searchAddress(e.target.value);
                          }}
                          onFocus={() => setAddressSearchOpen(true)}
                        />
                        {addressSearchOpen && (
                          <div 
                            className="absolute z-[9999] min-w-sm w-full mt-1 bg-popover text-popover-foreground rounded-md border shadow-md"
                            style={{ maxHeight: "200px", overflowY: "auto" }}
                          >
                            {addressSuggestions.length === 0 ? (
                              <div className="p-2 text-sm text-muted-foreground">No address found.</div>
                            ) : (
                              <div className="py-1">
                                {addressSuggestions.map((suggestion) => (
                                  <div
                                    key={suggestion.display_name}
                                    className={cn(
                                      "flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground",
                                      field.value === suggestion.display_name && "bg-accent text-accent-foreground"
                                    )}
                                    onClick={() => {
                                      handleAddressSelect(suggestion);
                                      setAddressSearchOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4 flex-shrink-0",
                                        field.value === suggestion.display_name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    <span className="truncate flex-1">{suggestion.display_name}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter website URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptedWasteTypes"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Accepted Waste Types</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                      {wasteTypes.map((wasteType) => (
                        <FormItem
                          key={wasteType.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(wasteType.value)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, wasteType.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== wasteType.value
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {wasteType.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description"
                        className="h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={getCurrentLocation}
                    disabled={loading || geocodingLoading}
                  >
                    Get Current Location
                  </Button>
                  {(loading || geocodingLoading) && (
                    <span className="text-sm text-gray-500">Loading...</span>
                  )}
                  {locationError && (
                    <p className="text-sm text-red-500">{locationError}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="latitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Latitude</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="Latitude"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="longitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Longitude</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="any"
                            placeholder="Longitude"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <Button type="submit" disabled={loading || geocodingLoading}>
              {loading ? "Creating..." : "Create Center"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 
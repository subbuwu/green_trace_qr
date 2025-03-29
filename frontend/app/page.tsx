"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Leaf, 
  Recycle, 
  Globe, 
  ArrowRight, 
  ChevronDown,
  Users,
  BarChart,
  Award
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLogin() {
    router.push("/login");
  }

  function handleLearnMore() {
    router.push("/learnmore");
  }

  return (
    <div className="relative w-full bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className={`h-8 w-8 ${scrolled ? "text-green-600" : "text-green-400"}`} />
            <span className={`text-2xl font-bold ${scrolled ? "text-gray-800" : "text-white"}`}>
              Green<span className="text-green-500">Trace</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Button onClick={handleLogin} size="lg" variant="outline" className="text-lg p-6 rounded-full border-green-900 text-green-500 hover:bg-green-500 hover:text-white">
              Get Started
            </Button>
          </div>
          
          <Button variant="ghost" className="md:hidden" aria-label="Menu">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-700 z-0" />
        
        {/* Abstract shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-300 filter blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-teal-200 filter blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-emerald-400 filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 z-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white space-y-8 py-20 lg:py-0">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Sustainable Future <span className="text-green-300">Starts With You</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-green-50 max-w-xl">
              Track your recycling habits, reduce waste, and earn rewards while making a positive impact on our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleLogin}
                size="lg"
                className="text-lg bg-green-500 hover:bg-green-400 text-white px-8 py-6 rounded-full shadow-lg transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                onClick={handleLearnMore}
                variant="outline" 
                size="lg"
                className="text-lg border-green-300 bg-green-400 text-white hover:bg-white/10 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">JD</div>
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm font-bold">SA</div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">MK</div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">+</div>
              </div>
              <p className="text-sm text-green-200">Join 10,000+ eco-conscious individuals</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
              <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg max-w-md mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-green-400" />
                      <span className="text-xl font-bold text-white">GreenTrace</span>
                    </div>
                    <div className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">Your Impact</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="text-green-200 text-sm mb-1">Recycled Materials</div>
                      <div className="text-white font-bold text-2xl">128.5 kg</div>
                      <div className="w-full h-2 bg-white/20 rounded-full mt-2">
                        <div className="w-3/4 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="text-green-200 text-sm mb-1">CO₂ Reduced</div>
                      <div className="text-white font-bold text-2xl">32.1 kg</div>
                      <div className="w-full h-2 bg-white/20 rounded-full mt-2">
                        <div className="w-1/2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-xl">
                      <div className="text-green-200 text-sm mb-1">Green Points</div>
                      <div className="text-white font-bold text-2xl">750</div>
                      <div className="w-full h-2 bg-white/20 rounded-full mt-2">
                        <div className="w-4/5 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-green-500 hover:bg-green-400 text-white">
                    View Your Impact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>
 
    </div>
  );
}
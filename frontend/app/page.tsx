"use client"

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Globe } from "lucide-react";

export default function Home() {
  const router = useRouter();
  
  function handleLogin() {
    router.push("/login");
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with overlay gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg1_image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-green-950/80" />
      </div>
      

      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-6"
        >
          <Leaf className="h-12 w-12 text-green-400" />
          <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            Green<span className="text-green-400">Trace</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light text-green-50 max-w-2xl mb-12"
        >
          Let's recycle for a better, sustainable future
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            onClick={handleLogin}
            size="lg"
            className="text-lg bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full shadow-lg shadow-green-700/30 transition-all duration-300"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg border-green-400 text-black hover:text-white hover:bg-green-800/40 px-8 py-6 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>
        
        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
          {[
            {
              icon: <Recycle className="h-8 w-8 text-green-400" />,
              title: "Track Recycling",
              description: "Monitor your recycling habits and see your environmental impact grow. Track your recycling efforts and see your progress."
            },
            {
              icon: <Globe className="h-8 w-8 text-green-400" />,
              title: "Benefits for both business and customers",
              description: "Green Trace offers a seamless experience for both businesses and customers, making it easy to track and manage your recycling efforts."
            },
            {
              icon: <Leaf className="h-8 w-8 text-green-400" />,
              title: "Earn Green Rewards",
              description: "Get gamified rewards for your eco-friendly actions and choices. Join the Green Trace community and earn rewards for your contributions."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card className="bg-green-900/30 border-green-700/50 backdrop-blur-md p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-green-800/50 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-green-100 mb-2">{feature.title}</h3>
                  <p className="text-green-200/80">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
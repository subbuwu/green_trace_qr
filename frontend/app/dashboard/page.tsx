"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardHomePage = () => {
  const [greeting, setGreeting] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  
  useEffect(() => {
    // Set user name (in real app, fetch from authentication state or API)
    setUserName('Eco Warrior'); // Replace with actual username logic
    
    // Set greeting based on time of day
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting = '';
      
      if (hour >= 5 && hour < 12) {
        newGreeting = 'Good Morning';
      } else if (hour >= 12 && hour < 17) {
        newGreeting = 'Good Afternoon';
      } else if (hour >= 17 && hour < 22) {
        newGreeting = 'Good Evening';
      } else {
        newGreeting = 'Hello';
      }
      
      setGreeting(newGreeting);
    };
    
    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    // Initial calls
    updateGreeting();
    updateTime();
    
    // Set interval to update time every minute
    const timeInterval = setInterval(updateTime, 60000);
    
    return () => clearInterval(timeInterval);
  }, []);
  
  // Mock data for dashboard - replace with actual data from your API
  const stats = [
    { title: 'Total Recycled Items', value: '247', change: '+12% from last month' },
    { title: 'Reward Points', value: '3,540', change: '+215 this week' },
    { title: 'CO₂ Saved', value: '128 kg', change: 'Environmental impact' },
    { title: 'Recycling Streak', value: '14 days', change: 'Keep it up!' },
  ];
  
  const nextReward = { 
    current: 3540, 
    target: 5000, 
    name: 'Free Reusable Cup' 
  };
  
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with greeting */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {greeting}, {userName}!
          </h1>
          <div className="text-lg text-gray-500">{currentTime}</div>
        </div>
        <p className="text-gray-500 mt-1">Welcome to your recycling rewards dashboard</p>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Next reward progress */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progress to Next Reward</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{nextReward.name}</span>
              <span className="text-sm font-medium">{nextReward.current} / {nextReward.target} points</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent activity and upcoming events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Plastic bottle recycled (+10 pts)', 'Paper recycled (+15 pts)', 'Glass container recycled (+20 pts)'].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <span>{item}</span>
                  <span className="text-xs text-gray-500">{i === 0 ? 'Today' : i === 1 ? 'Yesterday' : '3 days ago'}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recycling Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">Rinse plastic containers before recycling to prevent contamination</p>
              <p className="text-sm">Remove caps from bottles unless instructed otherwise</p>
              <p className="text-sm">Flatten cardboard boxes to save space in recycling bins</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHomePage;
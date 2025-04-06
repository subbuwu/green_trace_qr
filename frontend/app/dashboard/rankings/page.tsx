"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronUp, Award, User, BarChart3, Trophy } from "lucide-react"

const ProfileAndRankingsPage = () => {
  const [userData] = useState({
    username: "EcoWarrior42", totalPoints: 1250, rank: 7, joinDate: "Jan 15, 2024",
    recycledWaste: {
      plastic: { kg: 27.5, items: 351, points: 412 },
      paper: { kg: 12.2, items: 203, points: 185 },
      metal: { kg: 8.7, items: 45, points: 372 },
      glass: { kg: 15.3, items: 66, points: 198 },
      organic: { kg: 18.1, items: 42, points: 83 },
      electronics: { kg: 0.5, items: 2, points: 0 }
    }
  });

  // Leaderboard data
  const [leaderboardData] = useState([
    { username: "RecycleKing", totalWaste: 95.3, plastic: 42.1, paper: 15.8, metal: 18.4, glass: 7.3, organic: 11.2, electronics: 0.5, rank: 1 },
    { username: "EcoChampion", totalWaste: 87.6, plastic: 38.5, paper: 12.5, metal: 21.4, glass: 5.2, organic: 9.1, electronics: 0.9, rank: 2 },
    { username: "GreenHero", totalWaste: 73.2, plastic: 29.7, paper: 20.3, metal: 7.4, glass: 9.8, organic: 5.3, electronics: 0.7, rank: 3 },
    { username: "PlanetSaver", totalWaste: 68.9, plastic: 31.3, paper: 18.1, metal: 3.2, glass: 12.1, organic: 3.9, electronics: 0.3, rank: 4 },
    { username: "EarthDefender", totalWaste: 62.4, plastic: 27.5, paper: 10.2, metal: 12.5, glass: 6.8, organic: 4.9, electronics: 0.5, rank: 5 },
    { username: "RecycleWarrior", totalWaste: 59.8, plastic: 24.6, paper: 9.7, metal: 8.9, glass: 10.2, organic: 6.1, electronics: 0.3, rank: 6 },
    { username: "EcoWarrior42", totalWaste: 82.3, plastic: 27.5, paper: 12.2, metal: 8.7, glass: 15.3, organic: 18.1, electronics: 0.5, rank: 7 },
    { username: "GreenProtector", totalWaste: 57.1, plastic: 21.3, paper: 15.2, metal: 9.4, glass: 5.6, organic: 5.1, electronics: 0.5, rank: 8 },
    { username: "EarthGuardian", totalWaste: 52.8, plastic: 19.8, paper: 16.3, metal: 7.2, glass: 4.5, organic: 4.8, electronics: 0.2, rank: 9 },
    { username: "RecyclePro", totalWaste: 48.5, plastic: 18.4, paper: 8.9, metal: 10.6, glass: 6.7, organic: 3.6, electronics: 0.3, rank: 10 }
  ]);

  const [leaderboardWasteType, setLeaderboardWasteType] = useState("totalWaste");
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b[leaderboardWasteType] - a[leaderboardWasteType]);
  const userRankInCurrentLeaderboard = sortedLeaderboard.findIndex(user => user.username === userData.username) + 1;
  const formatWasteType = (type) => type === "totalWaste" ? "Total Waste" : type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="container mx-auto px-4 text-white">      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - User Profile and Stats */}
        <div className="flex-1">
          <Card className="border-green-600/30 shadow-xl mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-green-400 flex items-center gap-2">
                <User className="h-6 w-6" />Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-bold">{userData.username}
                    <span className="text-green-400 px-18">Member since {userData.joinDate}</span>
                  </h2>
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                    <div>
                      <span className="text-2xl font-bold text-green-400">{userData.totalPoints}</span>
                      <p className="text-sm">Total Points</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-green-400">#{userData.rank}</span>
                      <p className="text-sm">Global Rank</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-600/30 shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-green-400 flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />Recycling Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="kg">
                <TabsList className="w-full text-green-400">
                  <TabsTrigger value="kg" className="flex-1 cursor-pointer">By Weight (kg)</TabsTrigger>
                  <TabsTrigger value="items" className="flex-1 cursor-pointer">By Items</TabsTrigger>
                  <TabsTrigger value="points" className="flex-1 cursor-pointer">By Points</TabsTrigger>
                </TabsList>
                
                {["kg", "items", "points"].map(tabValue => (
                  <TabsContent key={tabValue} value={tabValue} className="space-y-4 mt-4">
                    {Object.entries(userData.recycledWaste).map(([type, data]) => (
                      <div key={type} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="capitalize text-green-400">{type}</span>
                          <span className="font-semibold">
                            {tabValue === "kg" ? `${data.kg.toFixed(1)} kg` : 
                             tabValue === "items" ? `${data.items} items` : 
                             `${data.points} points`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        {/* Right side - Leaderboard */}
        <div className="flex-1">
          <Card className="border-green-600/30 shadow-xl">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-green-400 flex items-center gap-2">
                  <Trophy className="h-6 w-6" />Leaderboard
                </CardTitle>
                <Select value={leaderboardWasteType} onValueChange={setLeaderboardWasteType}>
                  <SelectTrigger className="w-36 border-green-600 cursor-pointer">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-green-600">
                    <SelectItem value="totalWaste">Total Waste</SelectItem>
                    <SelectItem value="plastic">Plastic</SelectItem>
                    <SelectItem value="paper">Paper</SelectItem>
                    <SelectItem value="metal">Metal</SelectItem>
                    <SelectItem value="glass">Glass</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-green-400 mt-2">
                Showing top recyclers for {formatWasteType(leaderboardWasteType)} (kg)
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {sortedLeaderboard.map((user, index) => {
                  const isCurrentUser = user.username === userData.username;
                  return (
                    <div key={user.username}
                      className={`flex items-center p-2 rounded-md ${isCurrentUser ? 'bg-green-700/60' : 'hover:bg-green-800/60'} transition-colors`}>
                      <div className="w-8 text-center">
                        {index < 3 ? 
                          <Award className={`h-5 w-5 mx-auto ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-300' : 'text-amber-700'}`} /> : 
                          <span className="text-sm">{index + 1}</span>}
                      </div>
                      <div className="flex-1 mx-2 truncate">
                        {user.username}
                        {isCurrentUser && <span className="ml-2 text-xs bg-green-600 px-2 py-1 rounded-full">You</span>}
                      </div>
                      <div className="text-right font-semibold">{user[leaderboardWasteType].toFixed(1)} kg</div>
                    </div>
                  );
                })}
              </div>
              
              {/* User's current rank in this category */}
              <div className="mt-6 p-3 bg-green-400 rounded-md">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-black">Your {formatWasteType(leaderboardWasteType)} rank</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">#{userRankInCurrentLeaderboard}</span>
                      <span>out of {leaderboardData.length}</span>
                    </div>
                  </div>
                  {userRankInCurrentLeaderboard > 1 && (
                    <div className="text-right">
                      <p className="text-xs text-black">
                        {(sortedLeaderboard[userRankInCurrentLeaderboard - 2][leaderboardWasteType] - 
                          sortedLeaderboard[userRankInCurrentLeaderboard - 1][leaderboardWasteType]).toFixed(1)} kg 
                        to rank #{userRankInCurrentLeaderboard - 1}
                      </p>
                      <div className="flex items-center gap-1 text-black text-sm">
                        <span>Keep recycling!</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProfileAndRankingsPage
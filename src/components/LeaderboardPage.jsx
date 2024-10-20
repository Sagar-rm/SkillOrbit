import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, Award } from 'lucide-react'

const leaderboardData = [
  { id: 1, name: "Alice", points: 1500, avatar: "https://i.pravatar.cc/150?img=1", trend: "up" },
  { id: 2, name: "Bob", points: 1350, avatar: "https://i.pravatar.cc/150?img=2", trend: "down" },
  { id: 3, name: "Charlie", points: 1200, avatar: "https://i.pravatar.cc/150?img=3", trend: "up" },
  { id: 4, name: "Diana", points: 1100, avatar: "https://i.pravatar.cc/150?img=4", trend: "same" },
  { id: 5, name: "Ethan", points: 950, avatar: "https://i.pravatar.cc/150?img=5", trend: "up" },
]

export default function LeaderboardPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Leaderboard</h2>
      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
        See how you stack up against other learners. Climb the ranks and showcase your skills!
      </p>
      <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-pink-400">Top Performers</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {leaderboardData.map((user, index) => (
            <div key={user.id} className={`flex items-center justify-between p-4 ${index !== leaderboardData.length - 1 ? 'border-b border-gray-700' : ''} transition-colors hover:bg-blue-900/50`}>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold">
                  {index + 1}
                </div>
                <Avatar className="h-12 w-12 border-2 border-pink-500">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-200">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.points} points</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {index === 0 && <Trophy className="text-yellow-400 h-6 w-6" />}
                {index === 1 && <Trophy className="text-gray-400 h-5 w-5" />}
                {index === 2 && <Trophy className="text-yellow-600 h-4 w-4" />}
                <Badge 
                  variant={user.trend === 'up' ? 'default' : user.trend === 'down' ? 'destructive' : 'secondary'}
                  className="flex items-center space-x-1"
                >
                  {user.trend === 'up' && <TrendingUp className="h-3 w-3" />}
                  {user.trend === 'down' && <TrendingUp className="h-3 w-3 transform rotate-180" />}
                  {user.trend === 'same' && <span>-</span>}
                  <span>{user.trend === 'up' ? 'Rising' : user.trend === 'down' ? 'Falling' : 'Stable'}</span>
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-xl text-pink-400">Your Rank</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <span className="text-4xl font-bold text-yellow-400">#42</span>
            <p className="text-gray-300 mt-2">Keep pushing to reach the top!</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-xl text-pink-400">Points to Next Rank</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <span className="text-4xl font-bold text-yellow-400">150</span>
            <p className="text-gray-300 mt-2">You're so close!</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-xl text-pink-400">Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <span className="text-4xl font-bold text-green-400">+5</span>
            <p className="text-gray-300 mt-2">Ranks climbed this week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
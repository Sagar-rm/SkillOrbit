import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import  Progress  from "../components/ui/progress.jsx"
import { Code, Palette, Zap, Award, Star, TrendingUp, Clock, Users } from 'lucide-react'

const achievements = [
  { id: 1, title: "Code Ninja", description: "Complete 10 coding challenges", icon: Code, progress: 70 },
  { id: 2, title: "Design Guru", description: "Finish 5 design challenges", icon: Palette, progress: 40 },
  { id: 3, title: "Speed Demon", description: "Complete a challenge in under 5 minutes", icon: Zap, progress: 100 },
  { id: 4, title: "Team Player", description: "Collaborate on 3 group projects", icon: Users, progress: 66 },
  { id: 5, title: "Consistent Learner", description: "Log in for 7 consecutive days", icon: TrendingUp, progress: 85 },
  { id: 6, title: "Night Owl", description: "Complete 5 challenges after midnight", icon: Clock, progress: 20 },
]

export default function AchievementsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Achievements</h2>
      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
        Track your progress and unlock special badges as you conquer challenges and improve your skills.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-pink-400">
                {React.createElement(achievement.icon, { className: "mr-2 h-6 w-6 text-yellow-400" })}
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{achievement.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm text-gray-400">{achievement.progress}%</span>
                </div>
                <Progress value={achievement.progress} className="h-2 bg-gray-700" indicatorClassName="bg-gradient-to-r from-pink-500 to-yellow-500" />
              </div>
              {achievement.progress === 100 && (
                <div className="flex items-center justify-center space-x-2 text-yellow-400">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Achievement Unlocked!</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-pink-500 p-6 mt-12">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-pink-400">Your Achievement Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <Star className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
            <h4 className="text-2xl font-bold text-gray-200">15</h4>
            <p className="text-gray-400">Total Achievements</p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
            <h4 className="text-2xl font-bold text-gray-200">5</h4>
            <p className="text-gray-400">Gold Achievements</p>
          </div>
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
            <h4 className="text-2xl font-bold text-gray-200">80%</h4>
            <p className="text-gray-400">Completion Rate</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
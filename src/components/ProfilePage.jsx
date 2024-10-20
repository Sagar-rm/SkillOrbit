import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import  Progress  from "../components/ui/progress.jsx"
import { Badge } from "@/components/ui/badge"
import { Zap, Award, Star, TrendingUp } from 'lucide-react'

export default function ProfilePage({ userPoints, completedChallenges }) {
  const level = Math.floor(userPoints / 100) + 1
  const nextLevelPoints = level * 100

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Your Profile</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <Avatar className="h-32 w-32 border-4 border-pink-500">
          <AvatarImage src="https://i.pravatar.cc/128" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-pink-400">Jane Doe</h3>
          <p className="text-xl text-gray-300">Full Stack Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <Badge className="bg-blue-600">JavaScript</Badge>
            <Badge className="bg-green-600">React</Badge>
            <Badge className="bg-yellow-600">Node.js</Badge>
            <Badge className="bg-purple-600">GraphQL</Badge>
          </div>
        </div>
      </div>
      <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
        <CardHeader>
          <CardTitle className="text-2xl text-pink-400">Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-200">Level {level}</span>
                <span className="text-lg font-medium text-gray-200">{userPoints} / {nextLevelPoints} XP</span>
              </div>
              <Progress value={(userPoints % 100) * 100 / nextLevelPoints} className="h-3 bg-gray-700" indicatorClassName="bg-gradient-to-r from-pink-500 to-yellow-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-900/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="text-yellow-400" />
                  <span className="text-lg font-medium text-gray-200">Total Points</span>
                </div>
                <span className="text-3xl font-bold text-pink-400">{userPoints}</span>
              </div>
              <div className="bg-purple-900/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="text-yellow-400" />
                  <span className="text-lg font-medium text-gray-200">Challenges Completed</span>
                </div>
                <span className="text-3xl font-bold text-pink-400">{completedChallenges.length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {['Code Ninja', 'Design Guru', 'Quick Learner'].map((achievement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Star className="text-yellow-400" />
                  <span className="text-gray-200">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Skill Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { skill: 'JavaScript', progress: 75 },
                { skill: 'React', progress: 60 },
                { skill: 'Node.js', progress: 45 },
              ].map((skill, index) => (
                <li key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200">{skill.skill}</span>
                    <span className="text-gray-300">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2 bg-gray-700" indicatorClassName="bg-gradient-to-r from-pink-500 to-yellow-500" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
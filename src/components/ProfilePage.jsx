import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import  Progress  from "../components/ui/progress.jsx"
import { Badge } from "@/components/ui/badge"
import { Zap, Award, Star, TrendingUp, CheckCircle2, Clock } from 'lucide-react'

export default function ProfilePage({ userPoints, completedChallenges }) {
  const level = Math.floor(userPoints / 100) + 1
  const nextLevelPoints = level * 100
  const totalChallenges = 20 // Assuming there are 20 total challenges

  const challengeCategories = [
    { name: "Coding", completed: 8, total: 10 },
    { name: "Design", completed: 3, total: 5 },
    { name: "Data Science", completed: 2, total: 5 },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Your Profile</h2>
      
      {/* User Info Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <Avatar className="h-32 w-32 border-4 border-blue-200">
          <AvatarImage src="https://i.pravatar.cc/128" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-blue-600">Jane Doe</h3>
          <p className="text-xl text-gray-600">Full Stack Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <Badge className="bg-blue-100 text-blue-600">JavaScript</Badge>
            <Badge className="bg-green-100 text-green-600">React</Badge>
            <Badge className="bg-yellow-100 text-yellow-600">Node.js</Badge>
            <Badge className="bg-purple-100 text-purple-600">GraphQL</Badge>
          </div>
        </div>
      </div>

      {/* Dashboard Overview */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Your Progress Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total Points</p>
                    <p className="text-2xl font-bold text-blue-700">{userPoints}</p>
                  </div>
                  <Star className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-purple-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Current Level</p>
                    <p className="text-2xl font-bold text-purple-700">{level}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Challenges Completed</p>
                    <p className="text-2xl font-bold text-green-700">{completedChallenges.length} / {totalChallenges}</p>
                  </div>
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-yellow-600">Time Spent Learning</p>
                    <p className="text-2xl font-bold text-yellow-700">24h 35m</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Level Progress */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Level Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Level {level}</span>
              <span className="text-sm font-medium text-gray-600">{userPoints} / {nextLevelPoints} XP</span>
            </div>
            <Progress value={(userPoints % 100) * 100 / nextLevelPoints} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
          </div>
        </CardContent>
      </Card>

      {/* Challenge Progress */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Challenge Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {challengeCategories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">{category.name}</span>
                  <span className="text-sm font-medium text-gray-600">{category.completed} / {category.total}</span>
                </div>
                <Progress value={(category.completed / category.total) * 100} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {['Code Ninja', 'Design Guru', 'Quick Learner'].map((achievement, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Award className="text-yellow-500" />
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Skill Progress */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Skill Progress</CardTitle>
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
                  <span className="text-sm font-medium text-gray-600">{skill.skill}</span>
                  <span className="text-sm font-medium text-gray-600">{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import   Progress  from "../components/ui/progress.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rocket, Star, Zap, Award, Users, Book, Globe, Shield, TrendingUp } from 'lucide-react'

export default function ProfilePage() {
  const user = {
    name: "Stella Nova",
    title: "Interstellar Developer",
    avatar: "/astronaut-avatar.png",
    level: 42,
    exp: 7800,
    nextLevelExp: 10000,
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 92 },
      { name: "Node.js", level: 78 },
      { name: "Python", level: 70 },
      { name: "UI/UX Design", level: 65 },
    ],
    achievements: [
      { name: "Code Voyager", icon: Rocket },
      { name: "Bug Buster", icon: Shield },
      { name: "API Astronaut", icon: Globe },
    ],
    stats: [
      { name: "Challenges Completed", value: 127, icon: Zap },
      { name: "Contributions", value: 89, icon: Users },
      { name: "Cosmic Points", value: 12500, icon: Star },
    ]
  }

  return (
    <div className="space-y-8 p-6">
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-32 h-32 mx-auto border-4 border-yellow-400">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h2 className="text-4xl font-bold text-pink-400">{user.name}</h2>
        <p className="text-xl text-gray-300">{user.title}</p>
        <Badge variant="outline" className="text-yellow-400 border-yellow-400">
          Level {user.level} Space Explorer
        </Badge>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Skill Constellations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {user.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-4 w-full bg-secondary" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Cosmic Achievements</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            {user.achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">{achievement.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Galactic Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-6">
            {user.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-200">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-pink-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg text-gray-300">Experience</span>
              <span className="text-lg text-yellow-400">{user.exp} / {user.nextLevelExp} XP</span>
            </div>
            <Progress value={(user.exp / user.nextLevelExp) * 100} className="h-4 w-full bg-secondary" />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
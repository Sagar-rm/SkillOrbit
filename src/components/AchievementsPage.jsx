'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Progress from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Award, Star, TrendingUp, Clock, Users, Rocket, Globe, Shield, Brain } from 'lucide-react'

const achievements = [
  { id: 1, title: "Code Voyager", description: "Complete 10 coding missions", icon: Code, progress: 70 },
  { id: 2, title: "Design Nebula", description: "Create 5 stellar designs", icon: Palette, progress: 40 },
  { id: 3, title: "Quantum Coder", description: "Solve a challenge in under 5 minutes", icon: Zap, progress: 100 },
  { id: 4, title: "Cosmic Collaborator", description: "Contribute to 3 intergalactic projects", icon: Users, progress: 66 },
  { id: 5, title: "Skill Supernova", description: "Log in for 7 light-years straight", icon: TrendingUp, progress: 85 },
  { id: 6, title: "Dark Matter Developer", description: "Complete 5 challenges in the dead of space-night", icon: Clock, progress: 20 },
]

export default function AchievementsPage() {
  return (
    <div className="space-y-8">
      <motion.h2 
        className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Stellar Achievements
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Track your cosmic journey and unlock interstellar badges as you conquer challenges and expand your skills across the SkillOrbit universe.
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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
                  <Progress value={achievement.progress} className="h-2 bg-secondary" />
                </div>
                {achievement.progress === 100 && (
                  <div className="flex items-center justify-center space-x-2 text-yellow-400">
                    <Award className="h-5 w-5" />
                    <span className="font-semibold">Achievement Unlocked!</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-pink-500 p-6 mt-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-pink-400">Your Cosmic Stats</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <Rocket className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-2xl font-bold text-gray-200">15</h4>
              <p className="text-gray-400">Missions Completed</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-2xl font-bold text-gray-200">5</h4>
              <p className="text-gray-400">Galaxies Explored</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-2xl font-bold text-gray-200">80%</h4>
              <p className="text-gray-400">Skill Shield Strength</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import  Progress  from "../components/ui/progress.jsx"
import { Rocket, Star, Clock, Zap, Award, Users } from 'lucide-react'

const challenges = [
  { 
    id: 1, 
    title: "Quantum Code Conundrum", 
    description: "Solve a series of quantum computing puzzles to unlock the secrets of the universe.",
    difficulty: "Hard",
    timeEstimate: "2 hours",
    points: 500,
    participants: 1289,
    completionRate: 35
  },
  { 
    id: 2, 
    title: "Galactic UI Design", 
    description: "Create an intuitive user interface for interstellar travelers.",
    difficulty: "Medium",
    timeEstimate: "1.5 hours",
    points: 300,
    participants: 2156,
    completionRate: 62
  },
  { 
    id: 3, 
    title: "Asteroid Data Mining", 
    description: "Develop an algorithm to efficiently extract valuable data from asteroid fields.",
    difficulty: "Expert",
    timeEstimate: "3 hours",
    points: 750,
    participants: 876,
    completionRate: 18
  },
  { 
    id: 4, 
    title: "Space Station Security", 
    description: "Implement a robust security system to protect the SkillOrbit space station from cyber threats.",
    difficulty: "Hard",
    timeEstimate: "2.5 hours",
    points: 600,
    participants: 1543,
    completionRate: 41
  },
]

export default function ChallengesPage() {
  return (
    <div className="space-y-8 p-6">
      <motion.h2 
        className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cosmic Challenges
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Embark on mind-bending missions to test your skills and expand your knowledge across the digital universe.
      </motion.p>
      <div className="grid gap-6 md:grid-cols-2">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl text-pink-400">{challenge.title}</span>
                  <Badge variant="outline" className="bg-yellow-400 text-blue-900">
                    {challenge.difficulty}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">{challenge.description}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {challenge.timeEstimate}
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4" />
                    {challenge.points} points
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {challenge.participants} astronauts
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Completion Rate</span>
                    <span className="text-gray-400">{challenge.completionRate}%</span>
                  </div>
                  <Progress value={challenge.completionRate} className="h-4 w-full bg-secondary" />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">
                  <Rocket className="mr-2 h-4 w-4" /> Launch Challenge
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users, Trophy, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const features = [
    { icon: Code, title: "Coding Challenges", description: "Improve your coding skills with our daily challenges" },
    { icon: Palette, title: "Design Exercises", description: "Enhance your design abilities through creative tasks" },
    { icon: Zap, title: "Quick Learning", description: "Learn new concepts and technologies in bite-sized lessons" },
    { icon: Users, title: "Community Collaboration", description: "Work together on projects and learn from peers" },
    { icon: Trophy, title: "Skill Competitions", description: "Participate in contests to test your abilities" },
    { icon: BookOpen, title: "Comprehensive Resources", description: "Access a vast library of learning materials" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        About SkillOrbit
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
        variants={itemVariants}
      >
        SkillOrbit is a cutting-edge platform designed to help you hone your skills in coding, design, and more.
        With daily challenges, a competitive leaderboard, and a supportive community, you'll be forging your path to success in no time.
      </motion.p>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-gradient-to-br from-slate-800 to-indigo-900 border-2 border-indigo-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {React.createElement(feature.icon, { className: "w-16 h-16 text-indigo-400 mb-4" })}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="mt-16 bg-gradient-to-r from-slate-900 to-indigo-900 p-8 rounded-lg shadow-2xl"
        variants={itemVariants}
      >
        <motion.h3 
          className="text-3xl font-bold text-center text-indigo-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Our Mission
        </motion.h3>
        <motion.p 
          className="text-xl text-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          At SkillOrbit, we're committed to empowering individuals to reach their full potential in the ever-evolving world of technology and design. 
          Our platform is built on the belief that continuous learning and practical application are the keys to success in the digital age.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
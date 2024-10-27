'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent } from "@/components/ui/tabs"
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import AuthPage from '@/components/AuthPage'
import ChallengesPage from '@/components/ChallengesPage'
import ProfilePage from '@/components/ProfilePage'
import AchievementsPage from '@/components/AchievementsPage'
import MentorshipPage from '@/components/MentorshipPage'
import LeaderboardPage from '@/components/LeaderboardPage'
import SettingsPage from '@/components/SettingsPage'
import { motion } from 'framer-motion'

const StarField = () => {
  const generateStars = (count) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      animationDuration: Math.random() * 3 + 2,
    }))
  }

  const stars = generateStars(100)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none ">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function SkillBuildingPlatform() {
  const [activeTab, setActiveTab] = useState("home")
  const [userPoints, setUserPoints] = useState(0)
  const [completedChallenges, setCompletedChallenges] = useState([])

  const completeChallenge = (challengeId, points) => {
    if (!completedChallenges.includes(challengeId)) {
      setUserPoints(prevPoints => prevPoints + points)
      setCompletedChallenges(prevCompleted => [...prevCompleted, challengeId])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-gray-100 relative">
      <StarField />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} userPoints={userPoints} />
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsContent value="home"><HomePage /></TabsContent>
          <TabsContent value="about"><AboutPage /></TabsContent>
          <TabsContent value="auth"><AuthPage /></TabsContent>
          <TabsContent value="challenges">
            <ChallengesPage 
              completeChallenge={completeChallenge} 
              completedChallenges={completedChallenges} 
            />
          </TabsContent>
          <TabsContent value="profile">
            <ProfilePage 
              userPoints={userPoints} 
              completedChallenges={completedChallenges} 
            />
          </TabsContent>
          <TabsContent value="settings">
            <SettingsPage />
          </TabsContent>
          <TabsContent value="achievements"><AchievementsPage /></TabsContent>
          <TabsContent value="mentorship"><MentorshipPage /></TabsContent>
          <TabsContent value="leaderboard"><LeaderboardPage /></TabsContent>
        </Tabs>
    </div>
  )
}
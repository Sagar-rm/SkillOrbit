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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-gray-100">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} userPoints={userPoints} />
      <main className="container mx-auto p-4 pt-24 space-y-8">
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
          `<TabsContent value="settings">`
`<SettingsPage />`
`</TabsContent>`
          <TabsContent value="achievements"><AchievementsPage /></TabsContent>
          <TabsContent value="mentorship"><MentorshipPage /></TabsContent>
          <TabsContent value="leaderboard"><LeaderboardPage /></TabsContent>

        </Tabs>
      </main>
    </div>
  )
}
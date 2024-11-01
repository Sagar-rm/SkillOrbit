import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import AuthPage from './components/AuthPage'
import ChallengesPage from './components/ChallengesPage'
import ProfilePage from './components/ProfilePage'
import AboutPage from './components/AboutPage'
import AchievementsPage from './components/AchievementsPage'
import MentorshipPage from './components/MentorshipPage'
import LeaderboardPage from './components/LeaderboardPage'
import SettingsPage from './components/SettingsPage'

export default function App() {
  const [userPoints, setUserPoints] = React.useState(0)
  const [completedChallenges, setCompletedChallenges] = React.useState([])

  const completeChallenge = (challengeId, points) => {
    if (!completedChallenges.includes(challengeId)) {
      setUserPoints(prevPoints => prevPoints + points)
      setCompletedChallenges(prevCompleted => [...prevCompleted, challengeId])
    }
  }

  return (
    <ThemeProvider attribute="class">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-gray-100 relative">
          <NavBar userPoints={userPoints} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path="/challenges" element={<ChallengesPage completeChallenge={completeChallenge} completedChallenges={completedChallenges} />} />
            <Route path="/profile" element={<ProfilePage userPoints={userPoints} completedChallenges={completedChallenges} />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}
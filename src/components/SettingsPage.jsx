'use client'

import React, { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Bell, Moon, Sun, Globe, Lock, User, Zap, Sparkles, Shield, Headphones, Eye, BookOpen, Trophy } from 'lucide-react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [challengeDifficulty, setChallengeDifficulty] = useState(50)
  const [language, setLanguage] = useState('en')
  const [fontSize, setFontSize] = useState(16)
  const [autoSave, setAutoSave] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [soundEffects, setSoundEffects] = useState(true)
  const [showAchievements, setShowAchievements] = useState(true)
  const [learningPath, setLearningPath] = useState('fullstack')
  const [showLeaderboard, setShowLeaderboard] = useState(true)
  const [showBadges, setShowBadges] = useState(true)
  const [dailyGoal, setDailyGoal] = useState(30)

  return (
    <Fragment>
      <div className="space-y-8 p-6">
        <motion.h1 
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SkillOrbit Settings
        </motion.h1>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 backdrop-blur-md">
            <TabsTrigger value="account" className="data-[state=active]:bg-indigo-500">Account</TabsTrigger>
            <TabsTrigger value="preferences" className="data-[state=active]:bg-indigo-500">Preferences</TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-indigo-500">Appearance</TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-indigo-500">Privacy & Security</TabsTrigger>
            <TabsTrigger value="gamification" className="data-[state=active]:bg-indigo-500">Gamification</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-indigo-400">
                  <User className="mr-2" /> Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Your username" className="bg-slate-700 border-indigo-500/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-slate-700 border-indigo-500/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profilePicture">Profile Picture</Label>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden">
                      <img src="/placeholder.svg?height=80&width=80" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <Button variant="outline" size="sm">
                      Upload New Picture
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea id="bio" placeholder="Tell us about yourself" className="w-full h-24 bg-slate-700 border-indigo-500/50 rounded-md p-2" />
                </div>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600">
                  Update Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="preferences">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-indigo-400">
                    <Bell className="mr-2" /> Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-lg">Enable Notifications</Label>
                    <Switch
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                      className="data-[state=checked]:bg-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Notification Types</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {['New Challenges', 'Mentor Messages', 'Achievement Unlocked', 'Leaderboard Updates'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={type} />
                          <Label htmlFor={type}>{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-indigo-400">
                    <Zap className="mr-2" /> Learning Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Challenge Difficulty</Label>
                    <div className="flex items-center space-x-2">
                      <Slider
                        value={[challengeDifficulty]}
                        onValueChange={(value) => setChallengeDifficulty(value[0])}
                        max={100}
                        step={1}
                        className="flex-grow"
                      />
                      <span className="w-12 text-center">{challengeDifficulty}%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger id="language" className="bg-slate-700 border-indigo-500/50">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="learningPath">Learning Path</Label>
                    <Select value={learningPath} onValueChange={setLearningPath}>
                      <SelectTrigger id="learningPath" className="bg-slate-700 border-indigo-500/50">
                        <SelectValue placeholder="Select a learning path" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullstack">Full Stack Development</SelectItem>
                        <SelectItem value="frontend">Frontend Development</SelectItem>
                        <SelectItem value="backend">Backend Development</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="ai">AI and Machine Learning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="appearance">
            <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-indigo-400">
                  <Sparkles className="mr-2" /> Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkMode" className="text-lg">Dark Mode</Label>
                  <Switch
                    id="darkMode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Theme Color</Label>
                  <div className="flex space-x-2">
                    {['indigo', 'cyan', 'purple', 'green'].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full bg-${color}-500 hover:ring-2 ring-white transition-all duration-200`}
                        onClick={() => {/* Set theme color logic */}}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      value={[fontSize]}
                      onValueChange={(value) => setFontSize(value[0])}
                      min={12}
                      max={24}
                      step={1}
                      className="flex-grow"
                    />
                    <span className="w-12 text-center">{fontSize}px</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showAchievements" className="text-lg">Show Achievements</Label>
                  <Switch
                    id="showAchievements"
                    checked={showAchievements}
                    onCheckedChange={setShowAchievements}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="privacy">
            <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-indigo-400">
                  <Shield className="mr-2" /> Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="twoFactorAuth" className="text-lg">Two-Factor Authentication</Label>
                  <Switch
                    id="twoFactorAuth"
                    checked={twoFactorAuth}
                    onCheckedChange={setTwoFactorAuth}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoSave" className="text-lg">Auto-save Progress</Label>
                  <Switch
                    id="autoSave"
                    checked={autoSave}
                    onCheckedChange={setAutoSave}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Data Sharing</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Share progress with mentors', 'Allow anonymous data collection for platform improvement'].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox id={option} />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gamification">
            <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-indigo-400">
                  <Trophy className="mr-2" /> Gamification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="showLeaderboard" className="text-lg">Show Leaderboard</Label>
                  <Switch
                    id="showLeaderboard"
                    checked={showLeaderboard}
                    onCheckedChange={setShowLeaderboard}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showBadges" className="text-lg">Display Badges</Label>
                  <Switch
                    id="showBadges"
                    checked={showBadges}
                    onCheckedChange={setShowBadges}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dailyGoal">Daily Goal (minutes)</Label>
                  <Input
                    id="dailyGoal"
                    type="number"
                    value={dailyGoal}
                    onChange={(e) => setDailyGoal(e.target.value)}
                    className="bg-slate-700 border-indigo-500/50"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-lg py-6 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
            Save All Settings
          </Button>
        </motion.div>

        <ParticleEffect />
      </div>
    </Fragment>
  )
}

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400 rounded-full opacity-30"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Info, Zap, User, Award, Users, Settings, LogOut, Moon, Sun, Rocket, BarChart, Trophy } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "About", icon: Info, path: "/about" },
  { name: "Challenges", icon: Zap, path: "/challenges" },
  { name: "Mentorship", icon: Users, path: "/mentorship" },
  { name: "Gamification", icon: Trophy, path: "/gamification" },
]

export default function NavBar({ userPoints = 1000 }) {
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Simulating login state

  const handleLogin = () => {
    // Simulating login process
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    // Simulating logout process
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md text-gray-100 p-4 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Rocket className="w-8 h-8 text-indigo-400 mr-2" />
          <h1 className="text-3xl font-bold mr-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            SkillOrbit
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex flex-wrap justify-center space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  className="flex items-center transition-all duration-300 hover:scale-105 hover:bg-indigo-700/50 text-gray-200"
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Button>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-200 hover:bg-indigo-700/50"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="relative h-8 w-8 rounded-full border-2 border-indigo-500 shadow-lg transition-all duration-300 hover:border-indigo-400 hover:shadow-indigo-500/50"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-slate-800 text-gray-200" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-gray-400">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/achievements')}>
                    <Award className="mr-2 h-4 w-4" />
                    <span>Achievements</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/leaderboard')}>
                    <BarChart className="mr-2 h-4 w-4" />
                    <span>Leaderboard</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Points: {userPoints}</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="bg-cyan-600 text-white hover:bg-cyan-700"
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
'use client'

import React from 'react'
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
import { Home, Info, Zap, User, Award, Users, Settings, Bell, LogOut, Moon, Sun , Rocket} from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: Info },
  { name: "Challenges", icon: Zap },
  { name: "Profile", icon: User },
  { name: "Achievements", icon: Award },
  { name: "Mentorship", icon: Users },
]

export default function NavBar({ activeTab, setActiveTab, userPoints = 1000 }) {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800  text-gray-100 p-4 sticky top-0 z-10 shadow-lg">
     
     <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Rocket className="w-8 h-8 text-yellow-400 mr-2" />
          <h1 className="text-3xl font-bold mr-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
            SkillOrbit
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex flex-wrap justify-center space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant={activeTab === item.name.toLowerCase() ? "default" : "ghost"}
                  className={`flex items-center transition-all duration-300 hover:scale-105 ${
                    activeTab === item.name.toLowerCase() 
                      ? 'bg-pink-600 text-white dark:bg-pink-800' 
                      : 'hover:bg-purple-700 text-gray-200 dark:hover:bg-purple-900'
                  }`}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Button>
              </li>
            ))}
          </ul>
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-200 hover:bg-purple-700 dark:hover:bg-purple-900"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            
          </Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-200 hover:bg-purple-700 dark:hover:bg-purple-900 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Award className="mr-2 h-4 w-4" />
                <span>Points: {userPoints}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
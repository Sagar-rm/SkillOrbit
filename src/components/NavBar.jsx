import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, Info, Zap, User, Award, Users } from 'lucide-react'

const navItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: Info },
  { name: "Challenges", icon: Zap },
  { name: "Profile", icon: User },
  { name: "Achievements", icon: Award },
  { name: "Mentorship", icon: Users },
]

export default function NavBar({ activeTab, setActiveTab }) {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-800 text-gray-100 p-4 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
          Skill Forge
        </h1>
        <ul className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <Button
                variant={activeTab === item.name.toLowerCase() ? "default" : "ghost"}
                className={`flex items-center transition-all duration-300 hover:scale-105 ${
                  activeTab === item.name.toLowerCase() 
                    ? 'bg-pink-600 text-white' 
                    : 'hover:bg-purple-700 text-gray-200'
                }`}
                onClick={() => setActiveTab(item.name.toLowerCase())}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
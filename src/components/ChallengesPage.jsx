import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Palette, Zap, ChevronRight, Clock, Users } from 'lucide-react'

const challenges = [
  { id: 1, title: "Master Array Methods", difficulty: "Easy", points: 10, category: "Code", icon: Code, timeEstimate: "30 min", participants: 1500  },
  { id: 2, title: "Advanced React Hooks", difficulty: "Medium", points: 20, category: "Code", icon: Code, timeEstimate: "1 hour", participants: 1200 },
  { id: 3, title: "CSS Grid Layouts", difficulty: "Medium", points: 20, category: "Design", icon: Palette, timeEstimate: "45 min", participants: 1000 },
  { id: 4, title: "Animation Techniques", difficulty: "Hard", points: 30, category: "Design", icon: Palette, timeEstimate: "1.5 hours", participants: 800 },
  { id: 5, title: "Performance Optimization", difficulty: "Hard", points: 30, category: "Code", icon: Zap, timeEstimate: "2 hours", participants: 600 },
  { id: 6, title: "Responsive Web Design", difficulty: "Medium", points: 25, category: "Design", icon: Palette, timeEstimate: "1 hour", participants: 1100 },
]

export default function ChallengesPage({ completeChallenge, completedChallenges }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Daily Challenges</h2>
      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
        Push your skills to the limit with our curated set of challenges. From coding puzzles to design tasks, there's something for everyone.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <Card key={challenge.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
            <CardHeader className="bg-gradient-to-r from-pink-500/20 to-yellow-500/20 pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-pink-400">{challenge.title}</CardTitle>
                  <CardDescription className="text-gray-300">{challenge.category}</CardDescription>
                </div>
                {React.createElement(challenge.icon, { className: "text-yellow-400 w-8 h-8" })}
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Medium' ? 'default' : 'destructive'} className="bg-opacity-50">
                  {challenge.difficulty}
                </Badge>
                <span className="font-semibold text-yellow-400">{challenge.points} pts</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {challenge.timeEstimate}</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {challenge.participants} participants</span>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-800/50">
              <Button 
                className="w-full group bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white"
                variant={completedChallenges.includes(challenge.id) ? "secondary" : "default"}
                onClick={() => completeChallenge(challenge.id, challenge.points)}
                disabled={completedChallenges.includes(challenge.id)}
              >
                {completedChallenges.includes(challenge.id) ? 'Completed' : 'Start Challenge'}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
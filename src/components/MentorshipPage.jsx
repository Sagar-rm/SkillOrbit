import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Calendar } from 'lucide-react'

const mentors = [
  { id: 1, name: "Alex Johnson", expertise: "Full Stack Development", rating: 4.9, sessions: 120, image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Sarah Lee", expertise: "UI/UX Design", rating: 4.8, sessions: 98, image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Michael Chen", expertise: "Machine Learning", rating: 4.7, sessions: 85, image: "https://i.pravatar.cc/150?img=3" },
]

export default function MentorshipPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Mentorship Program</h2>
      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
        Connect with experienced mentors to accelerate your learning and career growth. Get personalized guidance and support from industry professionals.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Find a Mentor</CardTitle>
            <CardDescription className="text-gray-300">Browse our list of expert mentors</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">Search Mentors</Button>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Become a Mentor</CardTitle>
            <CardDescription className="text-gray-300">Share your knowledge and help others grow</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Apply as Mentor</Button>
          </CardContent>
        </Card>
      </div>
      <h3 className="text-3xl font-bold text-center text-pink-400 mt-12">Featured Mentors</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto border-4 border-pink-500">
                <AvatarImage src={mentor.image} alt={mentor.name} />
                <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4 text-2xl text-pink-400">{mentor.name}</CardTitle>
              <CardDescription className="text-gray-300">{mentor.expertise}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center space-x-2">
                <Badge className="bg-yellow-600">{mentor.rating} <Star className="ml-1 h-4 w-4" /></Badge>
                <Badge className="bg-blue-600">{mentor.sessions} sessions</Badge>
              </div>
              <div className="flex justify-center space-x-4">
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" /> Book Session
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
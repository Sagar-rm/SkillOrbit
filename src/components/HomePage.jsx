import React from 'react'
import { Button } from "@/components/ui/button"
// import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">Welcome to Skill Forge</h2>
      <p className="text-2xl text-gray-300">Sharpen Your Skills, Forge Your Future</p>
      <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white text-lg py-6 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
        Start Your Journey
      </Button>
      <div className="mt-12 relative">
        <image 
            src = "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
          alt="Skill Forge Hero"
          width={1200}
          height={600}
          className="rounded-lg shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-75"></div>
        <div className="absolute bottom-8 left-8 right-8 text-left">
          <h3 className="text-3xl font-bold text-white mb-4">Unlock Your Potential</h3>
          <p className="text-xl text-gray-200">Join thousands of learners on their journey to mastery</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[
          { title: "100+ Challenges", description: "Tackle diverse coding and design challenges" },
          { title: "Expert Mentors", description: "Learn from industry professionals" },
          { title: "Community Support", description: "Collaborate and grow with peers" },
        ].map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold text-pink-400 mb-4">{feature.title}</h4>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap, Users, Trophy, BookOpen, UserPlus, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="relative  text-center space-y-8 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 leading-tight">
            Welcome to SkillOrbit
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Sharpen Your Skills, Forge Your Future
          </p>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white text-lg py-6 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
            Start Your Journey <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900 to-purple-900 opacity-50"></div>
        <div className="relative  container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Why Choose SkillOrbit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "100+ Challenges", description: "Tackle diverse coding and design challenges to enhance your skills" },
              { icon: Users, title: "Expert Mentors", description: "Learn from industry professionals and accelerate your growth" },
              { icon: Trophy, title: "Competitive Leaderboard", description: "Compete with peers and showcase your achievements" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
                  <CardTitle className="text-2xl font-bold text-pink-400">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">How SkillOrbit Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: UserPlus, title: "Sign Up", description: "Create your account and set your learning goals" },
              { icon: Zap, title: "Take Challenges", description: "Complete daily challenges tailored to your skill level" },
              { icon: Users, title: "Collaborate", description: "Join study groups and work on projects together" },
              { icon: TrendingUp, title: "Track Progress", description: "Monitor your growth and earn achievements" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Testimonials Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="relative  container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "Full Stack Developer", quote: "SkillOrbit has been instrumental in advancing my coding skills. The challenges are both fun and practical!" },
              { name: "Sarah Lee", role: "UX Designer", quote: "I love the design-focused challenges. They've helped me think outside the box and improve my creativity." },
              { name: "Mike Chen", role: "Data Scientist", quote: "The mentorship program is fantastic. I've learned so much from experienced professionals in my field." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-md border-2 border-pink-500">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-pink-400">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pink-400 mb-6">Ready to Orbit Your Skills?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already sharpening their skills and advancing their careers with SkillOrbit.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white text-lg py-6 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
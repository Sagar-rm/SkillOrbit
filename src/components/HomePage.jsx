import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Users, Trophy, UserPlus, Zap, TrendingUp, Star, Book, Globe, Rocket, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg"
            alt="Space Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-indigo-900/90"></div>
        </div>
        <div className="relative text-center space-y-8 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 leading-tight">
            Welcome to SkillOrbit
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Sharpen Your Skills, Forge Your Future
          </p>
          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-lg py-6 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
            Start Your Journey <ArrowRight className="ml-2" />
          </Button>
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/astronaut-PBHf6nODOJ5310RqaXxgTcVWxhBBBE.png"
            alt="Floating Astronaut"
            className="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/satellite-j9Mf8ZkCkGDXBJZBXUZUFXZbTqGEzx.png"
            alt="Satellite"
            className="absolute top-40 left-10 w-24 h-24 md:w-32 md:h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/features-background.jpg"
            alt="Features Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-indigo-900/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Why Choose SkillOrbit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "100+ Challenges", description: "Tackle diverse coding and design challenges to enhance your skills" },
              { icon: Users, title: "Expert Mentors", description: "Learn from industry professionals and accelerate your growth" },
              { icon: Trophy, title: "Competitive Leaderboard", description: "Compete with peers and showcase your achievements" },
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-400/20 hover:border-indigo-400 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/30 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <CardTitle className="text-2xl font-bold text-indigo-400">{feature.title}</CardTitle>
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
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/how-it-works-background.jpg"
            alt="How It Works Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">How SkillOrbit Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: UserPlus, title: "Sign Up", description: "Create your account and set your learning goals" },
              { icon: Zap, title: "Take Challenges", description: "Complete daily challenges tailored to your skill level" },
              { icon: Users, title: "Collaborate", description: "Join study groups and work on projects together" },
              { icon: TrendingUp, title: "Track Progress", description: "Monitor your growth and earn achievements" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
          <ParticleEffect />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonials-background.jpg"
            alt="Testimonials Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-indigo-900/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "Full Stack Developer", quote: "SkillOrbit has been instrumental in advancing my coding skills. The challenges are both fun and practical!" },
              { name: "Sarah Lee", role: "UX Designer", quote: "I love the design-focused challenges. They've helped me think outside the box and improve my creativity." },
              { name: "Mike Chen", role: "Data Scientist", quote: "The mentorship program is fantastic. I've learned so much from experienced professionals in my field." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-md border-2 border-indigo-500">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-indigo-400">{testimonial.name}</p>
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
      <section className="relative py-16 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6">Ready to Orbit Your Skills?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already sharpening their skills and advancing their careers with SkillOrbit.
          </p>
          <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 text-lg py-4 px-8 rounded-full transition-all duration-300 animate-pulse">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-cyan-400 opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 10 + 5}px`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

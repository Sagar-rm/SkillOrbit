'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Users, Trophy, UserPlus, Zap, TrendingUp, Star, Book, Globe, Rocket } from 'lucide-react'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const orbitAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-700/90"></div>
        <motion.div 
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.2)"%3E%3C/circle%3E%3C/svg%3E")',
            backgroundSize: '100px 100px'
          }}
        />
        <div className="relative text-center space-y-8 px-4">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="text-yellow-400">SkillOrbit</span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate Your Skills, Expand Your Horizons
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 text-lg py-6 px-8 rounded-full transition-all duration-300">
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20"
          {...orbitAnimation}
        >
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50"></div>
          <motion.div
            className="absolute top-0 left-1/2 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center text-yellow-400 mb-16"
            {...fadeInUp}
          >
            Why Choose SkillOrbit?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Code, title: "100+ Challenges", description: "Tackle diverse coding and design challenges to enhance your skills" },
              { icon: Users, title: "Expert Mentors", description: "Learn from industry professionals and accelerate your growth" },
              { icon: Trophy, title: "Competitive Leaderboard", description: "Compete with peers and showcase your achievements" },
              { icon: Globe, title: "Global Community", description: "Connect with learners from around the world" },
              { icon: Rocket, title: "Career Advancement", description: "Gain skills that propel your career forward" },
              { icon: Book, title: "Comprehensive Resources", description: "Access a wealth of learning materials and tutorials" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-2 border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/20">
                  <CardHeader>
                    <feature.icon className="w-16 h-16 text-yellow-400 mb-4 mx-auto" />
                    <CardTitle className="text-2xl font-bold text-white text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center text-yellow-400 mb-16"
            {...fadeInUp}
          >
            How SkillOrbit Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: UserPlus, title: "Sign Up", description: "Create your account and set your learning goals" },
              { icon: Zap, title: "Take Challenges", description: "Complete daily challenges tailored to your skill level" },
              { icon: Users, title: "Collaborate", description: "Join study groups and work on projects together" },
              { icon: TrendingUp, title: "Track Progress", description: "Monitor your growth and earn achievements" },
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-6 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-indigo-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center text-yellow-400 mb-16"
            {...fadeInUp}
          >
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Alex Johnson", role: "Full Stack Developer", quote: "SkillOrbit has been instrumental in advancing my coding skills. The challenges are both fun and practical!" },
              { name: "Sarah Lee", role: "UX Designer", quote: "I love the design-focused challenges. They've helped me think outside the box and improve my creativity." },
              { name: "Mike Chen", role: "Data Scientist", quote: "The mentorship program is fantastic. I've learned so much from experienced professionals in my field." },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/20">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-indigo-900">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-800/90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl font-bold text-yellow-400 mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Orbit Your Skills?
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of learners who are already sharpening their skills and advancing their careers with SkillOrbit.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 text-lg py-6 px-8 rounded-full transition-all duration-300">
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
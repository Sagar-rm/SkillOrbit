"use client"

import React, { useRef, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Users, Trophy, UserPlus, Zap, TrendingUp, Sparkles } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import  Satellite  from '@/assets/satellite.png'
import  Astronut from '@/assets/astrounat.png'
import  Features from '@/assets/features.jpeg'
import  Bg from '@/assets/bg.png'
import Testimonial from '@/assets/testimonial.jpeg'




const EarthSphere = () => {
  const earthRef = useRef()
  const cloudRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 15
    cloudRef.current.rotation.y = elapsedTime / 10
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Sphere ref={earthRef} args={[1, 64, 64]} rotation={[0, 0, 0.3]}>
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w.earth2-63ois9DhkeEoydTv3d6vdsZwCvZZVy.png')}
          bumpMap={new THREE.TextureLoader().load('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w.earth2-63ois9DhkeEoydTv3d6vdsZwCvZZVy.png')}
          bumpScale={0.05}
          emissiveMap={new THREE.TextureLoader().load('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w.earth2-63ois9DhkeEoydTv3d6vdsZwCvZZVy.png')}
          emissive={new THREE.Color('#4299e1')}
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Sphere ref={cloudRef} args={[1.01, 64, 64]}>
        <meshPhongMaterial
          // map={new THREE.TextureLoader().load('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w.earth2-63ois9DhkeEoydTv3d6vdsZwCvZZVy.png')}
          transparent={true}
          opacity={0.4}
          color={new THREE.Color('#e2e8f0')}
        />
      </Sphere>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} rotateSpeed={10} />
    </>
  )
}

const StarField = () => {
  const generateStars = (count) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 2,
    }))
  }

  const stars = generateStars(800)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            delay: star.animationDelay,
          }}
        />
      ))}
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <StarField />
      <div className="absolute inset-0 z-0">
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_2t/14974.jpg"
          alt="Space Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-indigo-900/90"></div>
      </div>
      <div className="relative  text-center md:text-left md:w-1/2 px-4 md:pl-16 py-16">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to SkillOrbit
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl text-gray-300 max-w-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Sharpen Your Skills, Forge Your Future
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-lg py-6 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
            Start Your Journey <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
      <div className="relative w-full md:w-1/2 h-[400px] md:h-screen">
        <Suspense fallback={<div className="text-white text-center">Loading Earth...</div>}>
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <EarthSphere />
          </Canvas>
        </Suspense>
      </div>
      <motion.img
        src={Astronut}
        alt="Floating Astronaut"
        className="absolute bottom-40 right-20 w-32 h-32 md:w-48 md:h-48 "
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.img
        src={Satellite}
        alt="Satellite"
        className="absolute top-0 left-20 w-24 h-24 md:w-32 md:h-32 "
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </section>
  )
}

const FeaturesSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <img
          src={Features}
           alt="Features Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-indigo-900/90"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-indigo-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose SkillOrbit?
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Code, title: "100+ Challenges", description: "Tackle diverse coding and design challenges to enhance your skills" },
            { icon: Users, title: "Expert Mentors", description: "Learn from industry professionals and accelerate your growth" },
            { icon: Trophy, title: "Competitive Leaderboard", description: "Compete with peers and showcase your achievements" },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-800/50 backdrop-blur-md border-2 border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-400/20 hover:border-indigo-400 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/30 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-indigo-400">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const HowItWorksSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <img
          src={Bg}
          alt="How It Works Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-indigo-900/80"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-indigo-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How SkillOrbit Works
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { icon: UserPlus, title: "Sign Up", description: "Create your account and set your learning goals" },
            { icon: Zap, title: "Take Challenges", description: "Complete daily challenges tailored to your skill level" },
            { icon: Users, title: "Collaborate", description: "Join study groups and work on projects together" },
            { icon: TrendingUp, title: "Track Progress", description: "Monitor your growth and earn achievements" },
          ].map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
              
              <motion.div 
                className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360  }}
                transition={{ duration: 0.5 }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative py-16">
      <div className="absolute inset-0">
        <img
          src={Testimonial}
          alt="Testimonials Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-indigo-900/90"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-indigo-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Users Say
        </motion.h2>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { name: "Alex Johnson", role: "Full Stack Developer", quote: "SkillOrbit has been instrumental in advancing my coding skills. The challenges are both fun and practical!" },
            { name: "Sarah Lee", role: "UX Designer", quote: "I love the design-focused challenges. They've helped me think outside the box and improve my creativity." },
            { name: "Mike Chen", role: "Data Scientist", quote: "The mentorship program is fantastic. I've learned so much from experienced professionals in my field." },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-md border-2 border-indigo-500">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center mr-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-xl font-bold text-white">{testimonial.name[0]}</span>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-indigo-400">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-slate-900 to-indigo-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold text-indigo-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Orbit Your Skills?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join thousands of learners who are already sharpening their skills and advancing their careers with SkillOrbit.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 text-lg py-4 px-8 rounded-full transition-all duration-300 animate-pulse">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
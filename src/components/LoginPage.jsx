import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[400px] shadow-2xl bg-gradient-to-br from-slate-800 to-indigo-900 border-2 border-indigo-500">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl text-center text-indigo-400">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-300">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="bg-slate-700 text-white border-slate-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">Password</Label>
              <Input id="password" type="password" required className="bg-slate-700 text-white border-slate-600" />
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="remember" className="text-sm text-gray-300 flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded text-indigo-500 focus:ring-indigo-500" />
                <span>Remember me</span>
              </Label>
              <Link to="/forgot-password" className="text-sm text-indigo-400 hover:underline">Forgot password?</Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white">Sign In</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-600"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-2 text-gray-400">Or continue with</span>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" className="flex-1 mr-2 bg-slate-700 text-white hover:bg-slate-600">
                <FaGoogle className="mr-2" /> Google
              </Button>
              <Button variant="outline" className="flex-1 mr-2 bg-slate-700 text-white hover:bg-slate-600">
                <FaGithub className="mr-2" /> GitHub
              </Button>
              <Button variant="outline" className="flex-1 bg-slate-700 text-white hover:bg-slate-600">
                <FaLinkedin className="mr-2" /> LinkedIn
              </Button>
            </div>
            <p className="text-center text-sm text-gray-300">
              Don't have an account? <Link to="/register" className="text-indigo-400 hover:underline">Sign up</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
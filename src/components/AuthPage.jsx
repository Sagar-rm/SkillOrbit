import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <Card className="w-[400px] shadow-2xl bg-gradient-to-br from-blue-800 to-purple-800 border-2 border-pink-500">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl text-center text-pink-400">Sign In</CardTitle>
          <CardDescription className="text-center text-gray-300">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required className="bg-gray-700 text-white border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-200">Password</Label>
            <Input id="password" type="password" required className="bg-gray-700 text-white border-gray-600" />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="remember" className="text-sm text-gray-300 flex items-center space-x-2">
              <input type="checkbox" id="remember" className="rounded text-pink-500 focus:ring-pink-500" />
              <span>Remember me</span>
            </Label>
            <a href="#" className="text-sm text-pink-400 hover:underline">Forgot password?</a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">Sign In</Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-600"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-blue-900 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" className="flex-1 mr-2 bg-gray-700 text-white hover:bg-gray-600">
              <FaGoogle className="mr-2" /> Google
            </Button>
            <Button variant="outline" className="flex-1 mr-2 bg-gray-700 text-white hover:bg-gray-600">
              <FaGithub className="mr-2" /> GitHub
            </Button>
            <Button variant="outline" className="flex-1 bg-gray-700 text-white hover:bg-gray-600">
              <FaLinkedin className="mr-2" /> LinkedIn
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
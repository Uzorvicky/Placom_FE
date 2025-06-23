"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Chrome, Facebook } from "lucide-react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeToGuidelines, setAgreeToGuidelines] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted", { email, password, confirmPassword, agreeToGuidelines })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left side - Sign up form */}
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-md mx-auto lg:mx-0">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-600 mb-2">Forgot your password?</h1>
              <p className="text-xl text-gray-800">We’ll send you a mail to help you recover your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 text-base border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="guidelines"
                  checked={agreeToGuidelines}
                  onCheckedChange={(checked) => setAgreeToGuidelines(checked as boolean)}
                  className="border-green-500 data-[state=checked]:bg-green-500"
                />
                <label htmlFor="guidelines" className="text-sm text-gray-600">
                  I agree to adhere to{" "}
                  <span className="text-teal-600 underline cursor-pointer">Farmsagora's guidelines</span>.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-base font-medium rounded-md"
              >
                Recover account
              </Button>
            </form>

            {/* <p className="text-center text-gray-600 mt-6">
              Already have an account? <span className="text-teal-600 cursor-pointer hover:underline">Log in</span>
            </p> */}
          </div>

          {/* Right side - Image and fact */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/farmer-vegetables.jpg"
              alt="Smiling farmer holding fresh vegetables"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-8">
              <div className="bg-black bg-opacity-50 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 italic">Did you know?</h3>
                <p className="text-lg leading-relaxed mb-6 italic">
                  Farmers will have to grow 70 percent more food than what is currently produced to feed the world's
                  growing population by 2050.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-6"
                >
                  See more facts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

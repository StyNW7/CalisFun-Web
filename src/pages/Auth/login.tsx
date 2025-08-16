"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Shield, Lock, User } from "lucide-react"

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
        <div className="w-full max-w-md">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-[#3D7BF7] rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-[#06D6A0] rounded-full opacity-10 animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#FFB703] rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#E63946] rounded-full opacity-10 animate-bounce"></div>
          </div>

          <Card className="relative backdrop-blur-sm bg-white/90 shadow-2xl border-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#3D7BF7] to-[#2563EB] rounded-full flex items-center justify-center mb-4 animate-in zoom-in-0 duration-500 delay-200">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 animate-in fade-in-0 duration-500 delay-300">
                Admin Login
              </CardTitle>
              <CardDescription className="text-gray-600 animate-in fade-in-0 duration-500 delay-400">
                Masuk ke panel admin CalisFun untuk mengelola platform pembelajaran
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 animate-in slide-in-from-left-2 duration-500 delay-500">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                    <User className="w-4 h-4 mr-2 text-[#3D7BF7]" />
                    Email Admin
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@calisfun.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-2 border-gray-200 focus:border-[#3D7BF7] focus:ring-[#3D7BF7] transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2 animate-in slide-in-from-right-2 duration-500 delay-600">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-[#3D7BF7]" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan password admin"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12 border-2 border-gray-200 focus:border-[#3D7BF7] focus:ring-[#3D7BF7] transition-all duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#3D7BF7] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-[#3D7BF7] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] animate-in slide-in-from-bottom-2 delay-700"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Memproses...
                    </div>
                  ) : (
                    "Masuk ke Admin Panel"
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center animate-in fade-in-0 duration-500 delay-800">
                <a className="text-sm text-gray-600" href="/">
                  Kembali ke{" "}
                  <a href="/" className="text-[#3D7BF7] hover:text-[#2563EB] font-medium transition-colors">
                    Halaman Utama
                  </a>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 text-center animate-in fade-in-0 duration-500 delay-1000">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <Lock className="w-3 h-3 mr-1" />
              Koneksi aman dengan enkripsi SSL
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

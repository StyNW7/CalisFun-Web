"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen, PenTool, Calculator } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export default function Navigation() {

  const {user} = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <img className="w-12 h-12 text-white" src="/Images/logo.png"></img>
            </div>
            <span className="text-2xl font-bold text-[#3D7BF7]">CalisFun</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#3D7BF7] transition-colors">
              Beranda
            </a>
            <a href="/about" className="text-gray-700 hover:text-[#3D7BF7] transition-colors">
              Tentang
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#3D7BF7] transition-colors flex items-center">
                Fitur
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="/baca"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#06D6A0] hover:text-white transition-colors"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Baca
                </a>
                <a
                  href="/tulis"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#FFB703] hover:text-white transition-colors"
                >
                  <PenTool className="w-4 h-4 mr-2" />
                  Tulis
                </a>
                <a
                  href="/hitung"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#E63946] hover:text-white transition-colors"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Hitung
                </a>
              </div>
            </div>
            <a href="/contact" className="text-gray-700 hover:text-[#3D7BF7] transition-colors">
              Kontak
            </a>
            <a href="/download">
              <Button className="bg-[#3D7BF7] hover:bg-[#2563EB] text-white">Unduh Aplikasi</Button>
            </a>
            {user && 
              <a href="/admin/overview">
                <Button className="w-full border-2 bg-white border-[#3D7BF7] text-[#3D7BF7] hover:bg-[#3D7BF7] hover:text-white transition-colors duration-300">
                  Admin Dashboard
                </Button>
              </a>
            }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#3D7BF7] transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-[#3D7BF7] transition-colors">
                Beranda
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-[#3D7BF7] transition-colors">
                Tentang
              </a>
              <a href="/baca" className="block px-3 py-2 text-gray-700 hover:text-[#06D6A0] transition-colors">
                Baca
              </a>
              <a href="/tulis" className="block px-3 py-2 text-gray-700 hover:text-[#FFB703] transition-colors">
                Tulis
              </a>
              <a href="/hitung" className="block px-3 py-2 text-gray-700 hover:text-[#E63946] transition-colors">
                Hitung
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#3D7BF7] transition-colors">
                Kontak
              </a>
              <div className="px-3 py-2">
                <a href="/download">
                  <Button className="w-full bg-[#3D7BF7] hover:bg-[#2563EB] text-white">Unduh Aplikasi</Button>
                </a>
              </div>
              {user && 
                <div className="px-3 py-2">
                  <a href="/admin/overview">
                    <Button className="w-full border-2 bg-white border-[#3D7BF7] text-[#3D7BF7] hover:bg-[#3D7BF7] hover:text-white transition-colors duration-300">
                      Admin Dashboard
                    </Button>
                  </a>
                </div>
              }
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Save, BookOpen, PenTool, Hash, Type, Sparkles, LetterText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import { useAuth } from "@/context/AuthContext"

interface CreateQuestionFormData {
  type: "" | "reading" | "writing"
  category: "" | "letter" | "word" | "number"
  question: string
}

export default function CreateQuestionPage() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
  const navigate = useNavigate()
  const { token } = useAuth()

  const [formData, setFormData] = useState<CreateQuestionFormData>({
    type: "", // "reading" or "writing"
    category: "", // "letter", "word", "number"
    question: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "letter":
        return <LetterText className="h-5 w-5" />
      case "word":
        return <Type className="h-5 w-5" />
      case "number":
        return <Hash className="h-5 w-5" />
      default:
        return <Type className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "letter":
        return "from-[#06D6A0] to-[#06D6A0]/80"
      case "word":
        return "from-[#FFB703] to-[#FFB703]/80"
      case "number":
        return "from-[#E63946] to-[#E63946]/80"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "letter":
        return "bg-[#06D6A0]/10 border-[#06D6A0]/20 hover:bg-[#06D6A0]/20"
      case "word":
        return "bg-[#FFB703]/10 border-[#FFB703]/20 hover:bg-[#FFB703]/20"
      case "number":
        return "bg-[#E63946]/10 border-[#E63946]/20 hover:bg-[#E63946]/20"
      default:
        return "bg-gray-50 border-gray-200 hover:bg-gray-100"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "reading":
        return "from-[#06D6A0] to-[#06D6A0]/80"
      case "writing":
        return "from-[#FFB703] to-[#FFB703]/80"
      default:
        return "from-[#3D7BF7] to-[#3D7BF7]/80"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.type || !formData.category || !formData.question.trim()) {
      toast.error("Mohon lengkapi semua field yang diperlukan")
      return
    }

    if (!token) {
      toast.error("Anda harus login untuk membuat soal")
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare API endpoint based on question type
      const endpoint = formData.type === "reading" 
        ? `${API_BASE_URL || 'http://localhost:3000/api'}/reading/create`
        : `${API_BASE_URL || 'http://localhost:3000/api'}/writing/create`

      // Prepare request data
      const requestData = {
        word: formData.question.trim(),
        category: formData.category
      }

      // Make API call
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestData)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      toast.success("Soal berhasil dibuat!")
      console.log("Question created successfully:", result)
      
      // Navigate back to manage questions page
      navigate("/admin/manage-question")
    } catch (error: any) {
      console.error("Error creating question:", error)
      toast.error(error.message || "Gagal membuat soal. Silakan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.type && formData.category && formData.question.trim()

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-in fade-in-50 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <a href="/admin/manage-question">
          <Button variant="outline" size="sm" className="hover:bg-gray-50 transition-all duration-200 bg-transparent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>
        </a>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-[#3D7BF7] to-[#06D6A0] bg-clip-text text-transparent">
            Buat Soal Baru
          </h1>
          <p className="text-gray-600 font-medium">Tambahkan soal baru untuk pembelajaran Baca dan Tulis</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Question Type Selection */}
        <Card className="border-2 border-gray-200 hover:border-[#3D7BF7]/30 transition-all duration-200 hover:shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Sparkles className="h-5 w-5 text-[#3D7BF7]" />
              Tipe Soal
            </CardTitle>
            <CardDescription>Pilih jenis pembelajaran untuk soal ini</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.type}
              onValueChange={(value: "reading" | "writing") => setFormData({ ...formData, type: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="reading" id="reading" className="text-[#06D6A0]" />
                <label
                  htmlFor="reading"
                  className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    formData.type === "reading"
                      ? "border-[#06D6A0] bg-[#06D6A0]/10 shadow-md"
                      : "border-gray-200 hover:border-[#06D6A0]/50 hover:bg-[#06D6A0]/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${formData.type === "reading" ? "bg-[#06D6A0]/20" : "bg-gray-100"}`}>
                      <BookOpen
                        className={`h-5 w-5 ${formData.type === "reading" ? "text-[#06D6A0]" : "text-gray-600"}`}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Soal Baca</p>
                      <p className="text-sm text-gray-600">Pembelajaran membaca dan pengenalan</p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="writing" id="writing" className="text-[#FFB703]" />
                <label
                  htmlFor="writing"
                  className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    formData.type === "writing"
                      ? "border-[#FFB703] bg-[#FFB703]/10 shadow-md"
                      : "border-gray-200 hover:border-[#FFB703]/50 hover:bg-[#FFB703]/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${formData.type === "writing" ? "bg-[#FFB703]/20" : "bg-gray-100"}`}>
                      <PenTool
                        className={`h-5 w-5 ${formData.type === "writing" ? "text-[#FFB703]" : "text-gray-600"}`}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Soal Tulis</p>
                      <p className="text-sm text-gray-600">Pembelajaran menulis dan latihan</p>
                    </div>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Category Selection */}
        <Card className="border-2 border-gray-200 hover:border-[#3D7BF7]/30 transition-all duration-200 hover:shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Hash className="h-5 w-5 text-[#3D7BF7]" />
              Kategori Soal
            </CardTitle>
            <CardDescription>Pilih kategori pembelajaran yang sesuai</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["letter", "word", "number"].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: category as "letter" | "word" | "number" })}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                    formData.category === category
                      ? getCategoryBg(category) + " shadow-lg scale-105"
                      : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${getCategoryColor(category)} text-white shadow-lg`}
                    >
                      {getCategoryIcon(category)}
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">
                        {category === "letter" ? "Huruf" : category === "word" ? "Kata" : "Angka"}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {category === "letter" ? "A, B, C, ..." : category === "word" ? "Kata-kata" : "1, 2, 3, ..."}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Level and Question Input */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question Input */}
          <Card className="lg:col-span-2 border-2 border-gray-200 hover:border-[#3D7BF7]/30 transition-all duration-200 hover:shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Konten Soal</CardTitle>
              <CardDescription>
                Masukkan soal sesuai kategori yang dipilih
                {formData.category && (
                  <span className="ml-2">
                    <Badge
                      className={`${getCategoryColor(formData.category).replace("from-", "bg-").replace("to-[#06D6A0]/80", "").replace("to-[#FFB703]/80", "").replace("to-[#E63946]/80", "")} text-white border-0`}
                    >
                      {formData.category === "letter" ? "Huruf" : formData.category === "word" ? "Kata" : "Angka"}
                    </Badge>
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Label htmlFor="question" className="text-sm font-semibold text-gray-700">
                  Soal <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="question"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder={
                    formData.category === "letter"
                      ? "Contoh: A, B, C"
                      : formData.category === "word"
                        ? "Contoh: Belajar, Membaca"
                        : formData.category === "number"
                          ? "Contoh: 123, 456"
                          : "Masukkan konten soal..."
                  }
                  className="min-h-24 font-mono text-lg border-2 border-gray-200 focus:border-[#3D7BF7] focus:ring-[#3D7BF7]/20 resize-none"
                />
                <p className="text-xs text-gray-500">
                  {formData.category === "letter" && "Masukkan huruf tunggal atau kombinasi huruf"}
                  {formData.category === "word" && "Masukkan kata atau frasa yang akan dipelajari"}
                  {formData.category === "number" && "Masukkan angka atau kombinasi angka"}
                  {!formData.category && "Pilih kategori terlebih dahulu untuk melihat panduan"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        {isFormValid && (
          <Card className="border-2 border-[#3D7BF7]/20 bg-gradient-to-br from-[#3D7BF7]/5 to-transparent animate-in slide-in-from-bottom-4 duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg text-[#3D7BF7]">
                <Sparkles className="h-5 w-5" />
                Preview Soal
              </CardTitle>
              <CardDescription>Pratinjau soal yang akan dibuat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg border border-[#3D7BF7]/20">
                <Badge className={`bg-gradient-to-r ${getTypeColor(formData.type)} text-white border-0 font-medium`}>
                  {formData.type === "reading" ? "Baca" : "Tulis"}
                </Badge>
                <Badge
                  className={`${getCategoryColor(formData.category).replace("from-", "bg-").replace("to-[#06D6A0]/80", "").replace("to-[#FFB703]/80", "").replace("to-[#E63946]/80", "")} text-white border-0 font-medium`}
                >
                  <div className="flex items-center gap-1.5">
                    {getCategoryIcon(formData.category)}
                    {formData.category === "letter" ? "Huruf" : formData.category === "word" ? "Kata" : "Angka"}
                  </div>
                </Badge>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-lg font-semibold text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                    {formData.question}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
          <a href="/admin/manage-question">
            <Button variant="outline" className="hover:bg-gray-50 transition-all duration-200 bg-transparent">
              Batal
            </Button>
          </a>
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="bg-gradient-to-r from-[#3D7BF7] to-[#06D6A0] hover:from-[#3D7BF7]/90 hover:to-[#06D6A0]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Menyimpan...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Buat Soal
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
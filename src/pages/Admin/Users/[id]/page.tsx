/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Clock,
  Trophy,
  Star,
  BookOpen,
  PenTool,
  Calculator,
  Target,
  Award,
  Users,
  BarChart3,
  Edit,
  MessageSquare,
  Download,
  Share,
  Flame,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useParams } from "react-router"

// Mock user data - in real app, this would come from API
const getUserData = (id: string) => {
  const users = [
    {
      id: 1,
      name: "Andi Pratama",
      email: "andi.pratama@email.com",
      phone: "+62 812-3456-7890",
      avatar: "/placeholder.svg?height=120&width=120",
      role: "children",
      level: 15,
      xp: 2450,
      totalXpNeeded: 3000,
      readLevel: 12,
      writeLevel: 8,
      countLevel: 18,
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2 jam yang lalu",
      parent: "Budi Pratama",
      parentEmail: "budi.pratama@email.com",
      parentPhone: "+62 811-2345-6789",
      streakDays: 7,
      totalLessonsCompleted: 145,
      averageScore: 87,
      favoriteSubject: "Hitung",
      achievements: [
        {
          id: 1,
          name: "Pembaca Hebat",
          description: "Menyelesaikan 50 latihan baca",
          icon: BookOpen,
          color: "#06D6A0",
        },
        { id: 2, name: "Penulis Muda", description: "Menyelesaikan 25 latihan tulis", icon: PenTool, color: "#FFB703" },
        {
          id: 3,
          name: "Ahli Matematika",
          description: "Menyelesaikan 75 latihan hitung",
          icon: Calculator,
          color: "#E63946",
        },
        { id: 4, name: "Konsisten", description: "Belajar 7 hari berturut-turut", icon: Flame, color: "#FF6B35" },
      ],
      learningProgress: {
        baca: {
          currentLevel: 12,
          totalLevels: 50,
          completedLessons: 48,
          totalLessons: 60,
          difficulty: {
            easy: { completed: 20, total: 20, percentage: 100 },
            medium: { completed: 18, total: 25, percentage: 72 },
            hard: { completed: 10, total: 15, percentage: 67 },
          },
          recentScores: [85, 92, 78, 95, 88, 91, 87],
          timeSpent: "24 jam 30 menit",
        },
        tulis: {
          currentLevel: 8,
          totalLevels: 40,
          completedLessons: 32,
          totalLessons: 48,
          difficulty: {
            easy: { completed: 15, total: 16, percentage: 94 },
            medium: { completed: 12, total: 20, percentage: 60 },
            hard: { completed: 5, total: 12, percentage: 42 },
          },
          recentScores: [78, 85, 82, 90, 76, 88, 84],
          timeSpent: "18 jam 15 menit",
        },
        hitung: {
          currentLevel: 18,
          totalLevels: 60,
          completedLessons: 65,
          totalLessons: 72,
          difficulty: {
            easy: { completed: 25, total: 25, percentage: 100 },
            medium: { completed: 22, total: 25, percentage: 88 },
            hard: { completed: 18, total: 22, percentage: 82 },
          },
          recentScores: [92, 88, 95, 91, 89, 94, 90],
          timeSpent: "32 jam 45 menit",
        },
      },
      weeklyActivity: [
        { day: "Sen", lessons: 3, time: 45 },
        { day: "Sel", lessons: 2, time: 30 },
        { day: "Rab", lessons: 4, time: 60 },
        { day: "Kam", lessons: 1, time: 15 },
        { day: "Jum", lessons: 3, time: 45 },
        { day: "Sab", lessons: 5, time: 75 },
        { day: "Min", lessons: 2, time: 30 },
      ],
    },
  ]

  return users.find((user) => user.id === Number.parseInt(id)) || null
}

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const userId = id ?? "";
  const user = getUserData(userId)
  const [activeTab, setActiveTab] = useState("overview")

  if (!user) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <Users className="h-16 w-16 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-900">Pengguna Tidak Ditemukan</h2>
          <p className="text-gray-500">Pengguna dengan ID tersebut tidak ditemukan dalam sistem.</p>
          <Button asChild>
            <a href="/admin/users">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Daftar Pengguna
            </a>
          </Button>
        </div>
      </AdminLayout>
    )
  }

  const getRoleBadge = (role: string) => {
    if (role === "parent") {
      return (
        <Badge variant="outline" className="bg-[#FFB703]/10 text-[#FFB703] border-[#FFB703]/20 text-sm px-3 py-1">
          Orang Tua
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-[#06D6A0]/10 text-[#06D6A0] border-[#06D6A0]/20 text-sm px-3 py-1">
        Anak
      </Badge>
    )
  }

  const getStatusBadge = (status: string) => {
    if (status === "active") {
      return (
        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 text-sm px-3 py-1">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Aktif
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 text-sm px-3 py-1">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
        Tidak Aktif
      </Badge>
    )
  }

  const getLevelColor = (level: number) => {
    if (level >= 30) return "text-purple-600"
    if (level >= 20) return "text-blue-600"
    if (level >= 10) return "text-green-600"
    return "text-gray-600"
  }

  const getDifficultyColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500"
    if (percentage >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild className="gap-2 bg-transparent">
            <a href="/admin/manage-user">
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </a>
          </Button>
        </div>

        {/* User Profile Header */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-[#3D7BF7]/5 via-white to-[#06D6A0]/5">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-[#3D7BF7] to-[#06D6A0] text-white text-3xl font-bold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="text-center lg:text-left space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                  <div className="flex flex-col lg:flex-row items-center gap-3">
                    {getRoleBadge(user.role)}
                    {getStatusBadge(user.status)}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Informasi Kontak</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{user.email}</span>
                      </div>
                      {user.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">{user.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">
                          Bergabung: {new Date(user.joinDate).toLocaleDateString("id-ID")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">Terakhir aktif: {user.lastActive}</span>
                      </div>
                    </div>
                  </div>

                  {user.role === "children" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Informasi Orang Tua</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">{user.parent}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">{user.parentEmail}</span>
                        </div>
                        {user.parentPhone && (
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-600">{user.parentPhone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button className="gap-2 bg-[#3D7BF7] hover:bg-[#3D7BF7]/90">
                    <Edit className="h-4 w-4" />
                    Edit Pengguna
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <MessageSquare className="h-4 w-4" />
                    Kirim Pesan
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Export Data
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Share className="h-4 w-4" />
                    Bagikan
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {user.role === "children" && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Level Saat Ini</p>
                      <p className={`text-3xl font-bold ${getLevelColor(user.level)}`}>{user.level}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-gray-500">
                          {user.xp} / {user.totalXpNeeded} XP
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#3D7BF7]/10 to-[#06D6A0]/10">
                      <Trophy className={`h-6 w-6 ${getLevelColor(user.level)}`} />
                    </div>
                  </div>
                  <Progress value={(user.xp / user.totalXpNeeded) * 100} className="mt-4" />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Streak Hari</p>
                      <p className="text-3xl font-bold text-orange-600">{user.streakDays}</p>
                      <p className="text-sm text-gray-500">hari berturut-turut</p>
                    </div>
                    <div className="p-3 rounded-xl bg-orange-100">
                      <Flame className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Total Pelajaran</p>
                      <p className="text-3xl font-bold text-green-600">{user.totalLessonsCompleted}</p>
                      <p className="text-sm text-gray-500">pelajaran selesai</p>
                    </div>
                    <div className="p-3 rounded-xl bg-green-100">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Rata-rata Skor</p>
                      <p className="text-3xl font-bold text-purple-600">{user.averageScore}%</p>
                      <p className="text-sm text-gray-500">dari semua latihan</p>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-100">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#3D7BF7]" />
                  Pencapaian
                </CardTitle>
                <CardDescription>Prestasi yang telah diraih dalam pembelajaran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {user.achievements.map((achievement) => {
                    const Icon = achievement.icon
                    return (
                      <div
                        key={achievement.id}
                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="p-3 rounded-lg" style={{ backgroundColor: `${achievement.color}20` }}>
                          <Icon className="h-5 w-5" style={{ color: achievement.color }} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{achievement.name}</p>
                          <p className="text-xs text-gray-500">{achievement.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Learning Progress */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="baca" className="text-[#06D6A0]">
                  Baca
                </TabsTrigger>
                <TabsTrigger value="tulis" className="text-[#FFB703]">
                  Tulis
                </TabsTrigger>
                <TabsTrigger value="hitung" className="text-[#E63946]">
                  Hitung
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Learning Progress Summary */}
                  <Card className="lg:col-span-2 border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle>Ringkasan Progress Pembelajaran</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {Object.entries(user.learningProgress).map(([subject, progress]) => {
                        const colors = {
                          baca: "#06D6A0",
                          tulis: "#FFB703",
                          hitung: "#E63946",
                        }
                        const icons = {
                          baca: BookOpen,
                          tulis: PenTool,
                          hitung: Calculator,
                        }
                        const Icon = icons[subject as keyof typeof icons]
                        const color = colors[subject as keyof typeof colors]

                        return (
                          <div key={subject} className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Icon className="h-5 w-5" style={{ color }} />
                                <span className="font-semibold capitalize">{subject}</span>
                              </div>
                              <span className="text-sm text-gray-500">
                                Level {progress.currentLevel} / {progress.totalLevels}
                              </span>
                            </div>
                            <Progress value={(progress.currentLevel / progress.totalLevels) * 100} className="h-2" />
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>
                                {progress.completedLessons} / {progress.totalLessons} pelajaran
                              </span>
                              <span>{progress.timeSpent}</span>
                            </div>
                          </div>
                        )
                      })}
                    </CardContent>
                  </Card>

                  {/* Weekly Activity */}
                  <Card className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Aktivitas Mingguan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {user.weeklyActivity.map((day) => (
                          <div key={day.day} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">{day.day}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">{day.lessons} pelajaran</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-[#3D7BF7] h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${(day.time / 75) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-400">{day.time}m</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Individual Subject Tabs */}
              {Object.entries(user.learningProgress).map(([subject, progress]) => {
                const colors = {
                  baca: "#06D6A0",
                  tulis: "#FFB703",
                  hitung: "#E63946",
                }
                const icons = {
                  baca: BookOpen,
                  tulis: PenTool,
                  hitung: Calculator,
                }
                const Icon = icons[subject as keyof typeof icons]
                const color = colors[subject as keyof typeof colors]

                return (
                  <TabsContent key={subject} value={subject} className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Subject Progress Detail */}
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 capitalize">
                            <Icon className="h-5 w-5" style={{ color }} />
                            Progress {subject}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="text-center space-y-2">
                            <div className="text-4xl font-bold" style={{ color }}>
                              Level {progress.currentLevel}
                            </div>
                            <p className="text-gray-500">dari {progress.totalLevels} level</p>
                            <Progress value={(progress.currentLevel / progress.totalLevels) * 100} className="h-3" />
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="space-y-1">
                              <p className="text-2xl font-bold text-gray-900">{progress.completedLessons}</p>
                              <p className="text-sm text-gray-500">Pelajaran Selesai</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-2xl font-bold text-gray-900">{progress.totalLessons}</p>
                              <p className="text-sm text-gray-500">Total Pelajaran</p>
                            </div>
                          </div>

                          <div className="text-center">
                            <p className="text-lg font-semibold text-gray-900">{progress.timeSpent}</p>
                            <p className="text-sm text-gray-500">Total waktu belajar</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Difficulty Breakdown */}
                      <Card className="border-0 shadow-sm">
                        <CardHeader>
                          <CardTitle>Tingkat Kesulitan</CardTitle>
                          <CardDescription>Progress berdasarkan tingkat kesulitan soal</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {Object.entries(progress.difficulty).map(([level, data]) => (
                            <div key={level} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium capitalize">
                                  {level === "easy" ? "Mudah" : level === "medium" ? "Sedang" : "Sulit"}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {data.completed} / {data.total}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Progress value={data.percentage} className="flex-1 h-2" />
                                <span className="text-sm font-medium w-12">{data.percentage}%</span>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>

                    {/* Recent Scores */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader>
                        <CardTitle>Skor Terbaru</CardTitle>
                        <CardDescription>7 skor terakhir dalam pembelajaran {subject}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-end justify-between gap-2 h-32">
                          {progress.recentScores.map((score, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                              <div
                                className="w-8 rounded-t transition-all duration-300 hover:opacity-80"
                                style={{
                                  height: `${(score / 100) * 80}px`,
                                  backgroundColor: color,
                                }}
                              ></div>
                              <span className="text-xs text-gray-500">{score}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
            </Tabs>
          </>
        )}
      </div>
    </AdminLayout>
  )
}

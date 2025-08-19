/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  BookOpen,
  PenTool,
  Calculator,
  Plus,
  Award,
  PieChartIcon as PieIcon,
  Book,
} from "lucide-react"
import {
  PieChart as RechartsPieChart,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Pie,
} from "recharts"
import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { toast } from "sonner"

interface DashboardStats {
  totalUsers: number
  totalReadingQuestions: number
  totalWritingQuestions: number
  totalCountingQuestions: number
  userGrowth: { month: string; users: number; newUsers: number }[]
  questionsDistribution: { name: string; value: number; color: string }[]
}

const quickActions = [
  {
    title: "Tambah Soal Baru",
    description: "Buat soal pembelajaran baru",
    icon: Plus,
    href: "/admin/questions/create",
    color: "bg-[#3D7BF7]",
  },
  {
    title: "Kelola Pengguna",
    description: "Manajemen akun pengguna",
    icon: Users,
    href: "/admin/manage-user",
    color: "bg-[#FFB703]",
  },
  {
    title: "Kelola Soal",
    description: "Manajemen soal pembelajaran",
    icon: Book,
    href: "/admin/manage-question",
    color: "bg-[#06D6A0]",
  }
]

export default function AdminDashboard() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
  const { token } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalReadingQuestions: 0,
    totalWritingQuestions: 0,
    totalCountingQuestions: 0,
    userGrowth: [],
    questionsDistribution: [
      { name: "Baca", value: 0, color: "#06D6A0" },
      { name: "Tulis", value: 0, color: "#FFB703" },
      { name: "Hitung", value: 0, color: "#E63946" },
    ]
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [token])

  const fetchDashboardData = async () => {
    if (!token) return

    try {
      setLoading(true)
      
      // Fetch all data in parallel
      const [usersRes, readingRes, writingRes, statsRes] = await Promise.all([
        fetch(`${API_BASE_URL || 'http://localhost:3000/api'}/users/all`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL || 'http://localhost:3000/api'}/reading/all`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL || 'http://localhost:3000/api'}/writing/all`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_BASE_URL || 'http://localhost:3000/api'}/questions/stats`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ])

      if (!usersRes.ok || !readingRes.ok || !writingRes.ok || !statsRes.ok) {
        throw new Error('Failed to fetch dashboard data')
      }

      const [users, readingQuestions, writingQuestions] = await Promise.all([
        usersRes.json(),
        readingRes.json(),
        writingRes.json(),
        statsRes.json()
      ])

      // Calculate totals
      const totalUsers = users.length
      const totalReadingQuestions = readingQuestions.length
      const totalWritingQuestions = writingQuestions.length
      
      // For counting questions, we'll use a placeholder since your API doesn't have it yet
      const totalCountingQuestions = 0 // You can replace this when you have counting questions API

      // Prepare questions distribution
      const questionsDistribution = [
        { name: "Baca", value: totalReadingQuestions, color: "#06D6A0" },
        { name: "Tulis", value: totalWritingQuestions, color: "#FFB703" },
        { name: "Hitung", value: totalCountingQuestions, color: "#E63946" },
      ]

      // Generate user growth data (last 6 months)
      const userGrowth = generateUserGrowthData(users)

      setStats({
        totalUsers,
        totalReadingQuestions,
        totalWritingQuestions,
        totalCountingQuestions,
        userGrowth,
        questionsDistribution
      })

    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      toast.error("Gagal memuat data dashboard")
    } finally {
      setLoading(false)
    }
  }

  // Helper function to generate user growth data from users
  const generateUserGrowthData = (users: any[]) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentMonth = new Date().getMonth()
    const last6Months = months.slice(currentMonth - 5, currentMonth + 1)
    
    // Group users by month based on join date
    const usersByMonth: { [key: string]: any[] } = {}
    
    users.forEach(user => {
      if (user.joinDate) {
        const joinDate = new Date(user.joinDate)
        const monthKey = `${joinDate.getFullYear()}-${joinDate.getMonth()}`
        
        if (!usersByMonth[monthKey]) {
          usersByMonth[monthKey] = []
        }
        usersByMonth[monthKey].push(user)
      }
    })

    // Generate growth data for last 6 months
    const growthData = last6Months.map((month, index) => {
      const monthIndex = (currentMonth - 5 + index + 12) % 12
      const year = new Date().getFullYear() - (monthIndex > currentMonth ? 1 : 0)
      const monthKey = `${year}-${monthIndex}`
      
      const monthlyUsers = usersByMonth[monthKey] || []
      const cumulativeUsers = Object.keys(usersByMonth)
        .filter(key => {
          const [keyYear, keyMonth] = key.split('-').map(Number)
          return (keyYear < year) || (keyYear === year && keyMonth <= monthIndex)
        })
        .reduce((total, key) => total + (usersByMonth[key]?.length || 0), 0)

      return {
        month,
        users: cumulativeUsers,
        newUsers: monthlyUsers.length
      }
    })

    return growthData
  }

  const dashboardStats = [
    {
      title: "Total Pengguna",
      value: stats.totalUsers.toLocaleString(),
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-[#3D7BF7]",
      bgColor: "bg-[#3D7BF7]/10",
    },
    {
      title: "Soal Baca",
      value: stats.totalReadingQuestions.toLocaleString(),
      change: "+8.2%",
      trend: "up",
      icon: BookOpen,
      color: "text-[#06D6A0]",
      bgColor: "bg-[#06D6A0]/10",
    },
    {
      title: "Soal Tulis",
      value: stats.totalWritingQuestions.toLocaleString(),
      change: "+15.3%",
      trend: "up",
      icon: PenTool,
      color: "text-[#FFB703]",
      bgColor: "bg-[#FFB703]/10",
    },
    {
      title: "Soal Hitung",
      value: stats.totalCountingQuestions.toLocaleString(),
      change: "-2.1%",
      trend: "down",
      icon: Calculator,
      color: "text-[#E63946]",
      bgColor: "bg-[#E63946]/10",
    },
  ]

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[#3D7BF7] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat data dashboard...</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon

            return (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Questions Distribution Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieIcon className="h-5 w-5 text-[#3D7BF7]" />
                Distribusi Soal
              </CardTitle>
              <CardDescription>Pembagian soal berdasarkan kategori pembelajaran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={stats.questionsDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      // label={({ name, percent }) => `${name}: ${(percent || 1 * 100).toFixed(0)}%`}
                    >
                      {stats.questionsDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value} soal`, 'Jumlah']}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {stats.questionsDistribution.map((item) => (
                  <div key={item.name} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{item.value.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#3D7BF7]" />
                  Aksi Cepat
                </CardTitle>
                <CardDescription>Akses cepat ke fitur utama</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon

                    return (
                      <Button
                        key={action.title}
                        variant="outline"
                        className="w-full justify-start h-auto p-4 hover:shadow-md transition-shadow bg-transparent"
                        asChild
                      >
                        <a href={action.href}>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${action.color}`}>
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-left">
                              <p className="font-medium text-sm">{action.title}</p>
                              <p className="text-xs text-gray-500">{action.description}</p>
                            </div>
                          </div>
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </AdminLayout>
  )
}
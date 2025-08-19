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
  LineChart,
  Book,
} from "lucide-react"
import {
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
} from "recharts"

// Mock data for demonstration
const stats = [
  {
    title: "Total Pengguna",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-[#3D7BF7]",
    bgColor: "bg-[#3D7BF7]/10",
  },
  {
    title: "Soal Baca",
    value: "2,456",
    change: "+8.2%",
    trend: "up",
    icon: BookOpen,
    color: "text-[#06D6A0]",
    bgColor: "bg-[#06D6A0]/10",
  },
  {
    title: "Soal Tulis",
    value: "1,892",
    change: "+15.3%",
    trend: "up",
    icon: PenTool,
    color: "text-[#FFB703]",
    bgColor: "bg-[#FFB703]/10",
  },
  {
    title: "Soal Hitung",
    value: "3,124",
    change: "-2.1%",
    trend: "down",
    icon: Calculator,
    color: "text-[#E63946]",
    bgColor: "bg-[#E63946]/10",
  },
]

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

const userGrowthData = [
  { month: "Jan", users: 8400, newUsers: 1200 },
  { month: "Feb", users: 9200, newUsers: 800 },
  { month: "Mar", users: 10100, newUsers: 900 },
  { month: "Apr", users: 11300, newUsers: 1200 },
  { month: "May", users: 12000, newUsers: 700 },
  { month: "Jun", users: 12847, newUsers: 847 },
]

const questionsDistribution = [
  { name: "Baca", value: 2456, color: "#06D6A0" },
  { name: "Tulis", value: 1892, color: "#FFB703" },
  { name: "Hitung", value: 3124, color: "#E63946" },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
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
          {/* User Growth Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-[#3D7BF7]" />
                Pertumbuhan Pengguna
              </CardTitle>
              <CardDescription>Tren pertumbuhan pengguna dalam 6 bulan terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#3D7BF7"
                      strokeWidth={3}
                      dot={{ fill: "#3D7BF7", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "#3D7BF7", strokeWidth: 2 }}
                      name="Total Pengguna"
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

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
                      data={questionsDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {questionsDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {questionsDistribution.map((item) => (
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
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

          {/* Quick Actions */}
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

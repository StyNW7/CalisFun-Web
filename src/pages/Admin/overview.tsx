"use client"

import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  BookOpen,
  PenTool,
  Calculator,
  TrendingUp,
  TrendingDown,
  Activity,
  Download,
  Plus,
  Eye,
  Clock,
  Award,
  BarChart3,
  PieChartIcon as PieIcon,
  LineChart,
} from "lucide-react"
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
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

const recentActivities = [
  {
    id: 1,
    user: "Andi Pratama",
    action: "menyelesaikan latihan Baca tingkat 3",
    time: "2 menit yang lalu",
    type: "baca",
  },
  {
    id: 2,
    user: "Sari Dewi",
    action: "menambahkan soal Hitung baru",
    time: "15 menit yang lalu",
    type: "hitung",
  },
  {
    id: 3,
    user: "Budi Santoso",
    action: "mengunduh laporan pembelajaran",
    time: "1 jam yang lalu",
    type: "download",
  },
  {
    id: 4,
    user: "Maya Sari",
    action: "menyelesaikan latihan Tulis tingkat 2",
    time: "2 jam yang lalu",
    type: "tulis",
  },
  {
    id: 5,
    user: "Rudi Hermawan",
    action: "login ke aplikasi",
    time: "3 jam yang lalu",
    type: "login",
  },
]

const quickActions = [
  {
    title: "Tambah Soal Baru",
    description: "Buat soal pembelajaran baru",
    icon: Plus,
    href: "/admin/questions/new",
    color: "bg-[#3D7BF7]",
  },
  {
    title: "Lihat Laporan",
    description: "Analisis pembelajaran siswa",
    icon: Eye,
    href: "/admin/reports",
    color: "bg-[#06D6A0]",
  },
  {
    title: "Kelola Pengguna",
    description: "Manajemen akun pengguna",
    icon: Users,
    href: "/admin/users",
    color: "bg-[#FFB703]",
  },
  {
    title: "Download Data",
    description: "Ekspor data pembelajaran",
    icon: Download,
    href: "/admin/downloads",
    color: "bg-[#E63946]",
  },
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

const learningActivityData = [
  { feature: "Baca", completed: 1840, inProgress: 320, total: 2456 },
  { feature: "Tulis", completed: 1456, inProgress: 280, total: 1892 },
  { feature: "Hitung", completed: 2680, inProgress: 444, total: 3124 },
]

const dailyActiveUsers = [
  { day: "Sen", users: 2400 },
  { day: "Sel", users: 2210 },
  { day: "Rab", users: 2290 },
  { day: "Kam", users: 2000 },
  { day: "Jum", users: 2181 },
  { day: "Sab", users: 2500 },
  { day: "Min", users: 2100 },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown

            return (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center gap-1">
                        <TrendIcon className={`h-4 w-4 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                        <span
                          className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500">dari bulan lalu</span>
                      </div>
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
                    <Line
                      type="monotone"
                      dataKey="newUsers"
                      stroke="#06D6A0"
                      strokeWidth={2}
                      dot={{ fill: "#06D6A0", strokeWidth: 2, r: 4 }}
                      name="Pengguna Baru"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Learning Activity Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#3D7BF7]" />
                Aktivitas Pembelajaran
              </CardTitle>
              <CardDescription>Progress pembelajaran berdasarkan fitur</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={learningActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="feature" stroke="#666" />
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
                    <Bar dataKey="completed" fill="#06D6A0" name="Selesai" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="inProgress" fill="#FFB703" name="Sedang Belajar" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Daily Active Users Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#3D7BF7]" />
                Pengguna Aktif Harian
              </CardTitle>
              <CardDescription>Aktivitas pengguna dalam 7 hari terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyActiveUsers} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Area type="monotone" dataKey="users" stroke="#3D7BF7" fill="url(#colorUsers)" strokeWidth={2} />
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3D7BF7" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3D7BF7" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#3D7BF7]" />
                  Aktivitas Terbaru
                </CardTitle>
                <CardDescription>Aktivitas pengguna dalam 24 jam terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === "baca"
                            ? "bg-[#06D6A0]/10 text-[#06D6A0]"
                            : activity.type === "tulis"
                              ? "bg-[#FFB703]/10 text-[#FFB703]"
                              : activity.type === "hitung"
                                ? "bg-[#E63946]/10 text-[#E63946]"
                                : "bg-[#3D7BF7]/10 text-[#3D7BF7]"
                        }`}
                      >
                        {activity.type === "baca" ? (
                          <BookOpen className="h-4 w-4" />
                        ) : activity.type === "tulis" ? (
                          <PenTool className="h-4 w-4" />
                        ) : activity.type === "hitung" ? (
                          <Calculator className="h-4 w-4" />
                        ) : activity.type === "download" ? (
                          <Download className="h-4 w-4" />
                        ) : (
                          <Users className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

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

            {/* System Status */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Status Sistem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Server</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">Normal</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">API</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-yellow-600">Maintenance</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

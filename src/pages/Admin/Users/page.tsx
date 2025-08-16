"use client"

import { useState, useMemo } from "react"
import AdminLayout from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  Eye,
  Search,
  Download,
  Plus,
  MoreHorizontal,
  Star,
  Trophy,
  BookOpen,
  PenTool,
  Calculator,
  UserX,
  Mail,
  X,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  SlidersHorizontal,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"

type UserRole = "children" | "parent"
type UserStatus = "active" | "inactive"
type SortField = "name" | "email" | "level" | "xp" | "joinDate"
type SortOrder = "asc" | "desc"

interface User {
  id: number
  name: string
  email: string
  avatar: string
  role: UserRole
  level: number
  xp: number
  readLevel: number
  writeLevel: number
  countLevel: number
  status: UserStatus
  joinDate: string
  lastActive: string
  parent?: string
  parentEmail?: string
  children?: string[]
}

const users: User[] = [
  {
    id: 1,
    name: "Andi Pratama",
    email: "andi.pratama@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "children",
    level: 15,
    xp: 2450,
    readLevel: 12,
    writeLevel: 8,
    countLevel: 18,
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "2 jam yang lalu",
    parent: "Budi Pratama",
    parentEmail: "budi.pratama@email.com",
  },
  {
    id: 2,
    name: "Sari Dewi",
    email: "sari.dewi@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "children",
    level: 22,
    xp: 3680,
    readLevel: 20,
    writeLevel: 25,
    countLevel: 21,
    status: "active",
    joinDate: "2023-11-08",
    lastActive: "1 hari yang lalu",
    parent: "Maya Dewi",
    parentEmail: "maya.dewi@email.com",
  },
  {
    id: 3,
    name: "Budi Pratama",
    email: "budi.pratama@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "parent",
    level: 0,
    xp: 0,
    readLevel: 0,
    writeLevel: 0,
    countLevel: 0,
    status: "active",
    joinDate: "2024-01-15",
    lastActive: "5 jam yang lalu",
    children: ["Andi Pratama"],
  },
  {
    id: 4,
    name: "Maya Sari",
    email: "maya.sari@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "children",
    level: 8,
    xp: 1240,
    readLevel: 6,
    writeLevel: 4,
    countLevel: 12,
    status: "inactive",
    joinDate: "2024-02-20",
    lastActive: "1 minggu yang lalu",
    parent: "Rudi Hermawan",
    parentEmail: "rudi.hermawan@email.com",
  },
  {
    id: 5,
    name: "Rudi Hermawan",
    email: "rudi.hermawan@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "parent",
    level: 0,
    xp: 0,
    readLevel: 0,
    writeLevel: 0,
    countLevel: 0,
    status: "active",
    joinDate: "2024-02-20",
    lastActive: "3 hari yang lalu",
    children: ["Maya Sari"],
  },
  {
    id: 6,
    name: "Lina Kartika",
    email: "lina.kartika@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "children",
    level: 35,
    xp: 5890,
    readLevel: 32,
    writeLevel: 38,
    countLevel: 35,
    status: "active",
    joinDate: "2023-09-12",
    lastActive: "30 menit yang lalu",
    parent: "Siti Kartika",
    parentEmail: "siti.kartika@email.com",
  },
  {
    id: 7,
    name: "Doni Setiawan",
    email: "doni.setiawan@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "children",
    level: 5,
    xp: 780,
    readLevel: 3,
    writeLevel: 2,
    countLevel: 8,
    status: "active",
    joinDate: "2024-03-05",
    lastActive: "4 jam yang lalu",
    parent: "Eko Setiawan",
    parentEmail: "eko.setiawan@email.com",
  },
  {
    id: 8,
    name: "Siti Kartika",
    email: "siti.kartika@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "parent",
    level: 0,
    xp: 0,
    readLevel: 0,
    writeLevel: 0,
    countLevel: 0,
    status: "active",
    joinDate: "2023-09-12",
    lastActive: "2 hari yang lalu",
    children: ["Lina Kartika"],
  },
]

export default function ManageUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<"all" | UserRole>("all")
  const [statusFilter, setStatusFilter] = useState<"all" | UserStatus>("all")
  const [levelRange, setLevelRange] = useState<[number, number]>([0, 50])
  const [sortBy, setSortBy] = useState<SortField>("name")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter((user) => {
      // Search filter
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())

      // Role filter
      const matchesRole = roleFilter === "all" || user.role === roleFilter

      // Status filter
      const matchesStatus = statusFilter === "all" || user.status === statusFilter

      // Level filter (only for children)
      const matchesLevel = user.role === "parent" || (user.level >= levelRange[0] && user.level <= levelRange[1])

      return matchesSearch && matchesRole && matchesStatus && matchesLevel
    })

    // Sort users
    return [...filtered].sort((a, b) => {
      let aValue: string | number | Date
      let bValue: string | number | Date

      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case "email":
          aValue = a.email.toLowerCase()
          bValue = b.email.toLowerCase()
          break
        case "level":
          aValue = a.level
          bValue = b.level
          break
        case "xp":
          aValue = a.xp
          bValue = b.xp
          break
        case "joinDate":
          aValue = new Date(a.joinDate)
          bValue = new Date(b.joinDate)
          break
        default:
          return 0
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
      return 0
    })
  }, [searchQuery, roleFilter, statusFilter, levelRange, sortBy, sortOrder])

  const clearFilters = () => {
    setSearchQuery("")
    setRoleFilter("all")
    setStatusFilter("all")
    setLevelRange([0, 50])
    setSortBy("name")
    setSortOrder("asc")
  }

  const handleSort = (column: SortField) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const getSortIcon = (column: SortField) => {
    if (sortBy !== column) return <ArrowUpDown className="h-4 w-4 opacity-50" />
    return sortOrder === "asc" ? (
      <ArrowUp className="h-4 w-4 text-[#3D7BF7]" />
    ) : (
      <ArrowDown className="h-4 w-4 text-[#3D7BF7]" />
    )
  }

  const getRoleBadge = (role: UserRole) => {
    if (role === "parent") {
      return (
        <Badge variant="outline" className="bg-[#FFB703]/10 text-[#FFB703] border-[#FFB703]/20">
          Orang Tua
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-[#06D6A0]/10 text-[#06D6A0] border-[#06D6A0]/20">
        Anak
      </Badge>
    )
  }

  const getStatusBadge = (status: UserStatus) => {
    if (status === "active") {
      return (
        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
          Aktif
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Search and Filters Card */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Cari nama atau email pengguna..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex items-center gap-3">
                <Select value={roleFilter} onValueChange={(value: "all" | UserRole) => setRoleFilter(value)}>
                  <SelectTrigger className="w-40 bg-gray-50/50 border-gray-200">
                    <SelectValue placeholder="Semua Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Role</SelectItem>
                    <SelectItem value="children">Anak</SelectItem>
                    <SelectItem value="parent">Orang Tua</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={(value: "all" | UserStatus) => setStatusFilter(value)}>
                  <SelectTrigger className="w-40 bg-gray-50/50 border-gray-200">
                    <SelectValue placeholder="Semua Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Status</SelectItem>
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="inactive">Tidak Aktif</SelectItem>
                  </SelectContent>
                </Select>

                {/* Advanced Filters */}
                <Popover open={showFilters} onOpenChange={setShowFilters}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="gap-2 bg-gray-50/50 border-gray-200">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filter Lanjutan
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="end">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">Filter Lanjutan</h4>
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Rentang Level</Label>
                          <div className="mt-2 px-2">
                            <Slider
                              value={levelRange}
                              onValueChange={(value) => setLevelRange(value as [number, number])}
                              max={50}
                              min={0}
                              step={1}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Level {levelRange[0]}</span>
                              <span>Level {levelRange[1]}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-gray-700">Urutkan Berdasarkan</Label>
                          <Select value={sortBy} onValueChange={(value: SortField) => setSortBy(value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="name">Nama</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="level">Level</SelectItem>
                              <SelectItem value="xp">XP</SelectItem>
                              <SelectItem value="joinDate">Tanggal Bergabung</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant={sortOrder === "asc" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSortOrder("asc")}
                            className="flex-1"
                          >
                            <ArrowUp className="h-4 w-4 mr-1" />
                            Naik
                          </Button>
                          <Button
                            variant={sortOrder === "desc" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSortOrder("desc")}
                            className="flex-1"
                          >
                            <ArrowDown className="h-4 w-4 mr-1" />
                            Turun
                          </Button>
                        </div>
                      </div>

                      <div className="pt-3 border-t">
                        <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
                          Reset Semua Filter
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchQuery ||
              roleFilter !== "all" ||
              statusFilter !== "all" ||
              levelRange[0] > 0 ||
              levelRange[1] < 50) && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Filter aktif:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Pencarian: {searchQuery}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </Badge>
                )}
                {roleFilter !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    Role: {roleFilter === "children" ? "Anak" : "Orang Tua"}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setRoleFilter("all")} />
                  </Badge>
                )}
                {statusFilter !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    Status: {statusFilter === "active" ? "Aktif" : "Tidak Aktif"}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setStatusFilter("all")} />
                  </Badge>
                )}
                {(levelRange[0] > 0 || levelRange[1] < 50) && (
                  <Badge variant="secondary" className="gap-1">
                    Level: {levelRange[0]}-{levelRange[1]}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setLevelRange([0, 50])} />
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                  Hapus Semua
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Users Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Daftar Pengguna ({filteredAndSortedUsers.length})
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Kelola dan pantau aktivitas pengguna CalisFun
                </CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2 hover:bg-gray-50 bg-transparent">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button className="gap-2 bg-[#3D7BF7] hover:bg-[#3D7BF7]/90">
                  <Plus className="h-4 w-4" />
                  Tambah Pengguna
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                    <TableHead
                      className="font-semibold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center gap-2">
                        Pengguna
                        {getSortIcon("name")}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">Role</TableHead>
                    <TableHead
                      className="font-semibold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors"
                      onClick={() => handleSort("level")}
                    >
                      <div className="flex items-center gap-2">
                        Level & XP
                        {getSortIcon("level")}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">Progress Belajar</TableHead>
                    <TableHead className="font-semibold text-gray-900">Status</TableHead>
                    <TableHead className="font-semibold text-gray-900">Terakhir Aktif</TableHead>
                    <TableHead className="font-semibold text-gray-900 text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        <div className="flex flex-col items-center gap-2">
                          <Users className="h-8 w-8 text-gray-400" />
                          <p className="text-gray-500">Tidak ada pengguna yang sesuai dengan filter</p>
                          <Button variant="outline" onClick={clearFilters} className="mt-2 bg-transparent">
                            Reset Filter
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredAndSortedUsers.map((user) => (
                      <TableRow key={user.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        <TableCell className="py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-gray-100">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback className="bg-gradient-to-br from-[#3D7BF7] to-[#06D6A0] text-white font-semibold">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-gray-900">{user.name}</p>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Mail className="h-3 w-3" />
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>
                          {user.role === "children" ? (
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Trophy className={`h-4 w-4 ${getLevelColor(user.level)}`} />
                                <span className={`font-semibold ${getLevelColor(user.level)}`}>Level {user.level}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Star className="h-3 w-3" />
                                {user.xp.toLocaleString()} XP
                              </div>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {user.role === "children" ? (
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <BookOpen className="h-3 w-3 text-[#06D6A0]" />
                                <span className="text-gray-600">Baca:</span>
                                <span className="font-semibold text-[#06D6A0]">{user.readLevel}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <PenTool className="h-3 w-3 text-[#FFB703]" />
                                <span className="text-gray-600">Tulis:</span>
                                <span className="font-semibold text-[#FFB703]">{user.writeLevel}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Calculator className="h-3 w-3 text-[#E63946]" />
                                <span className="text-gray-600">Hitung:</span>
                                <span className="font-semibold text-[#E63946]">{user.countLevel}</span>
                              </div>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">{user.lastActive}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 hover:bg-[#3D7BF7]/10 hover:text-[#3D7BF7] hover:border-[#3D7BF7]/20 bg-transparent"
                              asChild
                            >
                              <a href={`/admin/user/${user.id}`}>
                                <Eye className="h-4 w-4" />
                                Detail
                              </a>
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="gap-2">
                                  <Eye className="h-4 w-4" />
                                  Lihat Detail
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2">
                                  <Mail className="h-4 w-4" />
                                  Kirim Email
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="gap-2 text-red-600">
                                  <UserX className="h-4 w-4" />
                                  Nonaktifkan
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
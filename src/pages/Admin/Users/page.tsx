/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useMemo, useEffect } from "react"
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
  Search,
  Mail,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  SlidersHorizontal,
  X,
} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext"
import { toast } from "sonner"

type UserRole = "user" | "admin" | "parent"
type SortField = "username" | "email" | "role" | "childrenCount"
type SortOrder = "asc" | "desc"

interface User {
  _id: string
  username: string
  email: string
  role: UserRole
  phone_number?: string
  children: any[]
  countingDifficulty?: string
  __v: number
}

export default function ManageUsersPage() {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
  const { token } = useAuth()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<"all" | UserRole>("all")
  const [sortBy, setSortBy] = useState<SortField>("username")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

  useEffect(() => {
    fetchUsers()
  }, [token])

  const fetchUsers = async () => {
    if (!token) return

    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL || 'http://localhost:3000/api'}/users/all`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error("Error fetching users:", error)
      toast.error("Gagal memuat data pengguna")
    } finally {
      setLoading(false)
    }
  }

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter((user) => {
      // Search filter
      const matchesSearch =
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.phone_number && user.phone_number.includes(searchQuery))

      // Role filter
      const matchesRole = roleFilter === "all" || user.role === roleFilter

      return matchesSearch && matchesRole
    })

    // Sort users
    return [...filtered].sort((a, b) => {
      let aValue: string | number
      let bValue: string | number

      switch (sortBy) {
        case "username":
          aValue = a.username.toLowerCase()
          bValue = b.username.toLowerCase()
          break
        case "email":
          aValue = a.email.toLowerCase()
          bValue = b.email.toLowerCase()
          break
        case "role":
          aValue = a.role
          bValue = b.role
          break
        case "childrenCount":
          aValue = a.children.length
          bValue = b.children.length
          break
        default:
          return 0
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
      return 0
    })
  }, [users, searchQuery, roleFilter, sortBy, sortOrder])

  const clearFilters = () => {
    setSearchQuery("")
    setRoleFilter("all")
    setSortBy("username")
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
    switch (role) {
      case "admin":
        return (
          <Badge variant="outline" className="bg-[#E63946]/10 text-[#E63946] border-[#E63946]/20">
            Admin
          </Badge>
        )
      case "parent":
        return (
          <Badge variant="outline" className="bg-[#FFB703]/10 text-[#FFB703] border-[#FFB703]/20">
            Orang Tua
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="bg-[#06D6A0]/10 text-[#06D6A0] border-[#06D6A0]/20">
            User
          </Badge>
        )
    }
  }

  const getChildrenCountBadge = (count: number) => {
    if (count === 0) {
      return (
        <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200">
          {count} anak
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-[#3D7BF7]/10 text-[#3D7BF7] border-[#3D7BF7]/20">
        {count} anak
      </Badge>
    )
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[#3D7BF7] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat data pengguna...</p>
          </div>
        </div>
      </AdminLayout>
    )
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
                    placeholder="Cari username, email, atau nomor telepon..."
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
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="parent">Orang Tua</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>

                {/* Advanced Filters */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="gap-2 bg-gray-50/50 border-gray-200">
                      <SlidersHorizontal className="h-4 w-4" />
                      Urutkan
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-60" align="end">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">Urutkan Berdasarkan</h4>
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Urutkan Berdasarkan</Label>
                          <Select value={sortBy} onValueChange={(value: SortField) => setSortBy(value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="username">Username</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="role">Role</SelectItem>
                              <SelectItem value="childrenCount">Jumlah Anak</SelectItem>
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
            {(searchQuery || roleFilter !== "all") && (
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
                    Role: {roleFilter === "user" ? "User" : roleFilter === "parent" ? "Orang Tua" : "Admin"}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setRoleFilter("all")} />
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
                  Kelola pengguna dan akun orang tua di CalisFun
                </CardDescription>
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
                      onClick={() => handleSort("username")}
                    >
                      <div className="flex items-center gap-2">
                        Pengguna
                        {getSortIcon("username")}
                      </div>
                    </TableHead>
                    <TableHead
                      className="font-semibold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors"
                      onClick={() => handleSort("email")}
                    >
                      <div className="flex items-center gap-2">
                        Email
                        {getSortIcon("email")}
                      </div>
                    </TableHead>
                    <TableHead
                      className="font-semibold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors"
                      onClick={() => handleSort("role")}
                    >
                      <div className="flex items-center gap-2">
                        Role
                        {getSortIcon("role")}
                      </div>
                    </TableHead>
                    <TableHead
                      className="font-semibold text-gray-900 cursor-pointer hover:bg-gray-100/50 transition-colors"
                      onClick={() => handleSort("childrenCount")}
                    >
                      <div className="flex items-center gap-2">
                        Anak
                        {getSortIcon("childrenCount")}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">Telepon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
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
                      <TableRow key={user._id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        <TableCell className="py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-gray-100">
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={user.username} />
                              <AvatarFallback className="bg-gradient-to-br from-[#3D7BF7] to-[#06D6A0] text-white font-semibold">
                                {user.username
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .toUpperCase()
                                  .slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-gray-900">{user.username}</p>
                              <p className="text-sm text-gray-500">ID: {user._id.slice(-8)}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3 text-gray-400" />
                            <span className="text-gray-900">{user.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>
                          {getChildrenCountBadge(user.children.length)}
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">
                            {user.phone_number || "-"}
                          </span>
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
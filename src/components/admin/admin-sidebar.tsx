"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Gamepad2,
  BarChart3,
  User,
  Settings,
  Home,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User2,
  FileQuestion,
} from "lucide-react"
import { useLocation } from "react-router"

interface DashboardSidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isMobile: boolean
}

export default function DashboardSidebar({ isOpen, setIsOpen, isMobile }: DashboardSidebarProps) {

  const pathname = useLocation().pathname

  const navigationItems = [
    {
      title: "Beranda",
      href: "/admin/overview",
      icon: <BarChart3 className="h-5 w-5" />,
      badge: null,
    },
    {
      title: "Kelola Akun",
      href: "/admin/manage-user",
      icon: <User2 className="h-5 w-5" />,
      badge: null,
    },
    {
      title: "Kelola Pertanyaan",
      href: "/admin/manage-question",
      icon: <FileQuestion className="h-5 w-5" />,
      badge: null,
    },
    {
      title: "Papan Peringkat",
      href: "/admin/leaderboard",
      icon: <User className="h-5 w-5" />,
      badge: "New",
    },
    {
      title: "Pengaturan",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
      badge: null,
    },
  ]

  const userStats = {
    level: 15,
    points: 2450,
    rank: "Penjelajah Budaya",
  }

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isMobile ? (isOpen ? 280 : 0) : isOpen ? 320 : 80,
          x: isMobile && !isOpen ? -280 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 top-0 h-full bg-white border-r border-blue-100 shadow-xl z-50 overflow-hidden ${
          isMobile ? "lg:relative" : ""
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-blue-100 flex-shrink-0">
            <div className="flex items-center justify-between">
              <AnimatePresence mode="wait">
                {isOpen || !isMobile ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img src="/Images/logo.png" className="h-10 w-10 text-white" />
                    </div>
                    {(isOpen || isMobile) && (
                      <div>
                        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                          CalisFun
                        </h1>
                        <p className="text-xs text-blue-400">Admin Dashboard</p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto"
                  >
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              {!isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-8 w-8 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                >
                  {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              )}

              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-gray-500 hover:text-blue-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* User Profile */}
          <AnimatePresence>
            {(isOpen || isMobile) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 border-b border-blue-100 flex-shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Stanley Wijaya</h3>
                    <p className="text-sm text-gray-600">{userStats.rank}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Level</span>
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">{userStats.level}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Poin</span>
                    <span className="text-sm font-semibold text-blue-600">{userStats.points.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center">550 poin lagi ke level 16</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"}`}
                    >
                      {item.icon}
                    </div>

                    <AnimatePresence>
                      {(isOpen || isMobile) && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="flex items-center justify-between flex-1 overflow-hidden"
                        >
                          <span className="font-medium whitespace-nowrap">{item.title}</span>
                          {item.badge && (
                            <Badge
                              className={`ml-2 text-xs ${
                                item.badge === "Hot"
                                  ? "bg-orange-500 text-white"
                                  : item.badge === "New"
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-500 text-white"
                              }`}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isOpen && !isMobile && item.badge && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
                    )}
                  </a>
                </motion.div>
              )
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-blue-100 space-y-1 flex-shrink-0">

            <a
              href="/login"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
            //   onClick={}
            >
              <LogOut className="h-5 w-5 text-gray-500 group-hover:text-blue-600 flex-shrink-0" />
              <AnimatePresence>
                {(isOpen || isMobile) && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-medium whitespace-nowrap overflow-hidden"
                  >
                    Logout
                  </motion.span>
                )}
              </AnimatePresence>
            </a>

            <a
              href="/"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
            >
              <Home className="h-5 w-5 text-gray-500 group-hover:text-blue-600 flex-shrink-0" />
              <AnimatePresence>
                {(isOpen || isMobile) && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-medium whitespace-nowrap overflow-hidden"
                  >
                    Kembali ke Beranda
                  </motion.span>
                )}
              </AnimatePresence>
            </a>

          </div>

        </div>
      </motion.aside>
    </>
  )
}

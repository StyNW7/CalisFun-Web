"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Play,
  Star,
  Download,
  Smartphone,
  Tablet,
  WifiOff,
  Shield,
  CheckCircle,
  ArrowRight,
  Gamepad2,
  Bell,
  BarChart3,
  Volume2,
} from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3D7BF7] via-[#2563EB] to-[#1D4ED8] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/Images/logo.png?height=800&width=1300')] opacity-10 bg-no-repeat"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="animate-in fade-in duration-1000">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-16 h-16 bg-[#FFB703] rounded-2xl flex items-center justify-center">
                  <Download className="w-8 h-8 text-black" />
                </div>
                <span className="text-[#FFB703] font-bold text-2xl">CalisFun Mobile</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Aplikasi Pembelajaran <br />
                <span className="text-[#06D6A0]">Terdepan</span> untuk Anak Indonesia
              </h1>

              <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Nikmati pengalaman belajar Calistung yang revolusioner langsung dari smartphone Anda. Dirancang khusus
                untuk memberikan pembelajaran yang efektif, menyenangkan, dan mudah diakses.
              </p>

              {/* Download Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FFB703] mb-2">4.9★</div>
                  <div className="text-blue-200">Rating App Store</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#06D6A0] mb-2">100K+</div>
                  <div className="text-blue-200">Total Download</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#E63946] mb-2">50MB</div>
                  <div className="text-blue-200">Ukuran Aplikasi</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FFB703] mb-2">GRATIS</div>
                  <div className="text-blue-200">Tanpa Biaya</div>
                </div>
              </div>

              {/* Main Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/placeholder.apk"
                    link.download = "CalisFun-v1.2.3.apk"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="group bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-4 shadow-2xl"
                >
                  <div className="w-12 h-12 bg-[#06D6A0] rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-300">Download untuk</div>
                    <div className="text-2xl font-bold">Android</div>
                  </div>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

                <button
                  disabled
                  className="group bg-gray-600 text-gray-300 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-4 shadow-2xl cursor-not-allowed opacity-75"
                >
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-gray-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Coming Soon untuk</div>
                    <div className="text-2xl font-bold">iOS</div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#FFB703] rounded-full animate-pulse"></div>
                  </div>
                </button>
              </div>

              <p className="text-blue-200 text-lg">
                Kompatibel dengan Android 7.0+ • iOS Coming Soon • Ukuran: 50MB • Gratis selamanya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tampilan <span className="text-[#3D7BF7]">Aplikasi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interface yang dirancang khusus untuk anak-anak dengan navigasi yang intuitif dan visual yang menarik
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone Mockup 1 - Home Screen */}
            <div className="text-center">
              <div className="relative mx-auto w-64 h-80 bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl mb-6">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/Images/mockup/home.png?height=320&width=240"
                    alt="Home Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beranda Interaktif</h3>
              <p className="text-gray-600">Dashboard utama dengan akses mudah ke semua modul pembelajaran</p>
            </div>

            {/* Phone Mockup 2 - Learning Screen */}
            <div className="text-center">
              <div className="relative mx-auto w-64 h-80 bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl mb-6">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/Images/mockup/learn.png?height=320&width=240"
                    alt="Learning Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mode Pembelajaran</h3>
              <p className="text-gray-600">Interface pembelajaran yang engaging dengan feedback real-time</p>
            </div>

            {/* Phone Mockup 3 - Progress Screen */}
            <div className="text-center">
              <div className="relative mx-auto w-64 h-80 bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl mb-6">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/Images/mockup/profile.png?height=320&width=240"
                    alt="Progress Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tracking Progress</h3>
              <p className="text-gray-600">Pantau perkembangan belajar anak dengan laporan detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fitur <span className="text-[#3D7BF7]">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplikasi mobile CalisFun dilengkapi dengan fitur-fitur canggih yang dirancang khusus untuk pengalaman
              belajar optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#3D7BF7]/5 to-[#3D7BF7]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3D7BF7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <WifiOff className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mode Offline</h3>
                <p className="text-gray-600 leading-relaxed">
                  Belajar tanpa koneksi internet. Semua materi dapat diunduh dan diakses kapan saja, di mana saja.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#06D6A0]/5 to-[#06D6A0]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Reminder</h3>
                <p className="text-gray-600 leading-relaxed">
                  Notifikasi pintar yang mengingatkan waktu belajar optimal berdasarkan pola belajar anak.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#FFB703]/5 to-[#FFB703]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFB703] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics Detail</h3>
                <p className="text-gray-600 leading-relaxed">
                  Laporan pembelajaran mendalam dengan insight tentang kekuatan dan area yang perlu diperbaiki.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#E63946]/5 to-[#E63946]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#E63946] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gamifikasi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistem reward, badge, dan leaderboard yang membuat belajar terasa seperti bermain game.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#3D7BF7]/5 to-[#2563EB]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3D7BF7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Audio Interaktif</h3>
                <p className="text-gray-600 leading-relaxed">
                  Panduan suara yang jelas dan musik latar yang mendukung konsentrasi belajar anak.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#06D6A0]/5 to-[#059669]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Keamanan Anak</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lingkungan belajar yang aman tanpa iklan, konten eksternal, atau fitur yang tidak sesuai untuk anak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Spesifikasi <span className="text-[#3D7BF7]">Sistem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pastikan perangkat Anda memenuhi persyaratan minimum untuk pengalaman optimal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Android Requirements */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#06D6A0]/5 to-[#06D6A0]/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-[#06D6A0] rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Android</h3>
                    <p className="text-gray-600">Persyaratan untuk perangkat Android</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">Android 7.0 (API level 24) atau lebih tinggi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">RAM minimum 2GB (disarankan 4GB)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">Storage kosong 100MB untuk instalasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">Resolusi layar minimum 720x1280</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    <span className="text-gray-700">Koneksi internet untuk sinkronisasi</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/placeholder.apk"
                      link.download = "CalisFun-v1.2.3.apk"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                    className="w-full bg-[#06D6A0] hover:bg-[#059669] text-white py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download untuk Android</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* iOS Requirements */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#FFB703]/5 to-[#FFB703]/10 relative">
              <div className="absolute inset-0 bg-gray-900/20 rounded-lg flex items-center justify-center z-10">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#FFB703] rounded-full animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">Coming Soon untuk iOS</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 opacity-60">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-[#FFB703] rounded-2xl flex items-center justify-center">
                    <Tablet className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">iOS</h3>
                    <p className="text-gray-600">Persyaratan untuk perangkat Apple</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                    <span className="text-gray-700">iOS 12.0 atau lebih tinggi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                    <span className="text-gray-700">iPhone 6s/iPad Air 2 atau lebih baru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                    <span className="text-gray-700">Storage kosong 100MB untuk instalasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                    <span className="text-gray-700">Kompatibel dengan iPhone dan iPad</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFB703]" />
                    <span className="text-gray-700">Koneksi internet untuk sinkronisasi</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    disabled
                    className="w-full bg-gray-400 text-gray-600 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2 cursor-not-allowed"
                  >
                    <div className="w-3 h-3 bg-[#FFB703] rounded-full animate-pulse"></div>
                    <span>Coming Soon untuk iOS</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Panduan <span className="text-[#3D7BF7]">Instalasi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ikuti langkah-langkah mudah berikut untuk menginstal aplikasi CalisFun di perangkat Anda
            </p>
          </div>

          <div className="space-y-12">
            {/* Android Installation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-[#06D6A0] rounded-lg flex items-center justify-center mr-3">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                Instalasi untuk Android
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Download APK</h4>
                    <p className="text-gray-600 text-sm">Klik tombol download untuk mengunduh file APK CalisFun</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Izinkan Instalasi</h4>
                    <p className="text-gray-600 text-sm">
                      Aktifkan &quot;Install from Unknown Sources&quot; di pengaturan
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Install &amp; Buka</h4>
                    <p className="text-gray-600 text-sm">Tap file APK yang sudah didownload dan ikuti instruksi</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* iOS Installation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/10 rounded-lg flex items-center justify-center z-10">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#FFB703] rounded-full animate-pulse"></div>
                    <span className="text-gray-800 font-semibold">Coming Soon untuk iOS</span>
                  </div>
                </div>
              </div>
              <div className="opacity-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-[#FFB703] rounded-lg flex items-center justify-center mr-3">
                  <Tablet className="w-4 h-4 text-white" />
                </div>
                Instalasi untuk iOS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Download IPA</h4>
                    <p className="text-gray-600 text-sm">Klik tombol download untuk mengunduh file IPA CalisFun</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Trust Developer</h4>
                    <p className="text-gray-600 text-sm">
                      Buka Settings &gt; General &gt; Device Management untuk trust app
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Launch App</h4>
                    <p className="text-gray-600 text-sm">Buka aplikasi CalisFun dari home screen dan mulai belajar</p>
                  </CardContent>
                </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              FAQ <span className="text-[#3D7BF7]">Download</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pertanyaan yang sering ditanyakan seputar download dan instalasi aplikasi CalisFun
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Apakah aplikasi CalisFun gratis?</h3>
                <p className="text-gray-600">
                  Ya, aplikasi CalisFun dapat didownload dan digunakan secara gratis. Namun, untuk akses penuh ke semua
                  fitur premium, tersedia paket berlangganan mulai dari Rp 99.000/bulan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Mengapa tidak tersedia di Play Store/App Store?
                </h3>
                <p className="text-gray-600">
                  Saat ini kami sedang dalam proses review untuk publikasi di store resmi. Untuk sementara, aplikasi
                  dapat didownload langsung dari website kami dengan keamanan yang terjamin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Apakah aman menginstall dari luar store?</h3>
                <p className="text-gray-600">
                  Ya, aplikasi CalisFun telah melalui pengujian keamanan yang ketat. File APK/IPA kami bersih dari
                  malware dan virus. Pastikan hanya download dari website resmi kami.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bagaimana cara update aplikasi?</h3>
                <p className="text-gray-600">
                  Aplikasi akan memberikan notifikasi ketika ada update tersedia. Anda dapat mengunjungi halaman
                  download ini untuk mendapatkan versi terbaru.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#3D7BF7] to-[#2563EB] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Siap Memulai Petualangan Belajar?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Download aplikasi CalisFun sekarang dan berikan anak Anda pengalaman belajar terbaik
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/placeholder.apk"
                link.download = "CalisFun-v1.2.3.apk"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="group bg-black hover:bg-gray-800 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-4"
            >
              <Download className="w-6 h-6" />
              <span>Download Android</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              disabled
              className="group bg-gray-600 text-gray-300 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-4 cursor-not-allowed opacity-75"
            >
              <div className="w-3 h-3 bg-[#FFB703] rounded-full animate-pulse"></div>
              <span>iOS Coming Soon</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#FFB703] rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>

          <p className="text-blue-200 text-lg mt-8">
            Bergabunglah dengan 100,000+ keluarga Indonesia yang sudah merasakan manfaatnya
          </p>
        </div>
      </section>

    </div>
  )
}
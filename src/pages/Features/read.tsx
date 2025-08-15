import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target, Users, Star, Play, CheckCircle, Award, Heart } from "lucide-react"

export default function BacaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#06D6A0] rounded-full mb-6 animate-bounce">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-in slide-in-from-bottom-4 duration-700">
            Belajar <span className="text-[#06D6A0]">Membaca</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-200">
            Kembangkan kemampuan membaca anak dengan metode yang menyenangkan dan interaktif. Dari mengenal huruf hingga
            membaca cerita lengkap.
          </p>
          <Button className="bg-[#06D6A0] hover:bg-emerald-600 text-white px-8 py-4 text-lg animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <Play className="w-5 h-5 mr-2" />
            Mulai Membaca
          </Button>
        </div>
      </section>

      {/* Main Purpose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tujuan Utama Fitur Baca</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun fondasi literasi yang kuat untuk masa depan anak yang cerah
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mengenal Huruf</h3>
                <p className="text-gray-600">
                  Anak belajar mengenal 26 huruf alfabet dengan cara yang menyenangkan melalui gambar dan suara
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Membaca Kata</h3>
                <p className="text-gray-600">
                  Mengajarkan anak untuk menggabungkan huruf menjadi kata-kata sederhana dengan metode fonik
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cinta Membaca</h3>
                <p className="text-gray-600">
                  Menumbuhkan kecintaan terhadap membaca melalui cerita-cerita menarik dan interaktif
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Learn Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cara Belajar Membaca</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metode pembelajaran yang terbukti efektif dan menyenangkan untuk anak
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#06D6A0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pengenalan Huruf</h3>
                  <p className="text-gray-600">
                    Mulai dengan mengenal bentuk dan bunyi setiap huruf melalui permainan interaktif
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#06D6A0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Suku Kata</h3>
                  <p className="text-gray-600">
                    Belajar menggabungkan huruf menjadi suku kata dengan bantuan visual dan audio
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#06D6A0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kata Sederhana</h3>
                  <p className="text-gray-600">Membaca kata-kata sederhana dengan gambar yang mendukung pemahaman</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#06D6A0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kalimat & Cerita</h3>
                  <p className="text-gray-600">Membaca kalimat lengkap dan cerita pendek dengan pemahaman yang baik</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-[#06D6A0] to-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <Play className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Pembelajaran</h3>
              <p className="text-gray-600 mb-6">
                Lihat bagaimana anak Anda akan belajar membaca dengan metode yang menyenangkan dan efektif
              </p>
              <Button className="w-full bg-[#06D6A0] hover:bg-emerald-600 text-white">Tonton Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Target Pembelajaran</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pencapaian yang akan diraih anak setelah menyelesaikan program membaca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">26 Huruf</h3>
              <p className="text-gray-600">Menguasai semua huruf alfabet dengan sempurna</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100+ Kata</h3>
              <p className="text-gray-600">Mampu membaca lebih dari 100 kata dasar</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cerita Pendek</h3>
              <p className="text-gray-600">Membaca dan memahami cerita pendek</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sertifikat</h3>
              <p className="text-gray-600">Mendapat sertifikat kelulusan membaca</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi terdepan untuk pengalaman belajar yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Tutor</h3>
                <p className="text-gray-600 mb-4">
                  Asisten AI yang membantu anak belajar dengan cara yang personal dan adaptif
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Pembelajaran adaptif
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Feedback real-time
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Progress tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gamifikasi</h3>
                <p className="text-gray-600 mb-4">
                  Sistem reward dan achievement yang membuat belajar menjadi menyenangkan
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Poin dan badge
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Leaderboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Mini games
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perpustakaan Digital</h3>
                <p className="text-gray-600 mb-4">Koleksi cerita dan buku bacaan yang terus bertambah untuk anak</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    500+ cerita
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Audio narasi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0] mr-2" />
                    Ilustrasi menarik
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#06D6A0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mulai Petualangan Membaca Hari Ini!</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan anak yang sudah mahir membaca bersama CalisFun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#06D6A0] hover:bg-gray-100 px-8 py-4 text-lg">Download Aplikasi</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#06D6A0] px-8 py-4 text-lg bg-transparent"
            >
              Coba Gratis
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

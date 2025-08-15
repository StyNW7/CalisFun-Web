import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Target, Users, Star, Play, CheckCircle, Award, Brain } from "lucide-react"

export default function HitungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E63946] rounded-full mb-6 animate-bounce">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-in slide-in-from-bottom-4 duration-700">
            Belajar <span className="text-[#E63946]">Berhitung</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-200">
            Kembangkan kemampuan matematika dasar anak dengan cara yang menyenangkan. Dari mengenal angka hingga operasi
            hitung sederhana.
          </p>
          <Button className="bg-[#E63946] hover:bg-red-600 text-white px-8 py-4 text-lg animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <Play className="w-5 h-5 mr-2" />
            Mulai Berhitung
          </Button>
        </div>
      </section>

      {/* Main Purpose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tujuan Utama Fitur Hitung</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun fondasi matematika yang kuat untuk perkembangan logika anak
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mengenal Angka</h3>
                <p className="text-gray-600">
                  Anak belajar mengenal angka 0-100 dengan cara yang visual dan interaktif
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operasi Dasar</h3>
                <p className="text-gray-600">Mengajarkan penjumlahan, pengurangan, dan konsep matematika sederhana</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Logika Berpikir</h3>
                <p className="text-gray-600">Mengembangkan kemampuan berpikir logis dan pemecahan masalah</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Learn Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cara Belajar Berhitung</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metode pembelajaran matematika yang mudah dipahami dan menyenangkan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pengenalan Angka</h3>
                  <p className="text-gray-600">
                    Mulai dengan mengenal bentuk dan nilai setiap angka melalui visualisasi menarik
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Menghitung Objek</h3>
                  <p className="text-gray-600">Belajar menghitung benda-benda konkret untuk memahami konsep bilangan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Penjumlahan</h3>
                  <p className="text-gray-600">
                    Memahami konsep penjumlahan dengan bantuan gambar dan manipulasi objek
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pengurangan</h3>
                  <p className="text-gray-600">Belajar konsep pengurangan dan operasi matematika sederhana lainnya</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-[#E63946] to-red-400 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kalkulator Interaktif</h3>
              <p className="text-gray-600 mb-6">
                Lihat bagaimana anak akan belajar berhitung dengan tools interaktif yang menyenangkan
              </p>
              <Button className="w-full bg-[#E63946] hover:bg-red-600 text-white">Coba Kalkulator</Button>
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
              Kemampuan matematika yang akan dikuasai anak setelah menyelesaikan program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Angka 1-100</h3>
              <p className="text-gray-600">Menguasai semua angka dari 1 sampai 100</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Penjumlahan</h3>
              <p className="text-gray-600">Mampu menjumlahkan angka hingga 20</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pengurangan</h3>
              <p className="text-gray-600">Menguasai pengurangan dasar dengan benar</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Soal Cerita</h3>
              <p className="text-gray-600">Memecahkan soal cerita matematika sederhana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi pembelajaran matematika yang inovatif dan efektif
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manipulatif Virtual</h3>
                <p className="text-gray-600 mb-4">
                  Objek digital yang dapat dimanipulasi untuk memahami konsep matematika
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Blok angka
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Abacus digital
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Counting bears
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Soal Adaptif</h3>
                <p className="text-gray-600 mb-4">
                  Sistem yang menyesuaikan tingkat kesulitan berdasarkan kemampuan anak
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Level bertahap
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Hint system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Progress tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Math Games</h3>
                <p className="text-gray-600 mb-4">Permainan matematika yang seru untuk memperkuat pemahaman konsep</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Number race
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Math puzzle
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#E63946] mr-2" />
                    Counting games
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#E63946]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mulai Petualangan Matematika!</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan anak yang sudah mahir berhitung dengan CalisFun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#E63946] hover:bg-gray-100 px-8 py-4 text-lg">Download Aplikasi</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#E63946] px-8 py-4 text-lg bg-transparent"
            >
              Coba Gratis
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Target, Users, Star, Play, CheckCircle, Award, Palette } from "lucide-react"
import { useNavigate } from "react-router"

export default function TulisPage() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFB703] rounded-full mb-6 animate-bounce">
            <PenTool className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-in slide-in-from-bottom-4 duration-700">
            Belajar <span className="text-[#FFB703]">Menulis</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-200">
            Kembangkan kemampuan menulis anak dari menggambar garis hingga menulis kata dan kalimat dengan indah.
            Latihan motorik halus yang menyenangkan dan efektif.
          </p>
          <Button className="bg-[#FFB703] hover:bg-amber-600 text-white px-8 py-4 text-lg animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <Play className="w-5 h-5 mr-2" />
            Mulai Menulis
          </Button>
        </div>
      </section>

      {/* Main Purpose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tujuan Utama Fitur Tulis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun kemampuan menulis yang kuat melalui latihan motorik halus yang sistematis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Motorik Halus</h3>
                <p className="text-gray-600">
                  Melatih koordinasi tangan dan mata untuk mengembangkan kemampuan menulis yang baik
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bentuk Huruf</h3>
                <p className="text-gray-600">
                  Mengajarkan cara menulis setiap huruf dengan bentuk dan proporsi yang benar
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kreativitas</h3>
                <p className="text-gray-600">Mengembangkan ekspresi diri melalui tulisan dan gambar yang kreatif</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Learn Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cara Belajar Menulis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metode pembelajaran bertahap yang mengikuti perkembangan motorik anak
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Latihan Garis</h3>
                  <p className="text-gray-600">
                    Mulai dengan menggambar garis lurus, lengkung, dan zigzag untuk melatih kontrol tangan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bentuk Dasar</h3>
                  <p className="text-gray-600">Belajar menulis lingkaran, kotak, dan bentuk geometri sederhana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Huruf Besar</h3>
                  <p className="text-gray-600">Menulis huruf kapital dengan panduan titik-titik dan garis bantu</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kata & Kalimat</h3>
                  <p className="text-gray-600">Menulis kata lengkap dan kalimat sederhana dengan spasi yang tepat</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-[#FFB703] to-amber-400 rounded-xl flex items-center justify-center mb-6">
                <PenTool className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latihan Interaktif</h3>
              <p className="text-gray-600 mb-6">
                Lihat bagaimana anak akan berlatih menulis dengan panduan digital yang responsif
              </p>
              <Button className="w-full bg-[#FFB703] hover:bg-amber-600 text-white">Coba Latihan</Button>
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
              Kemampuan menulis yang akan dikuasai anak setelah menyelesaikan program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">26 Huruf</h3>
              <p className="text-gray-600">Menulis semua huruf dengan bentuk yang benar</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nama Sendiri</h3>
              <p className="text-gray-600">Mampu menulis nama lengkap dengan rapi</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <PenTool className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kalimat Sederhana</h3>
              <p className="text-gray-600">Menulis kalimat 3-5 kata dengan benar</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tulisan Rapi</h3>
              <p className="text-gray-600">Menghasilkan tulisan yang rapi dan terbaca</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi canggih untuk pengalaman belajar menulis yang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deteksi Tulisan</h3>
                <p className="text-gray-600 mb-4">
                  AI yang dapat mendeteksi dan mengoreksi tulisan anak secara real-time
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Koreksi otomatis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Feedback instan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Analisis kemajuan
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Panduan Interaktif</h3>
                <p className="text-gray-600 mb-4">Panduan langkah demi langkah dengan animasi yang membantu anak</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Animasi gerakan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Garis bantu
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Titik panduan
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kreativitas Digital</h3>
                <p className="text-gray-600 mb-4">Tools kreatif untuk menggambar dan menulis dengan berbagai warna</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Palet warna
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Brush tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#FFB703] mr-2" />
                    Stiker lucu
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#FFB703]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mulai Latihan Menulis Sekarang!</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan anak yang sudah mahir menulis dengan indah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#FFB703] hover:bg-gray-100 px-8 py-4 text-lg"  onClick={() => navigate("/download")}>Download Aplikasi</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#FFB703] px-8 py-4 text-lg bg-transparent"
              onClick={() => navigate("/download")}
            >
              Coba Gratis
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

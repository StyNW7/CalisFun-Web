// import Navigation from "@/components/Navbar"
// import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Calculator,
  ChevronRight,
  Play,
  Award,
  Heart,
  PenTool,
  Star,
  Users,
  Clock,
  Quote,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  HelpCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3D7BF7] via-[#2563EB] to-[#1D4ED8] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/logo.png?height=800&width=1200')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Belajar <span className="text-[#FFB703]">Calistung</span> Jadi Lebih{" "}
                <span className="text-[#06D6A0]">Menyenangkan!</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Platform pembelajaran interaktif untuk membantu anak-anak Indonesia menguasai kemampuan dasar{" "}
                <strong>Baca, Tulis, dan Hitung</strong> dengan cara yang seru dan mudah dipahami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#FFB703] hover:bg-[#F59E0B] text-black font-semibold px-8 py-4 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Mulai Belajar Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#3D7BF7] px-8 py-4 text-lg bg-transparent"
                >
                  Lihat Demo
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                <img
                  src="/Images/landing/hero.png?height=500&width=600"
                  alt="Anak-anak belajar dengan CalisFun"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center animate-bounce">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center animate-bounce delay-500">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-in fade-in duration-1000">
              <div className="text-4xl font-bold text-[#3D7BF7] mb-2">10,000+</div>
              <div className="text-gray-600">Anak Belajar</div>
            </div>
            <div className="text-center animate-in fade-in duration-1000 delay-200">
              <div className="text-4xl font-bold text-[#06D6A0] mb-2">500+</div>
              <div className="text-gray-600">Materi Pembelajaran</div>
            </div>
            <div className="text-center animate-in fade-in duration-1000 delay-400">
              <div className="text-4xl font-bold text-[#FFB703] mb-2">98%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center animate-in fade-in duration-1000 delay-600">
              <div className="text-4xl font-bold text-[#E63946] mb-2">50+</div>
              <div className="text-gray-600">Kota di Indonesia</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <img
                src="/Images/logo.png?height=400&width=500"
                alt="Tentang CalisFun"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-in slide-in-from-right duration-1000">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-[#3D7BF7]">CalisFun</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CalisFun adalah platform pembelajaran digital yang dirancang khusus untuk anak-anak Indonesia. Kami
                memahami bahwa setiap anak memiliki cara belajar yang unik, oleh karena itu kami menghadirkan metode
                pembelajaran yang interaktif, menyenangkan, dan mudah dipahami.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan fokus pada kemampuan dasar Calistung (Baca, Tulis, Hitung), kami membantu membangun fondasi
                pendidikan yang kuat untuk masa depan anak-anak Indonesia yang lebih cerah.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-[#FFB703]" />
                  <span className="text-gray-700 font-medium">Metode Teruji</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-[#E63946]" />
                  <span className="text-gray-700 font-medium">Dibuat dengan Cinta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fitur Utama <span className="text-[#3D7BF7]">CalisFun</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga pilar pembelajaran dasar yang dikemas dalam metode interaktif dan menyenangkan untuk mengoptimalkan
              perkembangan anak
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Baca Feature */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#06D6A0]/5 to-[#06D6A0]/10 hover:from-[#06D6A0]/10 hover:to-[#06D6A0]/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Belajar Baca</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Metode pembelajaran membaca yang menyenangkan dengan cerita interaktif, gambar menarik, dan permainan
                  kata yang membantu anak mengenal huruf dan kata dengan mudah.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-[#06D6A0]" />
                    <span>200+ Cerita Interaktif</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#06D6A0]" />
                    <span>Pembelajaran Bertahap</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#06D6A0]" />
                    <span>15 Menit per Sesi</span>
                  </div>
                </div>
                <Button className="w-full bg-[#06D6A0] hover:bg-[#059669] text-white group-hover:scale-105 transition-transform duration-300">
                  Mulai Belajar Baca
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Tulis Feature */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#FFB703]/5 to-[#FFB703]/10 hover:from-[#FFB703]/10 hover:to-[#FFB703]/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Belajar Tulis</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Panduan menulis huruf dan angka dengan teknik yang tepat. Dilengkapi dengan latihan tracing digital
                  dan feedback real-time untuk membantu anak menulis dengan benar.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-[#FFB703]" />
                    <span>Panduan Tracing Digital</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#FFB703]" />
                    <span>Feedback Real-time</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#FFB703]" />
                    <span>Latihan Harian</span>
                  </div>
                </div>
                <Button className="w-full bg-[#FFB703] hover:bg-[#F59E0B] text-black group-hover:scale-105 transition-transform duration-300">
                  Mulai Belajar Tulis
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Hitung Feature */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-[#E63946]/5 to-[#E63946]/10 hover:from-[#E63946]/10 hover:to-[#E63946]/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Belajar Hitung</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Konsep matematika dasar yang disajikan dengan cara visual dan interaktif. Anak akan belajar angka,
                  penjumlahan, pengurangan dengan permainan yang seru dan mudah dipahami.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-[#E63946]" />
                    <span>Matematika Visual</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#E63946]" />
                    <span>Permainan Interaktif</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#E63946]" />
                    <span>Level Progresif</span>
                  </div>
                </div>
                <Button className="w-full bg-[#E63946] hover:bg-[#DC2626] text-white group-hover:scale-105 transition-transform duration-300">
                  Mulai Belajar Hitung
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Feature Highlights */}
          <div className="mt-16 bg-gradient-to-r from-[#3D7BF7]/5 to-[#2563EB]/5 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Mengapa Memilih <span className="text-[#3D7BF7]">CalisFun</span>?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Interaktif</h4>
                <p className="text-sm text-gray-600">Pembelajaran dengan permainan yang menyenangkan</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Teruji</h4>
                <p className="text-sm text-gray-600">Metode pembelajaran yang sudah terbukti efektif</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal</h4>
                <p className="text-sm text-gray-600">Disesuaikan dengan kecepatan belajar anak</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#3D7BF7] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Aman</h4>
                <p className="text-sm text-gray-600">Lingkungan belajar yang aman untuk anak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tim <span className="text-[#3D7BF7]">CalisFun</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bertemu dengan tim ahli yang berdedikasi untuk menciptakan pengalaman belajar terbaik bagi anak-anak
              Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src="/Images/placeholder/avatar.png?height=120&width=120"
                    alt="Dr. Sari Wijaya"
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3D7BF7] rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sari Wijaya</h3>
                <p className="text-[#3D7BF7] font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm mb-4">
                  Ahli pendidikan anak dengan 15+ tahun pengalaman dalam pengembangan kurikulum pembelajaran dasar
                </p>
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#3D7BF7] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#3D7BF7] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src="/Images/placeholder/avatar.png?height=120&width=120"
                    alt="Budi Santoso"
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Budi Santoso</h3>
                <p className="text-[#06D6A0] font-medium mb-3">CTO</p>
                <p className="text-gray-600 text-sm mb-4">
                  Teknolog berpengalaman yang mengkhususkan diri dalam pengembangan platform pembelajaran interaktif
                </p>
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#06D6A0] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#06D6A0] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src="/Images/placeholder/avatar.png?height=120&width=120"
                    alt="Maya Putri"
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maya Putri</h3>
                <p className="text-[#FFB703] font-medium mb-3">Psikolog Anak</p>
                <p className="text-gray-600 text-sm mb-4">
                  Spesialis psikologi perkembangan anak yang memastikan metode pembelajaran sesuai tahap perkembangan
                </p>
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#FFB703] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#FFB703] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src="/Images/placeholder/avatar.png?height=120&width=120"
                    alt="Andi Rahman"
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Andi Rahman</h3>
                <p className="text-[#E63946] font-medium mb-3">Creative Director</p>
                <p className="text-gray-600 text-sm mb-4">
                  Desainer kreatif yang menciptakan pengalaman visual menarik dan ramah anak dalam setiap pembelajaran
                </p>
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#E63946] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-[#E63946] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata <span className="text-[#3D7BF7]">Mereka</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman nyata dari orang tua dan anak-anak yang telah merasakan manfaat belajar dengan
              CalisFun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#3D7BF7]/5 to-[#3D7BF7]/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#3D7BF7] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Anak saya yang tadinya susah belajar membaca, sekarang jadi semangat sekali! Metode CalisFun
                  benar-benar membuat belajar jadi menyenangkan. Dalam 2 bulan, kemampuan bacanya meningkat drastis."
                </p>
                <div className="flex items-center">
                  <img
                    src="/Images/placeholder/avatar.png?height=50&width=50"
                    alt="Ibu Rina"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ibu Rina Sari</h4>
                    <p className="text-sm text-gray-600">Orang Tua, Jakarta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#06D6A0]/5 to-[#06D6A0]/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#06D6A0] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Sebagai guru, saya sangat terkesan dengan pendekatan CalisFun. Platform ini membantu saya mengajar
                  dengan lebih efektif. Anak-anak di kelas jadi lebih antusias dan cepat memahami materi."
                </p>
                <div className="flex items-center">
                  <img
                    src="/Images/placeholder/avatar.png?height=50&width=50"
                    alt="Bu Siti"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bu Siti Nurhaliza</h4>
                    <p className="text-sm text-gray-600">Guru SD, Bandung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#FFB703]/5 to-[#FFB703]/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#FFB703] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Aku suka banget belajar di CalisFun! Gambarnya lucu-lucu dan ada permainannya juga. Sekarang aku udah
                  bisa baca cerita sendiri dan nulis nama dengan rapi!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/Images/placeholder/avatar.png?height=50&width=50"
                    alt="Kirana"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kirana (7 tahun)</h4>
                    <p className="text-sm text-gray-600">Siswa CalisFun, Surabaya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#E63946]/5 to-[#E63946]/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#E63946] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Platform yang luar biasa! Anak saya yang dulu takut matematika, sekarang malah sering minta belajar
                  hitung. Cara penyampaiannya sangat mudah dipahami dan tidak membuat anak stress."
                </p>
                <div className="flex items-center">
                  <img
                    src="/Images/placeholder/avatar.png?height=50&width=50"
                    alt="Pak Ahmad"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pak Ahmad Fauzi</h4>
                    <p className="text-sm text-gray-600">Orang Tua, Yogyakarta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#3D7BF7]/5 to-[#2563EB]/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#3D7BF7] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Sebagai kepala sekolah, saya merekomendasikan CalisFun untuk semua orang tua. Hasilnya terlihat nyata
                  pada kemampuan calistung anak-anak. Metodenya sesuai dengan perkembangan anak Indonesia."
                </p>
                <div className="flex items-center">
                  <img
                    src="/Images/placeholder/avatar.png?height=50&width=50"
                    alt="Ibu Dewi"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ibu Dewi Lestari</h4>
                    <p className="text-sm text-gray-600">Kepala Sekolah, Medan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#06D6A0]/5 to-[#059669]/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#06D6A0] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Fitur tracing untuk belajar menulis sangat membantu anak saya. Sekarang tulisannya jadi lebih rapi
                  dan dia lebih percaya diri saat menulis. Terima kasih CalisFun!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/Images/placeholder/avatar.png?height=50&width=50"
                    alt="Ibu Lisa"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ibu Lisa Permata</h4>
                    <p className="text-sm text-gray-600">Orang Tua, Semarang</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action in Testimonials */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#3D7BF7] to-[#2563EB] rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Bergabunglah dengan 10,000+ Keluarga Indonesia</h3>
              <p className="text-xl mb-8 text-blue-100">
                Yang telah merasakan manfaat belajar calistung dengan CalisFun
              </p>
              <Button size="lg" className="bg-[#FFB703] hover:bg-[#F59E0B] text-black font-semibold px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Mulai Gratis Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#3D7BF7] rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pertanyaan yang Sering <span className="text-[#3D7BF7]">Ditanyakan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang CalisFun dan cara terbaik menggunakan platform pembelajaran
              kami
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">
                  Apa itu CalisFun dan bagaimana cara kerjanya?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                CalisFun adalah platform pembelajaran digital yang dirancang khusus untuk membantu anak-anak Indonesia
                menguasai kemampuan dasar Calistung (Baca, Tulis, Hitung). Platform kami menggunakan metode pembelajaran
                interaktif dengan permainan edukatif, cerita menarik, dan latihan yang disesuaikan dengan tahap
                perkembangan anak. Setiap sesi pembelajaran dirancang untuk berlangsung 15-20 menit agar anak tidak
                mudah bosan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">Untuk usia berapa CalisFun cocok digunakan?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                CalisFun dirancang untuk anak usia 4-8 tahun, yang merupakan masa emas untuk mempelajari kemampuan dasar
                membaca, menulis, dan berhitung. Namun, platform kami juga dapat digunakan oleh anak yang lebih besar
                yang membutuhkan penguatan dalam kemampuan calistung. Materi pembelajaran kami disusun secara bertahap
                dari level dasar hingga menengah.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">Apakah CalisFun gratis atau berbayar?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                CalisFun menawarkan paket gratis dengan akses terbatas ke beberapa materi pembelajaran dasar. Untuk
                akses penuh ke semua fitur, termasuk 500+ materi pembelajaran, laporan progress detail, dan fitur
                tracing digital, tersedia paket berlangganan mulai dari Rp 99.000/bulan. Kami juga menyediakan trial
                gratis 7 hari untuk paket premium.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">
                  Bagaimana cara memantau progress belajar anak?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                CalisFun dilengkapi dengan dashboard khusus orang tua yang menampilkan laporan progress belajar anak
                secara real-time. Anda dapat melihat materi yang telah diselesaikan, tingkat pemahaman anak, waktu
                belajar harian, dan area yang perlu diperbaiki. Laporan mingguan juga dikirim via email untuk membantu
                Anda memantau perkembangan anak.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">Apakah CalisFun bisa digunakan offline?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Saat ini CalisFun memerlukan koneksi internet untuk mengakses materi pembelajaran dan menyimpan progress
                belajar anak. Namun, kami sedang mengembangkan fitur offline mode yang memungkinkan anak belajar tanpa
                internet dan sinkronisasi otomatis ketika terhubung kembali. Fitur ini akan tersedia dalam update
                mendatang.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">
                  Bagaimana jika anak saya mengalami kesulitan dalam menggunakan platform?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Tim support CalisFun siap membantu 24/7 melalui live chat, email, atau WhatsApp. Kami juga menyediakan
                panduan lengkap dan video tutorial untuk orang tua dan anak. Jika diperlukan, tim ahli pendidikan kami
                dapat memberikan konsultasi personal untuk membantu menyesuaikan metode pembelajaran dengan kebutuhan
                spesifik anak Anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                <span className="text-lg font-semibold text-gray-900">
                  Apakah materi CalisFun sesuai dengan kurikulum sekolah di Indonesia?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Ya, semua materi CalisFun disusun berdasarkan kurikulum pendidikan Indonesia dan standar kompetensi yang
                ditetapkan Kemendikbud. Materi kami juga telah direview oleh para ahli pendidikan anak dan guru
                berpengalaman untuk memastikan kesesuaian dengan tahap perkembangan anak Indonesia. Kami secara berkala
                memperbarui konten sesuai dengan perkembangan kurikulum terbaru.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
            <Button className="bg-[#3D7BF7] hover:bg-[#2563EB] text-white px-8 py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Hubungi Tim Support
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hubungi <span className="text-[#3D7BF7]">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim CalisFun siap membantu Anda. Jangan ragu untuk menghubungi kami jika ada pertanyaan atau butuh bantuan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3D7BF7] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@calisfun.id</p>
                      <p className="text-gray-600">support@calisfun.id</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#06D6A0] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon & WhatsApp</h4>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                      <p className="text-gray-600">+62 812 3456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFB703] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                      <p className="text-gray-600">
                        Jl. Pendidikan No. 123
                        <br />
                        Menteng, Jakarta Pusat 10310
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E63946] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 17:00 WIB
                        <br />
                        Sabtu: 09:00 - 15:00 WIB
                        <br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 bg-[#3D7BF7] hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-[#06D6A0] hover:bg-[#059669] rounded-lg flex items-center justify-center transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-[#FFB703] hover:bg-[#F59E0B] rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-[#E63946] hover:bg-[#DC2626] rounded-lg flex items-center justify-center transition-colors">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Depan *
                      </label>
                      <Input id="firstName" type="text" placeholder="Masukkan nama depan" className="w-full" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Belakang *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Masukkan nama belakang"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="nama@email.com" className="w-full" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <Input id="phone" type="tel" placeholder="+62 812 3456 7890" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <Input id="subject" type="text" placeholder="Pilih subjek pesan" className="w-full" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#3D7BF7] hover:bg-[#2563EB] text-white py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Dengan mengirim pesan, Anda menyetujui{" "}
                    <a href="/privacy" className="text-[#3D7BF7] hover:underline">
                      Kebijakan Privasi
                    </a>{" "}
                    kami.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-[#3D7BF7]/5 to-[#3D7BF7]/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#3D7BF7] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h4>
                <p className="text-gray-600 text-sm mb-4">Dapatkan bantuan instan dari tim support kami</p>
                <Button
                  variant="outline"
                  className="border-[#3D7BF7] text-[#3D7BF7] hover:bg-[#3D7BF7] hover:text-white bg-transparent"
                >
                  Mulai Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-[#06D6A0]/5 to-[#06D6A0]/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#06D6A0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-600 text-sm mb-4">Hubungi kami melalui WhatsApp untuk respon cepat</p>
                <Button
                  variant="outline"
                  className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-white bg-transparent"
                >
                  Chat WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-[#FFB703]/5 to-[#FFB703]/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Pusat Bantuan</h4>
                <p className="text-gray-600 text-sm mb-4">Temukan jawaban di pusat bantuan lengkap kami</p>
                <Button
                  variant="outline"
                  className="border-[#FFB703] text-[#FFB703] hover:bg-[#FFB703] hover:text-white bg-transparent"
                >
                  Lihat FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}

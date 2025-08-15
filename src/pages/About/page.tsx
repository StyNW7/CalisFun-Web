"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  BookOpen,
  PenTool,
  Calculator,
  Star,
  TrendingUp,
  CheckCircle,
} from "lucide-react"

export default function AboutPage() {
  const sdgGoals = [
    {
      number: 4,
      title: "Pendidikan Berkualitas",
      description:
        "Memastikan pendidikan yang inklusif dan berkualitas serta mendorong kesempatan belajar seumur hidup untuk semua",
      color: "bg-red-500",
    },
    {
      number: 10,
      title: "Mengurangi Kesenjangan",
      description: "Mengurangi kesenjangan dalam dan antar negara melalui akses pendidikan yang merata",
      color: "bg-pink-500",
    },
    {
      number: 17,
      title: "Kemitraan untuk Tujuan",
      description: "Memperkuat sarana pelaksanaan dan merevitalisasi kemitraan global untuk pembangunan berkelanjutan",
      color: "bg-blue-600",
    },
  ]

  const partners = [
    { name: "Kementerian Pendidikan", logo: "/Images/partner/kementerian.png?height=60&width=120" },
    { name: "UNICEF Indonesia", logo: "/Images/partner/kementerian.png?height=60&width=120" },
    { name: "Tzu Chi Foundation", logo: "/Images/partner/kementerian.png?height=60&width=120" },
    { name: "Tanoto Foundation", logo: "/Images/partner/kementerian.png?height=60&width=120" },
    { name: "Dompet Dhuafa", logo: "/Images/partner/kementerian.png?height=60&width=120" },
    { name: "Rumah Zakat", logo: "/Images/partner/kementerian.png?height=60&width=120" },
  ]

  const achievements = [
    { number: "500K+", label: "Anak Terdaftar", icon: Users },
    { number: "10K+", label: "Sekolah Mitra", icon: BookOpen },
    { number: "95%", label: "Tingkat Kepuasan", icon: Star },
    { number: "50+", label: "Kota di Indonesia", icon: Globe },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Baca",
      description: "Pembelajaran membaca dengan metode yang menyenangkan dan interaktif",
      color: "text-[#06D6A0]",
    },
    {
      icon: PenTool,
      title: "Tulis",
      description: "Latihan menulis yang sistematis untuk mengembangkan kemampuan motorik halus",
      color: "text-[#FFB703]",
    },
    {
      icon: Calculator,
      title: "Hitung",
      description: "Konsep matematika dasar yang mudah dipahami dengan pendekatan visual",
      color: "text-[#E63946]",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D7BF7]/10 to-[#06D6A0]/10"></div>
        <div className="relative max-w-4xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-[#3D7BF7]">CalisFun</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform pembelajaran digital yang revolusioner untuk mengembangkan kemampuan Calistung (Baca, Tulis,
            Hitung) anak-anak Indonesia dengan cara yang menyenangkan dan efektif.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-xl border-0 animate-in slide-in-from-left-4 duration-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#3D7BF7] rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Visi Kami</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menjadi platform pembelajaran digital terdepan di Indonesia yang memberdayakan setiap anak untuk
                  menguasai kemampuan dasar Calistung dengan cara yang menyenangkan, inovatif, dan mudah diakses oleh
                  seluruh lapisan masyarakat.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 animate-in slide-in-from-right-4 duration-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#06D6A0] rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Misi Kami</h2>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0] mr-2 mt-0.5 flex-shrink-0" />
                    Mengembangkan metode pembelajaran yang inovatif dan menyenangkan
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0] mr-2 mt-0.5 flex-shrink-0" />
                    Memberikan akses pendidikan berkualitas untuk semua anak Indonesia
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0] mr-2 mt-0.5 flex-shrink-0" />
                    Mendukung orang tua dan guru dalam proses pembelajaran anak
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0] mr-2 mt-0.5 flex-shrink-0" />
                    Membangun generasi yang cerdas dan berkarakter
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Utama CalisFun</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tiga pilar pembelajaran yang dirancang khusus untuk mengembangkan kemampuan dasar anak
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mendukung Tujuan Pembangunan Berkelanjutan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              CalisFun berkomitmen mendukung Sustainable Development Goals (SDGs) PBB melalui pendidikan berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 animate-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${goal.color} rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-2xl font-bold text-white">{goal.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#3D7BF7] to-[#06D6A0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 duration-700">
            <h2 className="text-3xl font-bold text-white mb-4">Pencapaian Kami</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Dampak positif yang telah kami berikan untuk pendidikan anak Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dampak yang Kami Ciptakan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cerita nyata tentang bagaimana CalisFun mengubah cara anak-anak belajar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl border-0 animate-in slide-in-from-left-4 duration-700">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#06D6A0] rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Peningkatan Kemampuan Baca</h3>
                <p className="text-gray-600 mb-4">
                  85% anak mengalami peningkatan kemampuan membaca dalam 3 bulan pertama menggunakan CalisFun.
                </p>
                <div className="text-2xl font-bold text-[#06D6A0]">+85%</div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 animate-in slide-in-from-bottom-4 duration-700 delay-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Motivasi Belajar Meningkat</h3>
                <p className="text-gray-600 mb-4">
                  92% orang tua melaporkan anak mereka lebih antusias dan termotivasi untuk belajar.
                </p>
                <div className="text-2xl font-bold text-[#FFB703]">+92%</div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 animate-in slide-in-from-right-4 duration-700 delay-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#E63946] rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prestasi Akademik</h3>
                <p className="text-gray-600 mb-4">
                  78% anak menunjukkan peningkatan nilai akademik di sekolah setelah menggunakan CalisFun.
                </p>
                <div className="text-2xl font-bold text-[#E63946]">+78%</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mitra & Sponsor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bersama organisasi terpercaya untuk memberikan pendidikan terbaik bagi anak Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-center animate-in fade-in-0 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo || "/Images/partner/kementerian.png"}
                  alt={partner.name}
                  className="h-16 mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-sm text-gray-600">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#3D7BF7] to-[#2563EB]">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold text-white mb-6">Bergabunglah dengan Revolusi Pendidikan</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan pembelajaran yang menyenangkan untuk anak Anda bersama CalisFun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#3D7BF7] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Download Aplikasi
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3D7BF7] px-8 py-3 text-lg font-semibold bg-transparent"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

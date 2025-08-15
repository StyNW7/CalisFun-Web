import { BookOpen, PenTool, Calculator, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#3D7BF7] rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#3D7BF7]">CalisFun</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Platform pembelajaran interaktif untuk membantu anak-anak Indonesia menguasai kemampuan dasar Calistung
              (Baca, Tulis, Hitung) dengan cara yang menyenangkan.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-[#06D6A0] rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center">
                <PenTool className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-[#E63946] rounded-full flex items-center justify-center">
                <Calculator className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3D7BF7]">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#3D7BF7] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/tentang" className="text-gray-300 hover:text-[#3D7BF7] transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/baca" className="text-gray-300 hover:text-[#06D6A0] transition-colors">
                  Belajar Baca
                </a>
              </li>
              <li>
                <a href="/tulis" className="text-gray-300 hover:text-[#FFB703] transition-colors">
                  Belajar Tulis
                </a>
              </li>
              <li>
                <a href="/hitung" className="text-gray-300 hover:text-[#E63946] transition-colors">
                  Belajar Hitung
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3D7BF7]">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#3D7BF7]" />
                <span className="text-gray-300">info@calisfun.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#3D7BF7]" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#3D7BF7]" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 CalisFun. Semua hak dilindungi undang-undang.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-[#3D7BF7] text-sm transition-colors">
              Kebijakan Privasi
            </a>
            <a href="/terms" className="text-gray-400 hover:text-[#3D7BF7] text-sm transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

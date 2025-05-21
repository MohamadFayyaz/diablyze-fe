import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/pages/auth/Login";
import Register from "./assets/pages/auth/Register";

// Import komponen lain yang diperlukan
import { Heart } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section
                  style={{
                    backgroundImage: "url('/images/Background.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="flex flex-col md:flex-row items-center justify-between px-6 py-16 mx-auto max-w-7xl"
                >
                  <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-blue-500">Solusi Mudah</span>
                      <br />
                      <span className="text-gray-900">
                        untuk Deteksi diabetes
                      </span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                      Memprediksi diabetes berdasarkan riwayat medis dan data
                      demografis pasien.
                    </p>
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition flex items-center">
                      Mulai
                      <Heart className="ml-2 h-5 w-5" />
                    </button>
                  </div>

                  <div className="w-full md:w-1/2 relative flex justify-center">
                    <div className="relative w-full max-w-sm h-auto">
                      <img
                        src="/images/illustrasi-dokter.png"
                        alt="Doctor"
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-200 rounded-full opacity-50" />
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                  <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-blue-500 mb-16">
                      FEATURES WE PROVIDE
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                      <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-bold mb-4">
                          Deteksi Mudah
                        </h3>
                        <p className="text-gray-600">
                          Kami mendeteksi diabetes anda berdasarkan Hipertensi,
                          BMI dan lainnya
                        </p>
                      </div>
                      <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-bold mb-4">
                          Klasifikasi Resiko
                        </h3>
                        <p className="text-gray-600">
                          Kami melakukan klasifikasi dari input anda menjadi
                          resiko diabetes
                        </p>
                      </div>
                      <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-bold mb-4">
                          Rekomendasi Awal
                        </h3>
                        <p className="text-gray-600">
                          Kami memberikan rekomendasi awal dari input yang anda
                          masukkan
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section className="container mx-auto px-6 py-20">
                  <h2 className="text-4xl font-bold text-blue-500 mb-8">
                    Tentang Kami
                  </h2>
                  <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg">
                    <p className="text-gray-600 mb-6">
                      <span className="font-bold">Diablyze</span> adalah
                      platform pintar berbasis teknologi{" "}
                      <span className="font-bold">kecerdasan buatan (AI)</span>{" "}
                      yang dirancang untuk membantu pengguna mendeteksi risiko
                      diabetes secara cepat dan akurat.
                    </p>
                    <p className="text-gray-600">
                      Kami percaya bahwa{" "}
                      <span className="font-bold">
                        deteksi dini adalah kunci
                      </span>{" "}
                      dalam mengelola diabetes, dan setiap orang berhak memiliki
                      akses terhadap alat kesehatan yang cerdas, praktis, dan
                      mudah digunakan.
                    </p>
                  </div>
                </section>

                {/* How To Use Section */}
                <section className="py-20" id="cara-pakai">
                  <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-blue-500 mb-12">
                      Cara Pakai
                    </h2>
                    <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
                      {[
                        {
                          step: 1,
                          title: "Daftar Akun",
                          desc: "Masukkan nama, email, dan buat kata sandi untuk memulai.",
                        },
                        {
                          step: 2,
                          title: "Login ke Aplikasi",
                          desc: "Gunakan akun yang sudah dibuat untuk masuk.",
                        },
                        {
                          step: 3,
                          title: "Isi Form Kesehatan",
                          desc: "Lengkapi data: usia, tekanan darah, riwayat penyakit, BMI, HbA1c, dan glukosa darah.",
                        },
                        {
                          step: 4,
                          title: "Klik Prediksi",
                          desc: 'Tekan tombol "Proses" untuk menjalankan analisis otomatis.',
                        },
                        {
                          step: 5,
                          title: "Lihat Hasil Deteksi",
                          desc: "Dapatkan hasil prediksi risiko diabetes, lengkap dengan skor, faktor risiko, dan rekomendasi awal.",
                        },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start">
                          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            {item.step}
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Copyright © 2025</p>
            <div className="space-x-4">
              <a href="/#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
              <a href="/#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

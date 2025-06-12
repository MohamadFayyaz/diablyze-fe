import type { FC } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface Step {
  step: number;
  title: string;
  desc: string;
}

const steps: Step[] = [
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
];

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* ========================================= */}
      {/* Hero Section */}
      {/* ========================================= */}
      <section
        style={{
          backgroundImage: "url('/images/Background.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="
          flex flex-row 
          items-center 
          justify-between 
          px-4 sm:px-6 md:px-12 lg:px-20 
          py-12 sm:py-16 md:py-20
          mx-auto 
          max-w-7xl
        "
      >
        {/* Teks Judul, Deskripsi, dan Tombol */}
        <div className="w-full sm:w-1/2 flex flex-col items-start text-left pr-4 sm:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
            <span className="text-blue-500">Solusi Mudah</span>
            <br />
            <span className="text-gray-900">untuk Deteksi diabetes</span>
          </h1>
          <p className="text-gray-500 font-semibold sm:text-lg md:text-xl mb-6">
            Memprediksi diabetes berdasarkan riwayat medis dan data demografis pasien.
          </p>
          <Link to="/input">
            <button className="
            inline-flex items-center 
            bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] 
            text-white 
            px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 
            rounded-full 
            hover:from-[#6F3AFA] hover:to-[#3A8EF6] 
            transition 
            font-bold
          ">
              Mulai
              <Heart className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </Link>
        </div>

        {/* Gambar Ilustrasi Dokter */}
        <div className="hidden sm:flex w-1/2 justify-center pl-4 sm:pl-8">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/images/illustrasi-dokter.png"
              alt="Ilustrasi Dokter"
              className="w-full h-auto object-contain rounded-2xl"
            />
            {/* Lingkaran ungu di belakang */}
            <div
              className="
                absolute -z-10 top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 
                w-[200px] sm:w-[250px] md:w-[300px] 
                h-[200px] sm:h-[250px] md:h-[300px] 
                bg-purple-200 rounded-full opacity-50
              "
            />
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* Features Section */}
      {/* ========================================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 
          font-bold uppercase tracking-widest mb-12 
          bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] 
          bg-clip-text text-transparent">
            Features We Provide
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-3">Deteksi Mudah</h3>
              <p className="text-gray-500 font-bold leading-relaxed">
                Kami mendeteksi diabetes Anda berdasarkan Hipertensi, BMI, dan lainnya.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-3">Klasifikasi Resiko</h3>
              <p className="text-gray-500 font-bold leading-relaxed">
                Kami melakukan klasifikasi dari input Anda menjadi resiko diabetes.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-3">Rekomendasi Awal</h3>
              <p className="text-gray-500 font-bold leading-relaxed">
                Kami memberikan rekomendasi awal dari input yang Anda masukkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* About Section */}
      {/* ========================================= */}
      <section className="w-full ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <h2 className="text-3xl md:text-4xl lg:text-5xl 
          font-bold uppercase tracking-widest mb-12 
          bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] 
          bg-clip-text text-transparent">
            Tentang Kami
          </h2>
          <div className="w-full p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-gray-500 font-semibold mb-6 text-base md:text-lg leading-relaxed">
              <span className="text-black font-bold">Diablyze</span> adalah platform pintar
              berbasis teknologi <span className="text-black font-bold">kecerdasan buatan (AI)</span>
              yang dirancang untuk membantu pengguna mendeteksi risiko diabetes secara cepat dan akurat.
              Dengan memanfaatkan data kesehatan sederhana seperti riwayat medis dan informasi demografis,
              Diablyze mampu memberikan prediksi dan rekomendasi awal yang dapat membantu Anda mengambil
              langkah pencegahan lebih dini.
            </p>
            <p className="text-gray-500 font-semibold text-base md:text-lg leading-relaxed">
              Kami percaya bahwa <span className="text-black font-bold">deteksi dini adalah kunci</span>
              dalam mengelola diabetes, dan setiap orang berhak memiliki akses terhadap alat kesehatan yang
              cerdas, praktis, dan mudah digunakan.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* How To Use Section */}
      {/* ========================================= */}
      <section className="py-20" id="cara-pakai">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 
          font-bold uppercase tracking-widest mb-12 
          bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] 
          bg-clip-text text-transparent">
            Cara Pakai
          </h2>
          <div className="p-8 md:p-12 rounded-2xl shadow-lg space-y-8">
            {steps.map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg md:text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-semibold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

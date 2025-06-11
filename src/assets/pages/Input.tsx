import { useState } from "react";
import { Link } from "react-router-dom";

export default function Input() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    hypertension: "",
    bmi: "",
    heartDisease: "",
    glucose: "",
    smoking: "",
    hba1c: "",
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect  ML API
    // For now, we simulate a positive result
    setResult("POSITIF");
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto ">
          <h1 className="text-3xl font-bold text-left text-gray-800 mb-4">
            Deteksi Risiko Diabetes
          </h1>

          <p className="text-left text-[#8A8585] mb-10 font-medium">
            Masukkan data untuk melihat kemungkinan risiko diabetes berdasarkan
            <br />
            analisis kecerdasan buatan.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Jenis Kelamin
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Umur
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tahun"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Hipertensi
                  </label>
                  <select
                    name="hypertension"
                    value={formData.hypertension}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Pilih Status</option>
                    <option value="yes">Ya</option>
                    <option value="no">Tidak</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Indeks Masa Tubuh (BMI)
                  </label>
                  <input
                    type="number"
                    name="bmi"
                    value={formData.bmi}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="kg/m²"
                    step="0.1"
                    required
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Penyakit Jantung
                  </label>
                  <select
                    name="heartDisease"
                    value={formData.heartDisease}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Pilih Status</option>
                    <option value="yes">Ya</option>
                    <option value="no">Tidak</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Kadar Glukosa Darah
                  </label>
                  <input
                    type="number"
                    name="glucose"
                    value={formData.glucose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="mg/dL"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Riwayat Merokok
                  </label>
                  <select
                    name="smoking"
                    value={formData.smoking}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Pilih Status</option>
                    <option value="never">Tidak Pernah</option>
                    <option value="former">Pernah</option>
                    <option value="current">Masih Merokok</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Tingkat HbA1c
                  </label>
                  <input
                    type="number"
                    name="hba1c"
                    value={formData.hba1c}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="%"
                    step="0.1"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 text-left">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#C58BF2] to-[#EEA4CE] text-white font-medium py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity"
              >
                Deteksi Sekarang
              </button>
            </div>
          </form>

          {result && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-xl font-medium">
                Anda kemungkinan{" "}
                <span className="font-bold text-red-600">{result}</span>{" "}
                diabetes.
              </p>
              <p className="text-gray-600 mt-2">
                Harap konsultasikan dengan dokter.
              </p>
              <Link
                to="/"
                className="inline-block mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-full transition"
              >
                Kembali ke Beranda
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

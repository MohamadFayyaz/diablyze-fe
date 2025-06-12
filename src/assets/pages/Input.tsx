import React, { useState } from "react";
import { Link } from "react-router-dom";
import { predictService } from "../../services/api";

interface FormData {
  gender: string;
  age: string;
  hypertension: string;
  bmi: string;
  heartDisease: string;
  glucose: string;
  smoking: string;
  hba1c: string;
}

export default function Input() {
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    age: "",
    hypertension: "",
    bmi: "",
    heartDisease: "",
    glucose: "",
    smoking: "",
    hba1c: "",
  });

  // pesan error validasi per-field dari server
  const [errors, setErrors] = useState<Record<string, string>>({});

  // hasil prediksi & pesan diagnostik
  const [result, setResult] = useState<string | null>(null);
  const [diagnostic, setDiagnostic] = useState<string | null>(null);

  // error umum dari server
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // perbarui nilai field
    setFormData((prev) => ({ ...prev, [name]: value }));

    // hapus pesan error validasi untuk field ini
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // destrukturisasi supaya tiap field ada dalam scope
    const {
      gender,
      age,
      hypertension,
      bmi,
      heartDisease,
      glucose,
      smoking,
      hba1c,
    } = formData;

    // buat payload dengan key snake_case sesuai API
    const payload = {
      gender,
      age,
      hypertension,
      heart_disease: heartDisease,
      smoking_history: smoking,
      bmi,
      blood_glucose_level: glucose,
      HbA1c_level: hba1c,
    };

    try {
      // bersihkan result lama
      setResult("");
      setDiagnostic("");

      // Panggil API
      const response = await predictService.predict(payload);

      // bersihkan error lama
      setErrors({});
      setError("");

      // interpretasi hasil prediksi
      const predictionText =
        response.data.prediction === 1 ? "POSITIF" : "NEGATIF";

      setResult(predictionText);
      setDiagnostic(response.data.diagnostic);
    } catch (err: any) {
      // jika server mengembalikan array error validasi
      const apiErrors: any[] = err.response?.data?.errors;
      if (Array.isArray(apiErrors)) {
        const fieldErrors = apiErrors.reduce<Record<string, string>>(
          (acc, cur) => {
            acc[cur.path] = cur.msg;
            return acc;
          },
          {}
        );
        setErrors(fieldErrors);
      } else {
        // fallback error umum
        setError("Server sedang gangguan");
      }
    }
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

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

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
                    <option value="1">Laki-laki</option>
                    <option value="0">Perempuan</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.gender}
                    </p>
                  )}
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
                  {errors.age && (
                    <p className="text-red-600 text-sm mt-1">{errors.age}</p>
                  )}
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
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                  </select>
                  {errors.hypertension && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.hypertension}
                    </p>
                  )}
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
                  {errors.bmi && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.bmi}
                    </p>
                  )}
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
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                  </select>
                  {errors.heart_disease && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.heart_disease}
                    </p>
                  )}
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
                  {errors.blood_glucose_level && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.blood_glucose_level}
                    </p>
                  )}
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
                    <option value="0">Tidak Pernah</option>
                    <option value="1">Pernah</option>
                    <option value="2">Merokok Sekarang</option>
                    <option value="3">Berhenti</option>
                    <option value="4">Tidak Diketahui</option>
                  </select>
                  {errors.smoking_history && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.smoking_history}
                    </p>
                  )}
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
                  {errors.HbA1c_level && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.HbA1c_level}
                    </p>
                  )}
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
                {diagnostic}
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

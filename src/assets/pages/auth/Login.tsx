import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.login({ email, password });
      login(response.data.token);
      navigate("/");
    } catch (err) {
      setError("Email atau password salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-stretch justify-between gap-8 relative z-10">
        {/* Kiri - Intro & Link + Bubble Background */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:items-start">
          {/* Bubble jadi background */}
          <img
            src="/images/bubble-1.png"
            alt="Bubbles"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 opacity-100 pointer-events-none z-0"
          />

          {/* Teks di atas bubble */}
          <div className="relative text-center lg:text-left z-10">
            <p className="text-black-100 mb-6 text-4xl font-bold">
              Masuk untuk
              <br />
              mulai mendeteksi
            </p>
            <p className="text-black-500">
              Jika belum memiliki akun <br />
              silahkan&nbsp;
              <Link
                to="/register"
                className="text-blue-500 font-bold hover:underline"
              >
                Daftar disini!
              </Link>
            </p>
          </div>
        </div>

        {/* Kanan - Form Login */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full overflow-hidden p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Selamat Datang!
            </h2>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan email"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

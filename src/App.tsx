import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import LandingPage from "./assets/components/LandingPage";
import Login from "./assets/pages/auth/Login";
import Register from "./assets/pages/auth/Register";
import "./App.css";

const App: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600">
          {/* Copyright */}
          <p className="text-sm md:text-base">&copy; 2025 Diablyze</p>

          {/* Hak cipta & tautan */}
          <div className="mt-4 md:mt-0 space-x-4 text-sm md:text-base">
            <span>All Rights Reserved</span>
            <a href="/#" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>
            <a href="/#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

// src/assets/components/Navbar.tsx

import { useState } from "react";
import { Stethoscope, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  showAuthButtons?: boolean;
}

export default function Navbar({ showAuthButtons = true }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (id?: string) => {
    // Jika ada id, scroll ke section. Jika tidak, scroll ke atas.
    if (location.pathname === "/" && id) {
      scrollToSection(id);
    } else if (location.pathname === "/" && !id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id) {
      // Pindah halaman dulu, lalu tambahkan hash
      window.location.href = `/#${id}`;
    } else {
      // Pindah halaman ke root
      window.location.href = "/";
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-transparent px-6 md:px-12 lg:px-20 py-4 font-semibold">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Stethoscope className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-2xl font-bold text-blue-500">
            Diablyze
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Home */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick();
            }}
            className={`text-gray-600 hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500" : ""
              }`}
          >
            Home
          </button>

          {/* Cara Pakai */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("cara-pakai");
            }}
            className="text-gray-600 hover:text-blue-500"
          >
            Cara Pakai
          </button>

          {/* Tombol Masuk */}
          {showAuthButtons && (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Masuk
            </Link>
          )}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className="h-8 w-8 text-gray-700" />
            ) : (
              <Menu className="h-8 w-8 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick();
              }}
              className={`text-gray-700 hover:text-blue-500 text-lg text-left ${location.pathname === "/" ? "text-blue-500" : ""
                }`}
            >
              Home
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("cara-pakai");
              }}
              className="text-gray-700 hover:text-blue-500 text-lg text-left"
            >
              Cara Pakai
            </button>
            {showAuthButtons && (
              <Link
                to="/login"
                className="mt-2 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  showAuthButtons?: boolean;
}

export default function Navbar({ showAuthButtons = true }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Stethoscope className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-2xl font-bold text-blue-500">
            Diablyze
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-500"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>

          <a
            href="#cara-pakai"
            className="text-gray-600 hover:text-blue-500"
            onClick={(e) => {
              if (window.location.pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#cara-pakai";
              } else {
                e.preventDefault();
                scrollToSection("cara-pakai");
              }
            }}
          >
            Cara Pakai
          </a>

          {showAuthButtons && (
            <Link
              to="/login"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

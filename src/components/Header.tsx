import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink"; // ✅ YOUR CUSTOM NAVLINK

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Head Spa", href: "/head-spa" },
    { name: "Contact", href: "/contact" },
  ];

  const locationLinks = [
    { name: "Regent Park", href: "/locations/regents-park" },
    { name: "Nundah", href: "/locations/nundah" },
  ];

  const normalClass =
    "text-stone-700 font-semibold transition-colors hover:text-rose-400";

  const activeClass =
    "text-rose-500 border-b-2 border-rose-500 pb-1";

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-serif font-bold text-stone-800 hover:text-rose-400 transition"
          >
            E'LAN BEAUTY
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={normalClass}
                activeClassName={activeClass}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Location Dropdown */}
            <div className="relative group">
              <span className="text-stone-700 font-semibold hover:text-rose-400 cursor-pointer">
                Location
              </span>

              <div className="absolute left-0 mt-3 w-52 bg-white rounded-lg shadow-lg border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {locationLinks.map((loc) => (
                  <NavLink
                    key={loc.name}
                    to={loc.href}
                    className="flex items-center gap-3 px-4 py-3 text-stone-700 transition hover:bg-rose-50 hover:text-rose-500"
                    activeClassName="bg-rose-50 text-rose-500 font-semibold"
                  >
                    <MapPin size={18} />
                    {loc.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="px-6 py-2 rounded-lg font-semibold bg-rose-400 text-white hover:bg-rose-500 transition"
              activeClassName="bg-rose-500"
            >
              Book Now
            </NavLink>
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-700 hover:text-rose-400"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-semibold text-stone-700 hover:text-rose-400"
                activeClassName="text-rose-500"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Locations */}
            <div className="pt-3 border-t border-stone-200">
              <p className="text-sm font-semibold text-stone-500 mb-2">
                Locations
              </p>

              {locationLinks.map((loc) => (
                <NavLink
                  key={loc.name}
                  to={loc.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-stone-700 hover:text-rose-400"
                  activeClassName="text-rose-500 font-semibold"
                >
                  <MapPin size={18} />
                  {loc.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center py-2 rounded-lg font-semibold bg-rose-400 text-white hover:bg-rose-500 mt-4"
              activeClassName="bg-rose-500"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

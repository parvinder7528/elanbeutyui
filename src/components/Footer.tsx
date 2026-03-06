import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Instagram, Facebook, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Head Spa", href: "/head-spa" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-rose-50 to-pink-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <img
              alt="E'LAN BEAUTY"
              className="h-[6rem] w-auto mb-4"
              src="https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/6b4b2bb5c0d3709d1f9a587d46c4294a.png"
            />

            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              A sanctuary of beauty, artistry, and relaxation. Where elegance
              meets excellence in every treatment.
            </p>
            <div className="flex space-x-4">
              {/* Facebook Messenger */}
              <a
                href="#"
                aria-label="Facebook Messenger"
                className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  className="text-[20px]"
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[20px]" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-[20px]" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/head-spa"
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  Head Spa
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-rose-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Regents Park</h4>
                <p className="text-sm text-gray-600">Shop 5/57/61 Emerald Dr</p>
                <p className="text-sm text-gray-600">Regents Park QLD 4118</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Nundah</h4>
                <p className="text-sm text-gray-600">1220 Sandgate Rd</p>
                <p className="text-sm text-gray-600">Nundah QLD 4012</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-rose-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <a
            href="https://marketixmind.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-sm mb-4 md:mb-0 hover:text-rose-500 hover:underline transition"
          >
            ©️ 2024 E'LAN BEAUTY. All rights reserved. Developed by Maketix Mind.
          </a>
          {/* 
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://readdy.ai/?origin=logo"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              Website Builder
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

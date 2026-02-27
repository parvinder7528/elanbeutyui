import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingSection from "./booking/BookingSection";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/interior.jpg"
import image2 from "../assets/Nails1.jpg"
import image3 from "../assets/exterior2.jpg"
import image4 from "../assets/interior1.jpg"
import image5 from "../assets/DOS04474.jpg"
import image6 from "../assets/DOS04480.jpg"
import image7 from "../assets/DOS04707.jpg"

import image8 from "../assets/DOS04599.jpg"
import image9 from "../assets/DOS04528.jpg"
const Regents = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://readdy.ai/api/search-image?query=luxury%20beauty%20salon%20in%20Regents%20Park%20Queensland%2C%20elegant%20spa%20entrance%20with%20modern%20design%2C%20sophisticated%20wellness%20center%20with%20warm%20lighting%20and%20rose%20gold%20accents&width=1920&height=1080&seq=rphero&orientation=landscape")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            E'LAN BEAUTY
            <span className="block text-3xl md:text-4xl font-light mt-2 text-rose-200">
              Regents Park
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Your sanctuary of beauty and wellness in the heart of Regents Park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>navigate("/contact")
               
              }
              className="bg-rose-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-600 transition-colors whitespace-nowrap"
            >
              Book Your Appointment
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-gray-800 mb-6">
                About Our Regents Park Location
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nestled in the vibrant community of Regents Park, our flagship
                location offers a tranquil escape from the everyday. Our
                beautifully designed space combines modern luxury with warm
                hospitality, creating the perfect environment for your beauty
                journey.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With state-of-the-art facilities and a team of expert
                professionals, we provide personalized treatments that celebrate
                your unique beauty. Every detail has been carefully considered
                to ensure your comfort and satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-map-pin-line text-rose-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Shop 5/57/61 Emerald Dr
                    </p>
                    <p className="text-gray-600">Regents Park QLD 4118</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-line text-rose-500" />
                  </div>
                  <a
                    href="tel:+61 401788668"
                    className="text-gray-700 hover:text-rose-500 transition-colors"
                  >
                   +61 401788668
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-time-line text-rose-500" />
                  </div>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:30 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="E'LAN BEAUTY Regents Park Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
               src= {image3}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-rose-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* SECTION HEADER */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-gray-800 mb-4">
              Services &amp; Pricing
            </h2>
            <div className="w-24 h-px bg-[#c69c7e] mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services,
              designed to enhance your natural radiance.
            </p>
          </div>

          <div className="space-y-12">
            {/* ================= SPA & AESTHETICS ================= */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#c69c7e] px-8 py-6">
                <h3 className="text-2xl font-serif text-white">
                  Spa &amp; Aesthetics
                </h3>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["Signature Facial", "60 min", "$120"],
                  ["Anti-Aging Treatment", "75 min", "$150"],
                  ["Hydrating Facial", "45 min", "$95"],
                  ["Deep Cleansing Facial", "60 min", "$110"],
                ].map(([title, time, price], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-[#f4ece6] transition"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">{title}</h4>
                      <p className="text-sm text-gray-600">{time}</p>
                    </div>
                    <p className="font-semibold text-[#c69c7e]">{price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= NAILS ================= */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#c69c7e] px-8 py-6">
                <h3 className="text-2xl font-serif text-white">Nails</h3>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["Gel Manicure", "45 min", "$45"],
                  ["Gel Pedicure", "60 min", "$55"],
                  ["Nail Art", "30 min", "$25"],
                  ["French Manicure", "45 min", "$50"],
                ].map(([title, time, price], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-[#f4ece6] transition"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">{title}</h4>
                      <p className="text-sm text-gray-600">{time}</p>
                    </div>
                    <p className="font-semibold text-[#c69c7e]">{price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= HEAD SPA ================= */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#c69c7e] px-8 py-6">
                <h3 className="text-2xl font-serif text-white">Head Spa</h3>
              </div>

              <div className="p-8 space-y-10">
                {/* HEAD SPA EXPERIENCE */}
                <div className="border border-gray-100 rounded-xl p-6 hover:bg-[#f4ece6] transition">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      Head Spa Classic
                    </h4>
                    <span className="text-2xl font-bold text-[#c69c7e]">
                      $120*
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">60 min</p>

                  <h5 className="font-medium text-gray-800 mb-2">
                    Treatment Includes:
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>
                      • Washing Your Face & Applying Eye Herbs (Stress Relief &
                      Dark Circles Treatment)
                    </li>
                    <li>• Massage & Acupressure to Relax the Head</li>
                    <li>• Neck, Shoulder & Nape Massage</li>
                    <li>• Washing Your Hair Twice</li>
                    <li>• Hair Care & Head Massage</li>
                    <li>• Hair Drying & Hair Serum Application</li>
                  </ul>

                  <p className="text-xs text-gray-500 italic mt-3">
                    *Additional charges may apply for long hair from $20
                  </p>
                </div>

                {/* HEAD SPA PREMIUM */}
                <div className="border border-gray-100 rounded-xl p-6 hover:bg-[#f4ece6] transition">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      Head Spa Advance
                    </h4>
                    <span className="text-2xl font-bold text-[#c69c7e]">
                      $150*
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">90 min</p>

                  <h5 className="font-medium text-gray-800 mb-2">
                    Treatment Includes:
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>
                      • Includes All Features of the Shampoo Relaxation Pack,
                      Plus
                    </li>
                    <li>
                      • Meridian Clearance in the Head, Head Massage &
                      Relaxation Acupressure
                    </li>
                    <li>
                      • Application of Eye Herbs to Relieve Stress & Treat Dark
                      Circles
                    </li>
                    <li>
                      • Facial Cleansing & Face Lifting Massage with Our
                      Exclusive Massage Cream
                    </li>
                    <li>• Moisturizing Face Mask</li>
                    <li>• Hand, Neck & Shoulder Massage</li>
                  </ul>

                  <p className="text-xs text-gray-500 italic mt-3">
                    *Additional charges may apply for long hair from $20
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              Gallery
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our gallery of transformations and discover the artistry
              that awaits you.
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt="Elegant Nail Art"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image4}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
            <div className="break-inside-avoid cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt="Hair Transformation"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image5}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
            <div className="break-inside-avoid cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt="Radiant Skin"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image6}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
            <div className="break-inside-avoid cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt="Makeup Artistry"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image7}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
            <div className="break-inside-avoid cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt="Spa Experience"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image8}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
            <div className="break-inside-avoid cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt="Salon Interior"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  src={image9}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Real experiences from our valued Regents Park clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The most relaxing facial I've ever had. The staff at Regents
                Park are incredibly skilled and the atmosphere is so peaceful."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Sarah Mitchell</p>
                <p className="text-sm text-gray-500">
                  Signature Facial • 2 weeks ago
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Amazing transformation! The stylists really listened to what I
                wanted and delivered beyond my expectations."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Emma Thompson</p>
                <p className="text-sm text-gray-500">
                  Hair Color &amp; Cut • 1 month ago
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-star-fill text-yellow-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Perfect nails every time. The attention to detail and quality
                of service is outstanding."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Jessica Chen</p>
                <p className="text-sm text-gray-500">
                  Gel Manicure • 3 weeks ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingSection />
      <Footer />
    </>
  );
};

export default Regents;

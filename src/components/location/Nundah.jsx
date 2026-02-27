import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/DOS04528.jpg"
import image2 from "../../assets/DOS04599.jpg"
import image3 from "../../assets/DOS04706.jpg"
import image4 from "../../assets/DOS04528.jpg"
import image5 from "../../assets/exterior4.jpg"
import image6 from "../../assets/exterior2.jpg"
import image7 from "../../assets/DOS04593.jpg"
import image8 from "../../assets/interior.jpg"
import BookingSection from "../booking/BookingSection";

const Nundah = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://readdy.ai/api/search-image?query=sophisticated%20beauty%20salon%20in%20Nundah%20Queensland%2C%20modern%20luxury%20spa%20exterior%20with%20elegant%20signage%2C%20professional%20wellness%20center%20with%20contemporary%20architecture&width=1920&height=1080&seq=ndhero&orientation=landscape")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            E'LAN BEAUTY
            <span className="block text-3xl md:text-4xl font-light mt-2 text-rose-200">
              Nundah
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience luxury beauty services with extended hours for your
            convenience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate("/contact")} className="bg-rose-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-600 transition-colors whitespace-nowrap">
              Book Your Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors whitespace-nowrap">
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
                About Our Nundah Location
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located on the bustling Sandgate Road, our Nundah location is
                designed for the modern lifestyle. With extended operating hours
                and expanded services, we cater to busy professionals and beauty
                enthusiasts alike.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our spacious, contemporary facility features the latest in
                beauty technology and wellness amenities. From advanced skincare
                treatments to precision hair styling, every service is delivered
                with the highest standards of excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-map-pin-line text-rose-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      1220 Sandgate Rd
                    </p>
                    <p className="text-gray-600">Nundah QLD 4012</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-phone-line text-rose-500" />
                  </div>
                  <a
                    href="tel:(07) 3456 7890"
                    className="text-gray-700 hover:text-rose-500 transition-colors"
                  >
                    (04)20 988 668
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-1">
                    <i className="ri-time-line text-rose-500" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Monday - Wednesday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">
                      Thursday - Friday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-700">Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="E'LAN BEAUTY Nundah Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                src={image8}
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-gray-800 mb-4">Gallery</h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Discover the beauty and sophistication of our Nundah location
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Nundah Gallery 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src={image1}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Nundah Gallery 2"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                src={image7}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Nundah Gallery 3"

                src={image3}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Nundah Gallery 4"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                 src={image4}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Nundah Gallery 5"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                 src={image5}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                alt="E'LAN BEAUTY Nundah Gallery 6"
              
               src={image8}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              Hear from our satisfied clients at our Nundah location
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
                "The team at Nundah are absolute artists! My hair has never
                looked better. The extended hours make it so convenient too."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Rachel Williams</p>
                <p className="text-sm text-gray-500">
                  Hair Color &amp; Extensions • 1 week ago
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
                "What an incredible experience! The facilities are top-notch and
                the staff made me feel so pampered and relaxed."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Sophie Anderson</p>
                <p className="text-sm text-gray-500">
                  Spa Package • 2 weeks ago
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
                "Perfect nails every single time. The nail technicians are so
                skilled and the designs are always flawless."
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-800">Maria Rodriguez</p>
                <p className="text-sm text-gray-500">
                  Acrylic Nails • 1 month ago
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

export default Nundah;

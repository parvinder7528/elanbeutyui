import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingSection from "./booking/BookingSection.js";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/interior.jpg"
import image2 from "../assets/Nails1.jpg"
import image3 from "../assets/exterior2.jpg"
import image4 from "../assets/interior1.jpg"
import image5 from "../assets/DOS04474.jpg"
import image6 from "../assets/DOS04480.jpg"
import image7 from "../assets/DOS04707.jpg"

import image8 from "../assets/elan beauty/nail nundah.jpg"
import image10 from "../assets/elan beauty/nai nundah3.jpg"
import image9 from "../assets/elan beauty/regent park.jpg"
import ServicesCard from "../components/servicesCard/serviceCard.jsx"
import regBenner from "../assets/elan beauty/regent park.jpg"
const services = [
  // === SPA PEDICURE ===
  {
    name: "E'lan Regular Pedicure",
    category: "Spa Pedicure",
    duration: "30-35 mins",
    price: 45,
    description: "Enjoy our rejuvenating E'lan pedicure, designed to invigorate & refresh your feet:",
    features: [
      "Sea salt for relaxation",
      "Expert cuticle removal",
      "Buffing and shaping",
      "Callus removal",
      "Relaxation massage for feet and lower legs",
      "Hydrating softener cream",
      "Regular Polish included",
    ],
  },


  {
    name: "E'lan Premium Pedicure",
    category: "Spa Pedicure",
    duration: "45-50 mins",
    price: 60,
    description: "Indulge in our luxurious E'lan Luxury Pedicure, a lavish treatment to pamper your feet:",
    features: [
      "Pink sea salt soak for relaxation",
      "Natural fruit and flower soak",
      "Expert cuticle removal",
      "Buffing and shaping",
      "Exfoliating scrubs and callus removal",
      "Steam treatment for deep cleaning",
      "Feet and legs mask for ultimate hydration",
      "Relaxation massage for feet and legs with candle oil",
      "Nourishing moisture",
      "Regular polish included",
    ],
  },
  // Pedicure Additional Services
  { name: "French Tip (Toes)", category: "Pedicure Add-ons", price: 15 },
  { name: "Buffing, Shape & Shellac/Gel Only on Toes", category: "Pedicure Add-ons", price: 35 },
  { name: "Take Off Shellac/Gel on Toes (Single Service)", category: "Pedicure Add-ons", price: 15 },

  // === MANICURE ===
  {
    name: "E'lan Classic Manicure",
    category: "Manicure",
    duration: "25-30 mins",
    price: 40,
    description: "Revel in our signature E'lan Manicure:",
    features: [
      "Softener soak to nourish your skin",
      "Expert cuticle removal for a clean finish",
      "Precise buffing, shaping, and cuticle oil application",
      "Relaxation massage to soothe tired hands",
      "Hydrating softener cream",
      "Polish included for a flawless finish",
    ],
  },

  {
    name: "E'lan Premium Manicure",
    category: "Manicure",
    duration: "45-50 mins",
    price: 55,
    description: "Pamper yourself with our E'lan Luxury Manicure, an indulgent experience featuring:",
    features: [
      "Fruit & flowers soak to soothe and refresh",
      "Expert cuticle removal and meticulous shaping",
      "Buffing, shaping and cuticle oil application",
      "Exfoliating hand mask for rejuvenated skin",
      "Nourishing moisturizer",
      "Polish included for a perfect finish",
      "Hand mask for deep hydration",
      "Relaxation massage with candle oil",
    ],
  },
  // Manicure Additional Services
  { name: "French Tip (Nails)", category: "Manicure Add-ons", price: 15 },
  { name: "Buffing, Shape & Shellac/Gel Only on Nails", category: "Manicure Add-ons", price: 35 },
  { name: "Take Off Shellac/Gel on Nails (Single Service)", category: "Manicure Add-ons", price: 15 },

  // === ACRYLIC EXTENSIONS ===
  {
    name: "Full Set Acrylic Extensions with Polish",
    category: "Acrylic Extensions Nails",
    price: 55,
    description: "Achieve stunning acrylic nails with our full set extension service, including polish:",
    features: [
      "Customized acrylic extension application",
      "Expert shaping and length customization",
      "Choice of polish colour",
    ],
  },



  {
    name: "Overlay on Natural Nails with Polish",
    category: "Acrylic Extensions Nails",
    price: 50,
    description: "Enhance the natural beauty of your nails with an acrylic overlay, including polish:",
    features: [
      "Overlay application on natural nails",
      "Expert shaping and polishing",
    ],
  },




  {
    name: "Acrylic Refill",
    category: "Acrylic Extensions Nails",
    price: 40,
    description: "Maintain the beauty of your acrylic nails with our refill service:",
    note: "Price may vary based on growth",
    features: [
      "Re-balancing of acrylic overlay",
      "Shaping and polishing",
    ],
  },
  // Acrylic Additional Services
  { name: "Shellac/Gel Polish", category: "Acrylic Add-ons", price: 15 },
  { name: "Take Off Acrylic Nails", category: "Acrylic Add-ons", price: 20 },
  { name: "French Tip", category: "Acrylic Add-ons", price: 15 },
  { name: "1-2 Nails Fix", category: "Acrylic Add-ons", price: 5 },
  { name: "Designer Nail (Each)", category: "Acrylic Add-ons", price: 5 },
  { name: "3-4 Nails Fix", category: "Acrylic Add-ons", price: 10 },
  { name: "Soak Off Acrylic Nails", category: "Acrylic Add-ons", price: 25 },
  { name: "XL Length", category: "Acrylic Add-ons", price: 5 },
  { name: "XXL Length", category: "Acrylic Add-ons", price: 10 },

  // === GEL BUILDER ===
  {
    name: "Gel Builder Extension with Polish",
    category: "Gel Builder",
    price: 65,
    description: "Get beautiful gel builder extensions with a polish finish:",
    features: [
      "Customized gel builder extension application",
      "Expert shaping and length customization",
      "Choice of polish color",
    ],
  },
  {
    name: "Gel Builder Overlay on Natural Nails with Polish",
    category: "Gel Builder",
    price: 60,
    description: "Enhance the natural beauty of your nails with an overlay, including polish:",
    features: [
      "Overlay application on natural nails",
      "Expert shaping and polishing",
    ],
  },
  {
    name: "Gel Builder Refill",
    category: "Gel Builder",
    price: 55,
    description: "Maintain the beauty of your gel builder nails with our refill service:",
    features: [
      "Re-balancing of gel builder overlay",
      "Shaping and polishing",
    ],
  },
  // Gel Builder Additional Services
  { name: "Shellac/Gel Polish", category: "Gel Builder Add-ons", price: 15 },
  { name: "1-2 Nail Fix", category: "Gel Builder Add-ons", price: 5 },
  { name: "French Tip", category: "Gel Builder Add-ons", price: 15 },
  { name: "3-4 Nail Fix", category: "Gel Builder Add-ons", price: 10 },
  { name: "Designer Nail (Each)", category: "Gel Builder Add-ons", price: 5 },
  { name: "XL Length", category: "Gel Builder Add-ons", price: 5 },
  { name: "Soak Off Gel Builder", category: "Gel Builder Add-ons", price: 25 },
  { name: "XXL Length", category: "Gel Builder Add-ons", price: 10 },

  // === SNS POWDER ===
  {
    name: "SNS Full Set Extension",
    category: "SNS Powder",
    price: 70,
    description: "Achieve flawless nails with our full set of SNS powder extensions.",
  },
  {
    name: "SNS Overlay on Natural Nails with Polish",
    category: "SNS Powder",
    price: 65,
    description: "Enhance the natural beauty of your nails with SNS overlay, including polish.",
  },
  {
    name: "SNS Refill",
    category: "SNS Powder",
    price: 55,
    description: "Maintain your SNS powder nails with our refill service.",
  },
  // SNS Additional Services
  { name: "Shellac/Gel Polish", category: "SNS Add-ons", price: 15 },
  { name: "1-2 Nail Fix", category: "SNS Add-ons", price: 5 },
  { name: "French Tip", category: "SNS Add-ons", price: 15 },
  { name: "3-4 Nail Fix", category: "SNS Add-ons", price: 10 },
  { name: "Designer Nail (Each)", category: "SNS Add-ons", price: 5 },
  { name: "XL Length", category: "SNS Add-ons", price: 5 },
  { name: "Soak Off SNS", category: "SNS Add-ons", price: 25 },
  { name: "XXL Length", category: "SNS Add-ons", price: 10 },

  // === GEL X ===
  {
    name: "Gel X Extensions",
    category: "Gel X",
    price: 75,
    description: "Get stunning Gel X extensions for your nails:",
    features: ["Application of Gel X extensions"],
  },
  {
    name: "Customized Nail Art",
    category: "Gel X",
    price: 0,
    description: "Seek a quote for customized nail art based on online pictures from our staff.",
    note: "Price on consultation",
  },
  // Gel X Additional Services
  { name: "Shellac/Gel Polish", category: "Gel X Add-ons", price: 15 },
  { name: "1-2 Nail Fix", category: "Gel X Add-ons", price: 5 },
  { name: "French Tip", category: "Gel X Add-ons", price: 15 },
  { name: "3-4 Nail Fix", category: "Gel X Add-ons", price: 10 },
  { name: "Designer Nail (Each)", category: "Gel X Add-ons", price: 5 },
  { name: "XL Length", category: "Gel X Add-ons", price: 5 },
  { name: "Soak Off Gel X", category: "Gel X Add-ons", price: 25 },
  { name: "XXL Length", category: "Gel X Add-ons", price: 10 },

  // === INDULGE HAIR SPA ===
  {
    name: "Indulge Head Spa Classic",
    category: "Indulge Head Spa",
    duration: "50 mins",
    price: 100,
    description: "A classic Head spa experience:",
    features: [
      "Washing your face and applying eye herbs to relieve stress and treat under-eye dark circles",
      "Massage and acupressure to relax the head",
      "Neck, shoulder, and nape massage",
      "Washing your hair twice",
      "Hair care and head massage",
      "Hair drying and hair serum application",
    ],
  },



  {
    name: "Indulge Hair Spa Advance",
    category: "Indulge Hair Spa",
    duration: "75 mins",
    price: 125,
    description: "Includes all features of the Classic pack, plus:",
    features: [
      "Meridian clearance in the head, head massage, and relaxation acupressure",
      "Application of eye herbs to relieve stress and treat dark circles",
      "Facial cleansing and face lifting massage with our exclusive massage cream",
      "Moisturizing face mask",
      "Hand, neck, and shoulder massage",
    ],
  },
];
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
              `url(${regBenner})`,
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
              onClick={() => navigate("/contact")

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
                src={image3}
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

         <ServicesCard services={services}/>
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
                  src={image10}
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

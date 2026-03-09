import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/DOS04528.jpg"
import image2 from "../../assets/DOS04599.jpg"
import image3 from "../../assets/DOS04706.jpg"
import image4 from "../../assets/DOS04528.jpg"
import image5 from "../../assets/exterior4.jpg"
import  nundahBenner  from "../../assets/elan beauty/nundah interior5.jpg"
import image7 from "../../assets/DOS04593.jpg"
import image8 from "../../assets/interior.jpg"
import BookingSection from "../booking/BookingSection";
import ServicesCard from "../servicesCard/serviceCard";
const services = [
  // === SPA PEDICURE ===
  {
    name: "E'lan Regular Pedicure",
    category: "Spa Pedicure",
    duration: "30-35 mins",
    price: 50,
    description: "ENJOY OUR REJUVENATING ELAN PEDICURES DESIGNED TO INVIGORATE & REFRESH YOUR FEET:",
   features: [
        "Sea salt for relaxation",
        "Expert cuticle removal",
        "Buffing and shaping",
        "Callus removal",
        "Relaxation massage for feet and lower legs",
        "Hydrating softener cream",
        "Regular polish included"
      ]
  },


  {
    name: "E'lan Premium Pedicure",
    category: "Spa Pedicure",
    duration: "45-50 mins",
    price: 70,
    description: "INDULGE IN OUR. LUXURIOUS ELAN LUXURY PEDICURE,A LAVISH TREATMENT TO PAMPER YOUR FEET:",
    features: [
      "Pink sea salt soak for relaxation",
        "Natural fruit and flower soak",
        "Expert cuticle removal",
        "Buffing and shaping",
        "Exfoliating scrubs and callus removal",
        "Steam treatment for deep cleaning",
        "Feet and legs mask for ultimate hydration",
        "Relaxation massage with candle oil",
        "Nourishing moisture",
        "Regular polish included"
    ],
  },
  // Pedicure Additional Services
  { name: "French Tip (Toes)", category: "Pedicure Add-ons", price: 15 },
  { name: "Buffing, Shape & Shellac/Gel Only on Toes", category: "Pedicure Add-ons", price: 35 },
  { name: "Take Off Shellac/Gel on Toes (Single Service)", category: "Pedicure Add-ons", price: 15 },
   { name: " Shellac/Gel Polish", category: "Pedicure Add-ons", price: 15 },

  // === MANICURE ===
  {
    name: "E'lan Classic Manicure",
    category: "Manicure",
    duration: "25-30 mins",
    price: 45,
    description: "REVEL 1N OUR SIGNATURE ELAN MAN ICURE, METICULOUSLY CRAFTED TO PERFECTION;",
    features: [
     "Softener Soak To Nourish Your Skin",
	      "Expert Cuticle Removal For A Clean Finish",
	  "Precise Buffing, Shaping, And Cuticle Oil Application",
	  "Relaxation Massage To Soothe Tired Hands",
  "Hydrating Softener Cream",
	"Polish Included For A Flawless Finish"
    ],
  },

  {
    name: "E'lan Premium Manicure",
    category: "Manicure",
    duration: "45-50 mins",
    price: 65,
    description: "PAMPER YOURSELF WITH OURELAN LUXURY MANICURE. AN INDULGENT EXPERIENCE FEATURING!:",
    features: [
  "Fruit & flowers soak to soothe and refresh",
	"Expert cuticle removal and meticulous shaping" ,
   "Buffing, Shaping and Cuticle oil application ",
   "Exfoliating hand mask for rejuvenated skin ",
   " Nourishing C moisturizer",
 "Polish included fora perfect finish",
 "Hand Mask for deep hydration",
	"Relaxation massage with candle oil"
    ],
  },
  // Manicure Additional Services
  { name: "French Tip (Nails)", category: "Manicure Add-ons", price: 15 },
  { name: "Buffing, Shape & Shellac/Gel Only on Nails", category: "Manicure Add-ons", price: 35 },
  { name: "Take Off Shellac/Gel on Nails (Single Service)", category: "Manicure Add-ons", price: 15 },
     { name: " Shellac/Gel Polish", category: "Manicure Add-ons", price: 15 },


  // === ACRYLIC EXTENSIONS ===
  {
    name: "Full Set Acrylic Extensions with Polish",
    category: "Acrylic Extensions Nails",
    price: 60,
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
    price: 55,
    description: "Enhance the natural beauty of your nails with an acrylic overlay, including polish:",
    features: [
      "Overlay application on natural nails",
      "Expert shaping and polishing",
    ],
  },




  {
    name: "Acrylic Refill",
    category: "Acrylic Extensions Nails",
    price: 45,
    description: "Maintain the beauty of your acrylic nails with our refill service:",
    note: "Price may vary based on growth",
    features: [
      "Re-balancing of acrylic overlay",
      "Shaping and polishing",
    ],
  },
  // Acrylic Additional Services
  { name: "Shellac/Gel Polish", category: "Acrylic Add-ons", price: 15 },
    { name: "French Tip", category: "Acrylic Add-ons", price: 15 },
  { name: "Designer Nail (Each)", category: "Acrylic Add-ons", price: 5 },
  { name: "Soak Off Acrylic Nails", category: "Acrylic Add-ons", price: 25 },
  { name: "Take Off Acrylic Nails", category: "Acrylic Add-ons", price: 20 },
  { name: "1-2 Nails Fix", category: "Acrylic Add-ons", price: 5 },
  { name: "3-4 Nails Fix", category: "Acrylic Add-ons", price: 10 },
  { name: "XL Length", category: "Acrylic Add-ons", price: 5 },
  { name: "XXL Length", category: "Acrylic Add-ons", price: 10 },

  // === GEL BUILDER ===
  {
    name: "Gel Builder Extension with Polish",
    category: "Gel Builder",
    price: 75,
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
    price: 70,
    description: "Enhance the natural beauty of your nails with an overlay, including polish:",
    features: [
      "Overlay application on natural nails",
      "Expert shaping and polishing",
    ],
  },
  {
    name: "Gel Builder Refill",
    category: "Gel Builder",
    price: 60,
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
    price: 75,
    description: "Achieve flawless nails with our full set of SNS powder extensions.",
  },
  {
    name: "SNS Overlay on Natural Nails with Polish",
    category: "SNS Powder",
    price: 70,
    description: "Enhance the natural beauty of your nails with SNS overlay, including polish.",
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
    name: "Indulge Hair Spa Classic",
    category: "Indulge Hair Spa",
    duration: "50 mins",
    price: 80,
    description: "A classic hair spa experience:",
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
    price: 95,
    description: "Includes all features of the Classic pack, plus:",
    features: [
      "Meridian clearance in the head, head massage, and relaxation acupressure",
      "Application of eye herbs to relieve stress and treat dark circles",
      "Facial cleansing and face lifting massage with our exclusive massage cream",
      "Moisturizing face mask",
      "Hand, neck, and shoulder massage",
    ],
  },
  {
    name: "Classic",
    category: "Indulge Hair Spa",
    duration: "50 mins",
    price: 120,
    features: [
      "Washing your face and applying eye herbs to relieve stress and treat under-eye dark circles.",
      "Massage and acupressure to relax the head.",
      "Neck, shoulder, and nape massage.",
      "Washing your hair twice.",
      "Hair care and head massage.",
      "Hair drying and hair serum application.",
    ],
  },
  {
    name: "Advance",
    category: "Indulge Hair Spa",
    duration: "75 mins",
    price: 150,
    features: [
      "Includes all features of the Shampoo Relaxation Pack, plus:",
      "Meridian clearance in the head, head massage, and relaxation acupressure.",
      "Application of eye herbs to relieve stress and treat dark circles.",
      "Facial cleansing and face lifting massage with our exclusive massage cream.",
      "Moisturizing face mask.",
      "Hand, neck, and shoulder massage.",
    ],
  },
];
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
              `url(${nundahBenner})`,
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
   <ServicesCard services={services}/>
          
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

import React, { useState } from 'react'
import Header from "../Header"
import Footer from "../Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faMusic,
  faSpa,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import interior from "@/assets/interior.jpg";
import interior1 from "@/assets/interior1.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";
import interior5 from "@/assets/interior5.jpg";
const hairSpaServices = [
  {
    type: "CLASSIC",
    locations: [
      {
        name: "Regents Park",
        duration: "60+ Minutes",
        price: 80,
      },
      {
        name: "Nundah",
        duration: "60+ Minutes",
        price: 120,
      },
    ],
    description:
      "A transformative journey that awakens your senses and restores your inner balance.",
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
    type: "ADVANCE",
    locations: [
      {
        name: "Regents Park",
        duration: "90+ Minutes",
        price: 95,
      },
      {
        name: "Nundah",
        duration: "90+ Minutes",
        price: 150,
      },
    ],
    description:
      "The ultimate indulgence — a complete wellness escape that rejuvenates mind, body, and spirit.",
    features: [
      "Includes all features of the Shampoo Relaxation Pack, plus:",
      "Meridian clearance in the head, head massage, and relaxation acupressure.",
      "Application of eye herbs to relieve stress and treat dark circles.",
      "Facial cleansing and face lifting massage with our exclusive massage cream",
      "Moisturizing face mask.",
      "Hand, neck, and shoulder massage.",
    ],
  },
];
const Headspa = () => {
  const [activeTab, setActiveTab] = useState("CLASSIC");

  const navigate = useNavigate();
  const selectedService = hairSpaServices.find(
    (service) => service.type === activeTab
  );
  const handleclick = () => {
    navigate("/contact");
  };
  return (
    <>
      <Header />
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={interior4}
            alt="Tranquil Head Spa Sanctuary"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            E&apos;LAN HEAD SPA
          </h1>

          <div className="w-32 h-px bg-rose-400 mx-auto mb-8" />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 tracking-wide">
            Where Tranquility Meets Transformation
          </h2>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 opacity-90">
            Escape into a sanctuary of pure serenity, where ancient wellness
            traditions meet modern luxury to restore your mind, rejuvenate your
            scalp, and awaken your senses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Book Your Appointment */}
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderRadius: "12px",
                cursor: "pointer",
                background: "linear-gradient(90deg, #6b3e2e, #4b2a1f)",
                boxShadow: "0 8px 24px rgba(75, 42, 31, 0.35)",
                transition: "all 0.3s ease",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #ff0000ff, #ff0000ff)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(75, 42, 31, 0.5)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #8b1240ff, #d41313ff)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(75, 42, 31, 0.35)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Begin Your Journey
            </a>

            {/* Contact Us (unchanged) */}

          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-8 leading-relaxed">
            Welcome to Your Personal Wellness Sanctuary
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-12" />
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            At E'LAN BEAUTY, we believe that true beauty begins with inner peace and
            wellness. Our Head Spa experience is more than a treatment—it's a
            transformative journey that honors the ancient art of scalp therapy while
            embracing the luxury you deserve.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Step away from the world and into a realm where time slows, stress melts
            away, and your natural radiance is gently awakened through the healing
            power of touch, premium botanicals, and expert care.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              The E'LAN Difference
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets our Head Spa apart is our commitment to creating an experience
              that transcends the ordinary, where every detail is crafted to nurture
              your wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <img
                  alt="Ancient Wisdom Modern Luxury"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                  src={interior}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-4">
                Ancient Wisdom, Modern Luxury
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our treatments blend time-honored scalp therapy techniques with
                cutting-edge wellness innovations, creating a perfect harmony of
                tradition and luxury.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <img
                  alt="Premium Botanical Products"
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                  src={interior1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-4">
                Premium Botanical Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We exclusively use the finest botanical ingredients and luxury
                products, carefully selected for their therapeutic properties and
                ability to nourish both scalp and soul.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <img
                  alt="Expert Therapists"

                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                  src={interior3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-4">
                Master Therapists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our highly trained therapists are artists of wellness, each bringing
                years of expertise and an intuitive understanding of the healing power
                of therapeutic touch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              The Transformative Benefits
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the profound benefits that extend far beyond beauty, touching
              every aspect of your wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-brain-line text-2xl text-rose-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gray-800 mb-3">
                    Stress Relief &amp; Mental Clarity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Release tension, quiet your mind, and emerge with renewed mental
                    clarity and emotional balance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i class="ri-star-line" style={{ fontSize: "40px", color: "red" }}></i>

                </div>
                <div>
                  <h3 className="font-serif text-xl text-gray-800 mb-3">
                    Scalp Health &amp; Rejuvenation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Improve circulation, remove toxins, and restore your scalp's
                    natural vitality for healthier, more beautiful hair.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="ri-heart-pulse-line text-2xl text-rose-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gray-800 mb-3">
                    Deep Relaxation &amp; Renewal
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience profound relaxation that rejuvenates your entire being,
                    leaving you refreshed and renewed.
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
            <i className="ri-sparkle-line text-2xl text-rose-500" />
          </div>
          <div>
            <h3 className="font-serif text-xl text-gray-800 mb-3">
              Enhanced Natural Beauty
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Awaken your natural radiance from within, as stress melts away and
              your inner glow is restored.
            </p>
          </div>
        </div> */}
            </div>
            <div className="relative">
              <img
                alt="Head Spa Benefits"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
                src={interior5}
              />
              <div style={{ zIndex: 9999999 }} className="style={{zIndex:9999999}}absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              Choose Your Journey
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect Head Spa experience tailored to your needs and
              desired level of indulgence.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-2 flex gap-2">
              <button
                onClick={() => setActiveTab("CLASSIC")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300
                ${activeTab === "CLASSIC"
                    ? "bg-rose-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-rose-100 hover:text-rose-600"
                  }`}
              >
                CLASSIC
              </button>

              <button
                onClick={() => setActiveTab("ADVANCE")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300
                ${activeTab === "ADVANCE"
                    ? "bg-rose-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-rose-100 hover:text-rose-600"
                  }`}
              >
                ADVANCE
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-[50rem] mx-auto">

            {selectedService && (
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-12 shadow-xl overflow-hidden">

                {/* Heading */}
                <div className="text-center mb-12">
                  <h3 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                    {selectedService.type}
                  </h3>

                  <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
                    {selectedService.description}
                  </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2  gap-3 gap-10 mb-12">

                  {selectedService.locations.map((loc, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-8 shadow-md border
          transform transition-all duration-300 ease-in-out
          hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
                    >
                      <h4 className="text-2xl font-semibold text-center mb-4">
                        {loc.name}
                      </h4>

                      <div className="flex justify-between mb-6">
                        <span className="text-gray-600">{loc.duration}</span>
                        <span className="text-2xl font-bold text-rose-600">
                          ${loc.price}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {selectedService.features.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-rose-500 mr-3">✔</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>

                     
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              A Journey for All Your Senses
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in a multi-sensory experience designed to transport you
              to a state of pure bliss and renewal.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Music */}
            <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="text-3xl text-rose-500"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Soothing Soundscapes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle melodies and nature sounds create the perfect acoustic
                environment for deep relaxation and mental escape.
              </p>
            </div>

            {/* Spa / Aroma */}
            <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon
                  icon={faSpa}
                  className="text-3xl text-rose-500"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Aromatherapy Bliss
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Carefully curated essential oils and botanical scents enhance your
                journey, promoting deeper relaxation and wellbeing.
              </p>
            </div>

            {/* Healing Touch */}
            <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-3xl text-rose-500"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Healing Touch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert therapeutic techniques and gentle pressure points work in
                harmony to release tension and restore balance.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
              Ready to Elevate Your Beauty Experience?
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Book your appointment today and discover the difference that true
              luxury and expertise can make.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Book Your Appointment */}
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderRadius: "12px",
                cursor: "pointer",
                background: "linear-gradient(90deg, #6b3e2e, #4b2a1f)",
                boxShadow: "0 8px 24px rgba(75, 42, 31, 0.35)",
                transition: "all 0.3s ease",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #4b2a1f, #6b3e2e)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(75, 42, 31, 0.5)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #6b3e2e, #4b2a1f)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(75, 42, 31, 0.35)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Book Your Appointment
            </a>

            {/* Contact Us (unchanged) */}
            <button
              onClick={handleclick}
              className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-primary-800 border-2 border-primary-800 hover:bg-primary-50 px-8 py-4 text-lg rounded-lg transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>


          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Call Us */}
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">Ready to book? Give us a call</p>
              <a href="tel:+61401788668" className="text-rose-500 font-medium hover:underline">
                +61 401788668
              </a>
              <br />
              <a href="tel:+61420988668" className="text-rose-500 font-medium hover:underline">
                +61 420988668
              </a>

            </div>

            {/* Opening Hours */}
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-xl"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Opening Hours
              </h3>
              <p className="text-gray-600">Monday - Sunday</p>
              <p className="text-rose-500 font-medium">9:30 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Headspa
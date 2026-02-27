// import { Footer } from "react-day-picker";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGift } from "@fortawesome/free-solid-svg-icons";
import SalonServices from "./booking/SalonServices"
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate= useNavigate()
  return (
    <>
    <Header/>
<section className="relative py-24 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
      Our Services &amp; Pricing
    </h1>
    <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
      Discover our comprehensive range of beauty services with transparent
      pricing. All prices are inclusive of taxes.
    </p>
    <div className="text-sm text-gray-500 bg-white/50 rounded-lg p-4 max-w-md mx-auto">
      <i className="ri-information-line text-rose-500 mr-2" />
      E'LAN – Elegant Beauty (Australia Menu | Sept 2025)
    </div>
  </div>
</section>
<SalonServices/>
<section className="py-24 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 leading-tight">
      Ready to Book Your Service?
    </h2>
    <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
      Contact us today to schedule your appointment and experience the E'LAN
      difference.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button onClick={() =>navigate("/contact")} className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-gradient-to-r from-rose-700 to-rose-800 text-white hover:from-rose-800 hover:to-rose-900 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-lg transform hover:scale-105">
        Book Your Appointment
      </button>
      <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-rose-800 border-2 border-rose-800 hover:bg-rose-50 px-8 py-4 text-lg rounded-lg transform hover:scale-105">
        Call Us: (07) 3000 0000
      </button>
    </div>
  </div>
</section>

<Footer/>
</>
  );
};

export default Services;

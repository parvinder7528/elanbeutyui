import React from 'react'

const Telephone = () => {
  return (
  <section className="py-24 bg-gradient-to-r from-rose-100 via-pink-50 to-rose-100">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className="mb-8">
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
        Ready to Elevate Your Beauty Experience?
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-8" />
      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
        Book your appointment today and discover the difference that true luxury
        and expertise can make.
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
  <button className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-primary-800 border-2 border-primary-800 hover:bg-primary-50 px-8 py-4 text-lg rounded-lg transform hover:scale-105">
    Contact Us
  </button>

 
</div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
      <div className="text-center">
        <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-phone-line text-white text-xl" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
        <p className="text-gray-600">Ready to book? Give us a call</p>
        <p className="text-rose-500 font-medium">(07) 3000 0000</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-time-line text-white text-xl" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Opening Hours</h3>
        <p className="text-gray-600">Monday - Sunday</p>
        <p className="text-rose-500 font-medium">9:00 AM - 8:00 PM</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Telephone
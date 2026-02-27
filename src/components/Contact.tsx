import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingSection from "./booking/BookingSection";
const businessData = [
  {
    id: 1,
    locationName: "Nundah",
    name: "E’lan Nails And Beauty",
    status: "Closed",
    mapQuery: "1220 Sandgate Rd, Nundah QLD 4012 Australia",
    hours: [
      { day: "Monday", open: "9:30 AM", close: "6:00 PM" },
      { day: "Tuesday", open: "9:30 AM", close: "6:00 PM" },
      { day: "Wednesday", open: "9:30 AM", close: "6:00 PM" },
      { day: "Thursday", open: "9:30 AM", close: "6:00 PM" },
      { day: "Friday", open: "9:30 AM", close: "8:00 PM" },
      { day: "Saturday", open: "9:30 AM", close: "5:30 PM" },
      { day: "Sunday", open: "9:30 AM", close: "4:00 PM" }
    ],
    address: {
      street: "1220 Sandgate Rd",
      city: "Nundah",
      state: "QLD",
      postcode: "4012",
      country: "Australia",
      floor: "Floor G"
    },
    phone: "+61420988668",
    email: "nundah@elanbeauty.com.au"
  },
  {
    id: 2,
    locationName: "Regents Park",
    name: "E’lan Nails And Beauty",
    status: "Closed",
    mapQuery: "Shop 5/57/61 Emerald Dr, Regents Park QLD 4118 Australia",
    hours: [
      { day: "Monday", open: "9:00 AM", close: "5:30 PM" },
      { day: "Tuesday", open: "9:00 AM", close: "5:30 PM" },
      { day: "Wednesday", open: "9:00 AM", close: "5:30 PM" },
      { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
      { day: "Friday", open: "9:00 AM", close: "5:30 PM" },
      { day: "Saturday", open: "9:00 AM", close: "5:00 PM" },
      { day: "Sunday", open: "10:00 AM", close: "4:00 PM" }
    ],
    address: {
      street: "Shop 5/57/61 Emerald Dr",
      city: "Regents Park",
      state: "QLD",
      postcode: "4118",
      country: "Australia"
    },
    phone: "+61401788668",
    email: "regentspark@elanbeauty.com.au"
  }
];


const Contact = () => {
  return (
    <>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="absolute inset-0">
          <img
            alt="E'LAN BEAUTY Contact"
            className="w-full h-full object-cover object-center"
            src="https://public.readdy.ai/ai/img_res/f2976356b31d9e42321bd4c93514dd55.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Visit us at either location or send us a
            message.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at either of our beautiful locations across Brisbane
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {businessData?.map((business, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* MAP */}
                  <div className="h-64 relative">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        business.mapQuery
                      )}&output=embed`}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      style={{ border: 0 }}
                    />
                  </div>

                  <div className="p-8">
                    {/* TITLE */}
                    <h3 className="text-2xl font-serif text-gray-800 mb-4">
                      {business.address.city}
                    </h3>

                    {/* ADDRESS */}
                    <div className="flex items-start space-x-3 mb-4">
                      <i className="ri-map-pin-line text-rose-500 mt-1" />
                      <div>
                        <p className="text-gray-700 font-medium">
                          {business.address.street}
                        </p>
                        <p className="text-gray-600">
                          {business.address.city} {business.address.state}{" "}
                          {business.address.postcode}
                        </p>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center space-x-3 mb-4">
                      <i className="ri-phone-line text-rose-500" />
                      <a
                        href={`tel:${business.phone.replace(/\s/g, "")}`}
                        className="text-gray-700 hover:text-rose-500 transition-colors"
                      >
                        {business.phone}
                      </a>
                    </div>

                    {/* HOURS */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <i className="ri-time-line text-rose-500 mr-3" />
                        Opening Hours
                      </h4>

                      <div className="space-y-2">
                        {business.hours.map((item, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.day}</span>
                            <span className="text-gray-800 font-medium">
                              {item.open} - {item.close}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Have a question? We're here to help.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form data-readdy-form="true" id="contact-message">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    placeholder="Full name"
                    // allowFullScreen=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
                    type="text"
                    defaultValue=""
                    name="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    placeholder="your@email.com"
                    // allowFullScreen=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
                    type="email"
                    defaultValue=""
                    name="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    placeholder="+61 4XX XXX XXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
                    type="tel"
                    defaultValue=""
                    name="phone"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    // allowFullScreen=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm"
                  >
                    <option value="">What's this about?</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking Question">Booking Question</option>
                    <option value="Service Information">
                      Service Information
                    </option>
                    <option value="Pricing">Pricing</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  // allowFullScreen=""
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors text-sm resize-none"
                  defaultValue={""}
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  0/500 characters
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 text-white py-4 px-8 rounded-lg font-medium hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <BookingSection />

      <Footer />
    </>
  );
};

export default Contact;

import { useEffect, useState } from "react";
import API from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
const categories = [
  { id: "spa-pedicure", name: "Spa Pedicure", icon: "ri-footprint-line" },
  { id: "manicure", name: "Manicure", icon: "ri-hand-heart-line" },
  { id: "acrylic", name: "Acrylic Extensions", icon: "ri-palette-line" },
  { id: "gel-builder", name: "Gel Builder", icon: "ri-brush-2-line" },
  { id: "sns-powder", name: "SNS Powder", icon: "ri-drop-line" },
  { id: "gel-x", name: "Gel X", icon: "ri-magic-line" },
  { id: "nail-art", name: "Nail Art", icon: "ri-artboard-line" },
  { id: "hair-spa", name: "Hair Spa", icon: "ri-scissors-cut-line" },
];
const BookingSection = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const getButtonText = () => {
    if (loading) return "Booking...";

    if (location.pathname === "/locations/nundah") {
      return "Booking at Nundah";
    }

    if (location.pathname === "/locations/regents-park") {
      return "Booking at Regents Park";
    }

    return "Confirm Booking";
  };
  const loc = {
    "/locations/nundah": "nundah",
    "/locations/regents-park": "regents-park"
  };

  const selectedLocation = loc[location.pathname] || null;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    service: "",
    guests: 1,
    notes: "",
  });

  const generateTimeSlots = (startHour = 9, endHour = 18) => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      const start = new Date();
      start.setHours(hour, 0, 0);
      const end = new Date();
      end.setHours(hour + 1, 0, 0);

      const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      };

      slots.push(`${formatTime(start)} - ${formatTime(end)}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "===");
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on typing
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.service) newErrors.service = "Service is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        serviceId: formData.service,
        bookingDate: formData.date,
        timeSlot: formData.time,
        guestCount: Number(formData.guests),
        notes: formData.notes,
        price: 100,
      };

      await API.post("/api/bookingcreate", payload);


      toast.success("✅ Booking created successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        date: "",
        time: "",
        service: "",
        guests: 1,
        notes: "",
      });
      setErrors({});
    } catch (error) {
      toast.error(error.response?.data?.message || "❌ Booking failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFormData((pre) => ({ ...pre, location: selectedLocation }))
  }, [location])
  const renderInput = (label, name, type = "text") => {
  // Get today's date in YYYY-MM-DD format for the 'min' attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-1">
      <label className="block text-sm font-semibold text-gray-700 transition-colors">
        {label}
      </label>
      
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        min={type === "date" ? today : undefined}
        className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-200 text-sm
          ${errors[name] 
            ? "border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50" 
            : "border-gray-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-50"
          } 
          ${type === "date" ? "cursor-pointer" : ""}`}
      />

      <div className="min-h-[20px]"> 
        {errors[name] && (
          <p className="text-red-600 font-bold text-xs flex items-center gap-1 animate-pulse">
            <span>⚠️</span> {errors[name]}
          </p>
        )}
      </div>
    </div>
  );
};

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-rose-500 font-medium mb-2 tracking-wider uppercase text-sm">
            RESERVE YOUR SPOT
          </p>
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600">
            Select your preferred location, service, and time to schedule your beauty experience.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {renderInput("Full Name *", "fullName")}
              {renderInput("Email Address *", "email", "email")}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {renderInput("Phone Number *", "phone")}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg text-sm ${errors.location
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-rose-500"
                    }`}
                >
                  <option value="">Select location</option>
                  <option value="regents-park">Regents Park</option>
                  <option value="nundah">Nundah</option>
                </select>
                {errors.location && <p className="text-red-600 font-bold text-sm mt-1">{errors.location}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {renderInput("Preferred Date *", "date", "date")}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg text-sm ${errors.time ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                    }`}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="text-red-600 font-bold text-sm mt-1">{errors.time}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg text-sm ${errors.service ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-rose-500"
                    }`}
                >
                  <option value="">Select service</option>
                  {
                    categories.map((op, indx) => {
                      return (
                        <option value={op?.id}>{op?.id}</option>
                      )
                    })
                  }
                </select>
                {errors.service && <p className="text-red-600 font-bold text-sm mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests or Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Any special requests or additional information..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c69c7e] text-white py-4 rounded-lg font-medium hover:opacity-90 transition"
            >
              {getButtonText()}
            </button>

          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </section>
  );
};

export default BookingSection;

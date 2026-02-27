import { Button } from "@/components/ui/button";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import { MapPin, Clock, Check } from "lucide-react";

const locations = [
  {
    name: "Regents Park",
    address: "Shop 5/57/61 Emerald Dr, Regents Park QLD 4118",
    closingTime: "Closes at 5:30 PM",
    image: location1,
    services: ["Premium Spa Services", "Expert Hair Styling", "Luxury Nail Care"],
  },
  {
    name: "Nundah",
    address: "1220 Sandgate Rd, Nundah QLD 4012",
    closingTime: "Closes at 8:00 PM",
    image: location2,
    services: ["Full Beauty Treatments", "Relaxation Therapies", "Bridal Services"],
  },
];

const Locations = () => {
  return (
  <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
        Our Locations
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Visit us at either of our beautifully appointed locations, each designed
        to provide the ultimate in luxury and comfort.
      </p>
    </div>
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              alt="E'LAN BEAUTY Regents Park"
              className="w-full h-96 object-cover"
              src="https://public.readdy.ai/ai/img_res/5f057e25eb338c35cf9edf162e86db92.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Regents Park
          </h3>
          <div className="w-16 h-px bg-rose-400 mx-auto lg:mx-0 mb-6" />
          <div className="mb-6">
            <div className="flex items-start justify-center lg:justify-start mb-3">
              <i className="ri-map-pin-line text-rose-500 text-xl mr-3 mt-1" />
              <p className="text-gray-700 text-lg">
                Shop 5/57/61 Emerald Dr, Regents Park QLD 4118
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <i className="ri-time-line text-rose-500 text-xl mr-3" />
              <p className="text-gray-700 text-lg">Closes at 5:30 PM</p>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-3">
              Featured Services:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <i className="ri-check-line text-rose-500 mr-2" />
                <span className="text-gray-600">Premium Spa Services</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <i className="ri-check-line text-rose-500 mr-2" />
                <span className="text-gray-600">Expert Hair Styling</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <i className="ri-check-line text-rose-500 mr-2" />
                <span className="text-gray-600">Luxury Nail Care</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/locations/regents-park"
              className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors text-center whitespace-nowrap"
            >
              Discover Regents Park
            </a>
            <a
              href="/contact"
              className="border-2 border-rose-500 text-rose-500 px-6 py-3 rounded-lg font-medium hover:bg-rose-500 hover:text-white transition-colors text-center whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              alt="E'LAN BEAUTY Nundah"
              className="w-full h-96 object-cover"
              src="https://readdy.ai/api/search-image?query=sophisticated%20beauty%20salon%20in%20Nundah%2C%20elegant%20spa%20entrance%20with%20modern%20design%2C%20luxury%20wellness%20center%20storefront%2C%20professional%20beauty%20clinic%20with%20warm%20lighting&width=800&height=500&seq=location2&orientation=landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Nundah
          </h3>
          <div className="w-16 h-px bg-rose-400 mx-auto lg:mx-0 mb-6" />
          <div className="mb-6">
            <div className="flex items-start justify-center lg:justify-start mb-3">
              <i className="ri-map-pin-line text-rose-500 text-xl mr-3 mt-1" />
              <p className="text-gray-700 text-lg">
                1220 Sandgate Rd, Nundah QLD 4012
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <i className="ri-time-line text-rose-500 text-xl mr-3" />
              <p className="text-gray-700 text-lg">Closes at 8:00 PM</p>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-3">
              Featured Services:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <i className="ri-check-line text-rose-500 mr-2" />
                <span className="text-gray-600">Full Service Spa</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <i className="ri-check-line text-rose-500 mr-2" />
                <span className="text-gray-600">Advanced Aesthetics</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <i className="ri-check-line text-rose-500 mr-2" />
                <span className="text-gray-600">Relaxation Therapy</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/locations/nundah"
              className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors text-center whitespace-nowrap"
            >
              Discover Nundah
            </a>
            <a
              href="/contact"
              className="border-2 border-rose-500 text-rose-500 px-6 py-3 rounded-lg font-medium hover:bg-rose-500 hover:text-white transition-colors text-center whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Locations;

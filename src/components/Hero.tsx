import { useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush, faSpa } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, NavLink } from "react-router-dom";
import image1 from "../assets/interior.jpg"
import image2 from "../assets/Nails1.jpg"
import image3 from "../assets/elanragent.jpeg"
import image4 from "../assets/interior1.jpg"
import image5 from "../assets/DOS04474.jpg"
import image6 from "../assets/DOS04480.jpg"
import image7 from "../assets/DOS04707.jpg"

import image8 from "../assets/DOS04599.jpg"
import image9 from "../assets/DOS04528.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Using service images for gallery

const Hero = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/contact");
  };
  const testimonials = [
 {
  name: "Abinaya Krishnan",
  image: "https://randomuser.me/api/portraits/women/21.jpg",
  rating: 5,
  time: "2 months ago",
  quote:
    "I had a wonderful experience. The staff were patient and listened carefully to what I wanted. The nail artist made a genuine effort to recreate the reference I showed her. The whole process was professional and the finish was perfect. The mocktails were a lovely touch too.",
  services: "Gel manicures",
},
{
  name: "E W",
  image: "https://randomuser.me/api/portraits/women/45.jpg",
  rating: 5,
  time: "4 months ago",
  quote:
    "I cannot speak highly enough of the beautiful ladies at Elan Nails and Head Spa. Their service and experience is above and beyond. Our daughter loved her luxury pedicure as did I. If I could give 10 stars I would.",
  services: "Hand & foot massages, Pedicure, Exfoliation",
},
{
  name: "Jilly Foster",
  image: "https://randomuser.me/api/portraits/women/55.jpg",
  rating: 5,
  time: "a week ago",
  quote:
    "I had the most amazing experience at Elan Nails and Head Spa. The service was professional, relaxing and so thorough. The attention to detail was incredible and the whole space felt clean and calming. I left feeling completely refreshed and pampered.",
  services: "Head spa",
},
{
  name: "Merisa S",
  image: "https://randomuser.me/api/portraits/women/33.jpg",
  rating: 5,
  time: "a month ago",
  quote:
    "I had a 70 minute head spa. I was greeted as soon as I walked in and offered a wide range of hot or cold beverages. The salon is beautiful and the products smelled amazing.",
  services: "Head spa",
},
{
  name: "Brittany Jade",
  image: "https://randomuser.me/api/portraits/women/12.jpg",
  rating: 5,
  time: "5 months ago",
  quote:
    "Got my wedding nails done here and the girls were absolutely lovely. The nails look fantastic and I’m so glad I came here. They took their time and constantly checked that everything was perfect.",
  services: "Wedding nails, Nail shaping, Nail colours",
},
{
  name: "Tammy Owens-Place",
  image: "https://randomuser.me/api/portraits/women/60.jpg",
  rating: 5,
  time: "2 weeks ago",
  quote:
    "Very friendly staff from the moment I opened the door. Very informative about the wide range of services and the atmosphere was amazing with a mocktail menu and drinks available.",
  services: "Salon services",
},
{
  name: "Mana Faifai",
  image: "https://randomuser.me/api/portraits/women/70.jpg",
  rating: 5,
  time: "3 weeks ago",
  quote:
    "Amazing experience. It was my first time having a head spa and I was not disappointed. The staff were brilliant, professional and very gentle. You even get a complimentary drink.",
  services: "Head spa",
},
{
  name: "Shannon Lynn",
  image: "https://randomuser.me/api/portraits/women/48.jpg",
  rating: 5,
  time: "5 months ago",
  quote:
    "Absolutely lovely service when I went today. I took myself, my grandma and my younger sister. They looked after us and gave us drinks. Would 100% recommend to anyone.",
  services: "Manicure, Gel manicures",
},
    



    
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const countryLinks = [
    { name: "Australia", flag: "🇦🇺", href: "/" },
    { name: "Vietnam", flag: "🇻🇳", href: "/" },
    { name: "India", flag: "🇮🇳", href: "/" },
  ];
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="E'LAN BEAUTY Luxury Spa"
            className="w-full h-full object-cover object-center"
            src="https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/056cc638656e73364a1267d6d754796e.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            E'LAN BEAUTY
          </h1>
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            {countryLinks.map((country) => (
              <NavLink
                key={country.name}
                to={country.href}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full border transition ${isActive
                    ? "bg-white text-rose-500"
                    : "border-white text-white hover:bg-white hover:text-rose-500"
                  }`
                }
              >
                <span className="text-lg">{country.flag}</span>
                {country.name}
              </NavLink>
            ))}
          </div>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 tracking-wide">
            Where Elegance Meets Excellence
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            A sanctuary of beauty, artistry, and relaxation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                background: "linear-gradient(90deg, #6b3e2e, #4b2a1f)", // dark brown
                boxShadow: "0 8px 24px rgba(75, 42, 31, 0.35)",
                transition: "all 0.3s ease",
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
              Book Your Experience
            </a>

            <button
              onClick={() => {
                document.getElementById("location")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap cursor-pointer 
  border-2 border-white text-white 
  hover:bg-white hover:text-primary 
  px-8 py-4 text-lg rounded-lg transform hover:scale-105"
            >
              Explore Our Locations
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* about  */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="w-16 h-px bg-rose-400 mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 leading-relaxed">
              At E'LAN BEAUTY, we believe beauty is personal.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Every treatment is an experience, crafted with care, expertise,
              and intention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <img
                alt="Luxury Care"
                className="w-full h-64 object-cover rounded-lg mb-4"
                src="https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/c55276da37fd54b019e98fa16d8e667a.png"
              />
              <h3 className="font-serif text-xl text-gray-800 mb-2">
                Artistry in Motion
              </h3>
              <p className="text-gray-600">
                Every touch tells a story of expertise
              </p>
            </div>
            <div className="text-center">
              <img
                alt="Premium Products"
                className="w-full h-64 object-cover rounded-lg mb-4"
                src="https://public.readdy.ai/ai/img_res/7c262a13f02504b5d02ff5cdc167de9a.jpg"
              />
              <h3 className="font-serif text-xl text-gray-800 mb-2">
                Premium Excellence
              </h3>
              <p className="text-gray-600">
                Only the finest products grace your skin
              </p>
            </div>
            <div className="text-center">
              <img
                alt="Calm Atmosphere"
                className="w-full h-64 object-cover rounded-lg mb-4"
                src="https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/8f3d50bb6b6f91d07dbe915a838885cb.png"
              />
              <h3 className="font-serif text-xl text-gray-800 mb-2">
                Tranquil Sanctuary
              </h3>
              <p className="text-gray-600">
                Where time slows and beauty awakens
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* experndec */}
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              The E'LAN Experience
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Luxury Care */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-2xl text-rose-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Luxury Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Indulgent treatments that nurture your natural beauty with the
                finest techniques and premium products.
              </p>
            </div>

            {/* Expert Artists */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faPaintbrush}
                  className="text-2xl text-rose-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Expert Artists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our skilled professionals bring years of expertise and artistic
                vision to every service.
              </p>
            </div>

            {/* Premium Products */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-2xl text-rose-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Premium Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We exclusively use high-end, carefully selected products that
                deliver exceptional results.
              </p>
            </div>

            {/* Calm Atmosphere */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faSpa}
                  className="text-2xl text-rose-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-xl text-gray-800 mb-4">
                Calm Atmosphere
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Step into our serene sanctuary designed to relax your mind and
                rejuvenate your spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* service  */}

 

      {/* locations  */}
      <section
        id="location"
        className="py-24 bg-gradient-to-br from-rose-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              Our Locations
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at either of our beautifully appointed locations, each
              designed to provide the ultimate in luxury and comfort.
            </p>
          </div>
          <div className="space-y-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    alt="E'LAN BEAUTY Regents Park"
                    className="w-full h-96 object-cover"
                    src={image3}
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
                      <span className="text-gray-600">
                        Premium Spa Services
                      </span>
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
                    src="https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/0d869a5b29fec4e142460d3c6796301c.png"
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

      {/* gallery  */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              Beauty in Every Detail
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
          <div className="text-center mt-12">
            <a
              href="/gallery"
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
                background: "linear-gradient(90deg, #6b3e2e, #4b2a1f)", // dark brown
                boxShadow: "0 8px 24px rgba(75, 42, 31, 0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #4b2a1f, #6b3e2e)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(75, 42, 31, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #6b3e2e, #4b2a1f)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(75, 42, 31, 0.35)";
              }}
            >
              View All Gallery
            </a>
          </div>
        </div>
      </section>

      {/* testimonial  */}
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover why our clients choose E'LAN Beauty.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] px-4">
                    <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-2xl ">
                      {/* Stars */}
                     <div className="flex justify-center items-center">
                       <img src={item.image} width={50} height={50} className="rounded-[100%] text-center " alt="" />
                     </div>
                      <div className="flex justify-center mb-4">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed text-center italic">
                        “{item.quote}”
                      </blockquote>

                      {/* Author */}
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {item.name}
                        </h4>
                        <p className="text-rose-500 font-medium">
                          {item.services}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
            >
              <ChevronLeft className="w-5 h-5 text-rose-500" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
            >
              <ChevronRight className="w-5 h-5 text-rose-500" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition ${index === selectedIndex
                    ? "bg-rose-500 scale-110"
                    : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TELEPHONE  */}
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
               <br/>
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
    </>
  );
};

export default Hero;

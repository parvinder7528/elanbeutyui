import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

/* ================== IMPORT ALL IMAGES ================== */

// Exterior
import exterior1 from "@/assets/exterior1.jpg";
import exterior2 from "@/assets/exterior2.jpg";
import exterior3 from "@/assets/exterior3.jpg";
import exterior4 from "@/assets/exterior4.jpg";
import exterior5 from "@/assets/exterior5.jpg";
import exterior6 from "@/assets/exterior6.jpg";
import exterior7 from "@/assets/exterior7.jpg";
import exterior8 from "@/assets/exterior8.jpg";

// Interior
import interior from "@/assets/interior.jpg";
import interior1 from "@/assets/interior1.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";
import interior5 from "@/assets/interior5.jpg";

// Location
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";

// Makeup
import makeup from "@/assets/Makeup.jpg";
import makeup1 from "@/assets/Makeup1.jpg";

// Nails
import nails from "@/assets/Nails.jpg";
import nails1 from "@/assets/Nails1.jpg";
import nails2 from "@/assets/Nails2.jpg";
import nails3 from "@/assets/Nails3.jpg";
import nails5 from "@/assets/Nails5.jpg";
import image8 from "@/assets/DOS04599.jpg"
// Hero
import heroSalon from "@/assets/hero-salon.jpg";

/* ================== GALLERY DATA ================== */

const galleryImages = [
  // Interior
  { src: image8, title: "Luxury Salon Interior", desc: "Elegant premium salon interiors with modern design.", category: "Interior" },
  { src: interior, title: "Reception Area", desc: "Warm and welcoming front desk area.", category: "Interior" },
  { src: interior1, title: "Styling Zone", desc: "Professional styling chairs and mirrors.", category: "Interior" },
  { src: interior3, title: "Relaxation Corner", desc: "Comfortable seating with luxury feel.", category: "Interior" },
  { src: interior4, title: "Premium Setup", desc: "High-end beauty service stations.", category: "Interior" },
  { src: interior5, title: "Modern Decor", desc: "Minimalistic and elegant interior design.", category: "Interior" },

  // Exterior
  { src: exterior1, title: "Salon Entrance", desc: "Beautifully designed salon entrance.", category: "Exterior" },
  { src: exterior2, title: "Evening View", desc: "Salon glowing beautifully at night.", category: "Exterior" },
  { src: exterior3, title: "Front Display", desc: "Stylish glass and branding display.", category: "Exterior" },
  { src: exterior4, title: "Street View", desc: "Prime location with attractive front.", category: "Exterior" },
  { src: exterior5, title: "Premium Exterior", desc: "Luxury exterior architecture.", category: "Exterior" },
  { src: exterior6, title: "Side View", desc: "Clean and modern side elevation.", category: "Exterior" },
  { src: exterior7, title: "Night Lights", desc: "Beautiful lighting enhances look.", category: "Exterior" },
  { src: exterior8, title: "Grand Opening", desc: "Celebration of salon launch day.", category: "Exterior" },

  // Makeup
  { src: makeup, title: "Bridal Makeup", desc: "Elegant bridal transformation.", category: "Makeup" },
  { src: makeup1, title: "Party Look", desc: "Glamorous party-ready makeup style.", category: "Makeup" },

  // Nails
  { src: nails, title: "Classic Nail Art", desc: "Simple and classy nail designs.", category: "Nails" },
  { src: nails1, title: "French Nails", desc: "Elegant french manicure style.", category: "Nails" },
  { src: nails2, title: "Creative Designs", desc: "Unique and artistic nail patterns.", category: "Nails" },
  { src: nails3, title: "Gel Extensions", desc: "Long-lasting gel nail extensions.", category: "Nails" },
  { src: nails5, title: "Luxury Finish", desc: "Premium glossy nail finishing.", category: "Nails" },


];

const categories = [
  "All",
  "Interior",
  "Exterior",
  "Makeup",
  "Nails",

];

/* ================== COMPONENT ================== */

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://static.readdy.ai/image/42cabbbc9f59707019254de677c0f30c/7f7f216caf7709e4eb4d641a3290384b.png")',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif mb-3">Our Gallery</h1>
          <p className="text-xl">Discover the artistry of E'LAN BEAUTY</p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-rose-400 text-white shadow-lg"
                    : "bg-stone-100 text-stone-700 hover:bg-rose-100 hover:text-rose-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold">{img.title}</h3>
                      <p className="text-sm opacity-90">{img.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}

            {filteredImages.length === 0 && (
              <p className="text-center text-stone-500">
                No images found for this category
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;

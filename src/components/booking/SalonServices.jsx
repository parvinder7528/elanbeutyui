import React, { useState } from "react";
import { acrylicAdditionalServices, acrylicServices, additionalServices, gelBuilderAdditionalServices, gelBuilderServices, gelXData, hairSpaServices, manicureAdditionalServices, manicureServices, nailArtData, snsPowderData, spaPedicureServices } from "../../lib/service.obj";

export default function SalonServices() {
  const [activeCategory, setActiveCategory] = useState("spa-pedicure");

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

  return (
    <div className="min-h-screen bg-gray-50">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                  ? "bg-rose-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-600"
                  }`}
              >
                <i className={`${category.icon} mr-2 text-lg`} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {activeCategory === "spa-pedicure" && (
            <div>
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Spa Pedicure
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Luxurious pedicure treatments for ultimate relaxation and beautiful feet
                </p>
              </div>

              {/* Main Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {spaPedicureServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <i className="ri-time-line mr-2 text-rose-500" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          ${service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalServices.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                      {/* <span className="text-rose-600 font-bold">
                        ${item.price}
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "manicure" && (
            <div>
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Manicure
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional manicure services for perfectly groomed hands
                </p>
              </div>

              {/* Main Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {manicureServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <i className="ri-time-line mr-2 text-rose-500" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          ${service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {manicureAdditionalServices.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                      {/* <span className="text-rose-600 font-bold">
                        ${item.price}
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {activeCategory === "acrylic" && (
            <div>
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Acrylic Extensions Nails
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Durable and beautiful acrylic nail extensions with custom designs
                </p>
              </div>

              {/* Main Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {acrylicServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>

                        {service.subtitle && (
                          <p className="text-sm text-gray-500 italic">
                            {service.subtitle}
                          </p>
                        )}
                      </div>

                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          ${service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {acrylicAdditionalServices.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                      {/* <span className="text-rose-600 font-bold">
                        ${item.price}
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {activeCategory === "gel-builder" && (
            <div>
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Gel Builder
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Strong, flexible gel builder nails for natural-looking extensions
                </p>
              </div>

              {/* Main Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {gelBuilderServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>

                        {service.subtitle && (
                          <p className="text-sm text-gray-500 italic">
                            {service.subtitle}
                          </p>
                        )}
                      </div>

                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          ${service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gelBuilderAdditionalServices.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                      {/* <span className="text-rose-600 font-bold">
                        ${item.price}
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "sns-powder" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  {snsPowderData.title}
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {snsPowderData.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {snsPowderData.mainServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                      </div>
                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          ${service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {snsPowderData.additionalServices.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      {/* <span className="text-rose-600 font-bold">${item.price}</span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {activeCategory === "gel-x" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  {gelXData.title}
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {gelXData.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {gelXData.mainServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-gray-500 italic">
                            {service.subtitle}
                          </p>
                        )}
                      </div>

                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          ${service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-6 text-center">
                  Additional Services
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gelXData.additionalServices.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-300"
                    >
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      {/* <span className="text-rose-600 font-bold">${item.price}</span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "nail-art" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  {nailArtData.title}
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {nailArtData.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {nailArtData.mainServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                      </div>
{/* 
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          {service.priceLabel}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "hair-spa" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                  Indulge Hair Spa
                </h2>
                <div className="w-16 h-px bg-rose-400 mx-auto mb-6" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Relaxing and rejuvenating hair spa treatments for ultimate wellness
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {hairSpaServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <i className="ri-time-line mr-2 text-rose-500" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-rose-600">
                          {service.price}
                        </div>
                      </div> */}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <i className="ri-check-line text-rose-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

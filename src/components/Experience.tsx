import React from 'react'

const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
        The E'LAN Experience
      </h2>
      <div className="w-24 h-px bg-rose-400 mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
          <i className="ri-heart-line text-2xl text-rose-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-xl text-gray-800 mb-4">Luxury Care</h3>
        <p className="text-gray-600 leading-relaxed">
          Indulgent treatments that nurture your natural beauty with the finest
          techniques and premium products.
        </p>
      </div>
      <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
          <i className="ri-brush-line text-2xl text-rose-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-xl text-gray-800 mb-4">
          Expert Artists
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our skilled professionals bring years of expertise and artistic vision
          to every service.
        </p>
      </div>
      <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
          <i className="ri-star-line text-2xl text-rose-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-xl text-gray-800 mb-4">
          Premium Products
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We exclusively use high-end, carefully selected products that deliver
          exceptional results.
        </p>
      </div>
      <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
          <i className="ri-leaf-line text-2xl text-rose-500 group-hover:text-white transition-colors duration-300" />
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
  )
}

export default Experience
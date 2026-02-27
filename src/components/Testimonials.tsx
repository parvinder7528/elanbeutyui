import { useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    service: "Spa & Aesthetics",
    quote:
      "E'LAN Beauty has completely transformed my self-care routine. The attention to detail and luxurious atmosphere make every visit feel like a retreat.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    service: "Hair Beauty",
    quote:
      "My wedding day look was absolutely perfect. They understood my vision completely and made me feel like a queen.",
    rating: 5,
  },
  {
    name: "Rachel Williams",
    service: "Makeover",
    quote:
      "The makeover session was transformative! I felt so confident and beautiful. They exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Charlotte Davies",
    service: "Head Spa",
    quote:
      "Pure relaxation combined with visible results. My hair has never been healthier.",
    rating: 5,
  },
  {
    name: "Jessica Brown",
    service: "Nails",
    quote:
      "The nail artistry here is exceptional. Every detail is perfect and long lasting.",
    rating: 5,
  },
];

const Testimonials = () => {
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
                <div
                  key={index}
                  className="flex-[0_0_100%] px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-2xl">
                    {/* Stars */}
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
                        {item.service}
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
                className={`w-3 h-3 rounded-full transition ${
                  index === selectedIndex
                    ? "bg-rose-500 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

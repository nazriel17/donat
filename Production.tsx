
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Production = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Dairy Farming",
      description: "Our state-of-the-art facilities ensure the highest quality milk production with complete traceability from farm to table."
    },
    {
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
      title: "Natural Environment",
      description: "Our cows graze in open pastures, ensuring they receive the best natural nutrition for premium milk quality."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 shadow-2xl">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute bottom-8 left-8 bg-emerald-600 text-white px-4 py-2 rounded-lg">
                <span className="font-bold">№1</span>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                onClick={prevSlide}
                className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full w-12 h-12 p-0"
              >
                ←
              </Button>
              <div className="flex space-x-2 items-center">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={nextSlide}
                className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full w-12 h-12 p-0"
              >
                →
              </Button>
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              HOW WE
              <span className="block">PRODUCE</span>
              <span className="block text-yellow-300">MILK</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <p className="text-lg leading-relaxed">
                From our eco-friendly farms to your refrigerator, every step of our production 
                process is carefully monitored to maintain the highest standards of quality and nutrition.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-white text-emerald-600 p-3 rounded-full">
                  <span className="text-2xl">🐄</span>
                </div>
                <p className="text-lg font-semibold">
                  Learn More About Our Process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;

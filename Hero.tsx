
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleLearnMore = () => {
    const element = document.querySelector("#benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShopNow = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Pure & Natural
              <span className="block text-yellow-300">BIO MILK</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed animate-fade-in">
              Experience the double benefits of pectin and inulin in our premium organic dairy products. 
              Nature's goodness delivered fresh from farm to your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button
                onClick={handleLearnMore}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
              <Button
                onClick={handleShopNow}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy cow in natural environment"
                className="w-full max-w-lg rounded-3xl shadow-2xl animate-scale-in"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-emerald-800 p-4 rounded-2xl shadow-lg animate-fade-in">
                <p className="font-bold text-lg">100% Organic</p>
                <p className="text-sm">Farm Fresh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

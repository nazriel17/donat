
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    "Fresh Milk",
    "Fermented", 
    "Probiotic Drinks",
    "Greek Style",
    "Kefir",
    "Yogurt",
    "Organic",
    "Children's"
  ];

  const featuredProduct = {
    name: "Bio-Yogurt \"Effective\"",
    subtitle: "Drinking Yogurt",
    description: "Bio-yogurt \"Effective\" with apple flavor - a fermented milk drink with a unique probiotic composition. Contains vitamins and minerals essential for health. Apple flavor adds natural sweetness and fresh taste to the product.",
    image: "/lovable-uploads/52269e6d-1637-437d-9c8e-ea1dd5b3863f.png",
    variants: [
      { flavor: "Apple", color: "bg-green-500" },
      { flavor: "Strawberry", color: "bg-red-500" },
      { flavor: "Peach", color: "bg-orange-500" },
      { flavor: "Blueberry", color: "bg-blue-500" },
      { flavor: "Vanilla", color: "bg-yellow-500" }
    ]
  };

  const handleCategoryClick = (category: string) => {
    console.log(`Viewing ${category} products`);
    // Here you would typically filter products or navigate to category page
  };

  const handleBuyNow = () => {
    console.log("Redirecting to purchase page");
    // Here you would typically redirect to shopping cart or purchase page
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
              <div className="relative">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full max-w-sm mx-auto"
                />
                <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white p-3 rounded-2xl">
                  <span className="font-bold">Apple Flavor</span>
                </div>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                {featuredProduct.name}
              </h3>
              <p className="text-xl text-emerald-600 font-semibold mb-6">
                {featuredProduct.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {featuredProduct.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Available Flavors:</h4>
                <div className="flex flex-wrap gap-3">
                  {featuredProduct.variants.map((variant, index) => (
                    <div
                      key={index}
                      className={`${variant.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer`}
                    >
                      {variant.flavor}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleBuyNow}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 w-fit"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

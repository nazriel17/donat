
const Benefits = () => {
  const benefits = [
    {
      title: "PECTIN",
      subtitle: "Natural Fiber Power",
      facts: [
        "Helps lower cholesterol levels naturally",
        "Supports healthy digestion and gut health",
        "Promotes heart health and circulation",
        "Aids in natural weight management"
      ],
      icon: "🥛",
      badge: "№1"
    },
    {
      title: "INULIN", 
      subtitle: "Prebiotic Excellence",
      facts: [
        "Feeds beneficial gut bacteria",
        "Enhances calcium absorption",
        "Supports immune system function",
        "Helps regulate blood sugar levels"
      ],
      icon: "🌿",
      badge: "№1"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Double the <span className="text-emerald-600">Benefits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Bio Milk contains essential nutrients that work together to support your health and wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <div className="bg-emerald-600 text-white px-6 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold text-lg">{benefit.title}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{benefit.subtitle}</h3>
                <div className="bg-emerald-600 text-white px-4 py-1 rounded-full inline-block">
                  <span className="text-sm font-semibold">10 FACTS</span>
                </div>
              </div>

              <div className="space-y-4">
                {benefit.facts.map((fact, factIndex) => (
                  <div key={factIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">{factIndex + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block">
                  <span className="font-bold">{benefit.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

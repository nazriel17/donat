
const Footer = () => {
  const handleContactClick = () => {
    console.log("Opening contact information");
    // Here you would typically open a contact modal or navigate to contact page
  };

  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-emerald-600 rounded-full p-3 w-fit mb-4">
              <span className="text-white font-bold text-xl">BIO MILK</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium organic dairy products with natural pectin and inulin benefits. 
              From our family farm to your table.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-emerald-400 transition-colors">Benefits</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-300">📞 1-800-BIO-MILK</p>
              <p className="text-gray-300">📧 info@biomilk.com</p>
              <p className="text-gray-300">📍 Organic Farm Valley, USA</p>
              <button
                onClick={handleContactClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 mt-4"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Bio Milk. All rights reserved. Made with ❤️ for healthy living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

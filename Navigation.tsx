
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "products", label: "Our Products", href: "#products" },
    { id: "benefits", label: "Benefits", href: "#benefits" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const handleItemClick = (id: string, href: string) => {
    setActiveItem(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2">
              <span className="text-emerald-600 font-bold text-xl">BIO MILK</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`text-white hover:bg-emerald-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeItem === item.id ? "bg-emerald-700" : ""
                  }`}
                  onClick={() => handleItemClick(item.id, item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

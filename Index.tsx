
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Benefits from "@/components/Benefits";
import Production from "@/components/Production";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Benefits />
      <Production />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;

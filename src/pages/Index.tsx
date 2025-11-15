import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandsSlider from "@/components/BrandsSlider";
import TopProducts from "@/components/TopProducts";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BrandsSlider />
      <TopProducts />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;

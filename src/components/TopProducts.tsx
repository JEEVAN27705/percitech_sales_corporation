import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const topProducts = products.slice(0, 4);

const TopProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Selling Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most trusted and reliable industrial solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;

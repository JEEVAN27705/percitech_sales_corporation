import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { Search, Filter } from "lucide-react";
import { products } from "@/data/products";

const categories = ["All", "Abrasives", "Pneumatics", "Cutting Tools", "Polishing"];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) setSearchQuery(searchParam);
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* HEADER SECTION */}
        <section className="bg-gradient-primary text-primary-foreground py-20 shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              Explore Our Products
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              High-quality industrial tools, abrasives & pneumatic solutions for every need.
            </p>
          </div>
        </section>

        {/* FILTERS + SEARCH */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">

            {/* Search + Filter Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

              {/* SEARCH BAR */}
              <div className="relative w-full md:max-w-md">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11 shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>

              {/* CATEGORY DROPDOWN */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-11 flex items-center gap-2">
                    <Filter size={18} />
                    {selectedCategory === "All"
                      ? "Filter by Category"
                      : selectedCategory}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 shadow-lg">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="cursor-pointer"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found. Try adjusting your search or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

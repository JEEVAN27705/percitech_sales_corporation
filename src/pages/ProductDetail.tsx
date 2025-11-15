import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Award, Package, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>("");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRequestQuote = () => {
    const message = `Product: ${product.name} (${product.brand})${selectedSize ? `\nSize: ${selectedSize}` : ""}`;
    toast({
      title: "Quote Request Submitted",
      description: "Our team will contact you within 24 hours.",
    });
    setTimeout(() => {
      navigate("/contact");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/products">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="animate-fade-in">
              <Card className="overflow-hidden border-border">
                <div className="aspect-square relative bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Badge className="bg-accent text-accent-foreground shadow-card">
                      {product.category}
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground shadow-card animate-pulse">
                      <Award className="w-3 h-3 mr-1" />
                      Authorized
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-primary border-primary">
                    {product.brand}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Authorized Dealer</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {product.detailedDescription}
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">
                    {product.priceRange}
                  </div>
                  <Badge variant="secondary" className="animate-pulse">
                    48-Hour Delivery
                  </Badge>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Available Sizes:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizeRanges.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? "bg-gradient-primary" : ""}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 animate-fade-in"
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-primary hover:opacity-90 group"
                  onClick={handleRequestQuote}
                >
                  <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Request Quote
                </Button>
                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Authorized Dealer</p>
                </div>
                <div className="text-center">
                  <Package className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Genuine Products</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Technical Specifications
            </h2>
            <Card className="border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border last:border-0 hover:bg-muted/50 transition-colors ${
                          index % 2 === 0 ? "bg-muted/20" : ""
                        }`}
                      >
                        <td className="py-4 px-6 font-semibold text-foreground w-1/3">
                          {spec.label}
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Authorized Dealer Highlight */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Card className="bg-gradient-primary text-primary-foreground border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Award className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      Authorized Dealer of {product.brand}
                    </h3>
                    <p className="text-primary-foreground/90 mb-4">
                      We are the official authorized distributor of {product.brand} products. 
                      All products come with genuine manufacturer warranties and quality certifications. 
                      Trust Percitech Sales Corporation for authentic industrial solutions.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                        100% Genuine
                      </Badge>
                      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                        Manufacturer Warranty
                      </Badge>
                      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                        Quality Certified
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

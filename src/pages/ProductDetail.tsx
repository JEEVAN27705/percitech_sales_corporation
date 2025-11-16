import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Award, Package, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null); // ADDED
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  useEffect(() => {
    setActiveIndex(0);
    setLightboxOpen(false);
    setSelectedSize("");
    setSelectedPrice(null); // reset price on product change
  }, [id]);

  const handleRequestQuote = useCallback(() => {
    toast({
      title: "Quote Request Submitted",
      description: "Our team will contact you within 24 hours.",
    });
    setTimeout(() => navigate("/contact"), 1500);
  }, [navigate, toast]);

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

  // Exactly 4 images; fill if fewer. All tiles are equal inside a square box.
  const imagesBase = product.images && product.images.length > 0 ? product.images.slice(0, 4) : [product.image];
  const images = [...imagesBase];
  while (images.length < 4) images.push(images[0]);

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
            {/* Left: one square box with 4 equal tiles */}
            <div className="animate-fade-in">
              <div
                className="rounded-xl overflow-hidden shadow-lg bg-secondary p-2"
                aria-label="Image grid"
              >
                <div className="grid grid-cols-2 gap-2 aspect-square">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setActiveIndex(idx);
                        setLightboxOpen(true);
                      }}
                      className="overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label={`Thumbnail ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Lightbox */}
              {lightboxOpen && (
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                  onClick={() => setLightboxOpen(false)}
                >
                  <img
                    src={images[activeIndex]}
                    alt={`${product.name} enlarged`}
                    className="max-h-[85vh] max-w-[90vw] object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>

            {/* Right: product info (unchanged structure) */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-primary border-primary">
                    {product.brand}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Authorized Dealer</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

                <p className="text-lg text-muted-foreground mb-4">
                  {product.detailedDescription}
                </p>

                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-primary">
                    {selectedPrice != null ? `₹${selectedPrice}` : product.priceRange}
                  </div>
                  <Badge variant="secondary" className="animate-pulse">48-Hour Delivery</Badge>
                </div>
              </div>

              {product.sizeRanges && product.sizeRanges.length > 0 && (
                <div>
                  <label className="text-sm font-semibold mb-3 block">Available Sizes:</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizeRanges.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => {
                          setSelectedSize(size);
                          const price = product.sizePricing?.[size] ?? null;
                          setSelectedPrice(price);
                        }}
                        className={selectedSize === size ? "bg-gradient-primary" : ""}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 animate-fade-in"
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  onClick={handleRequestQuote}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>

                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Authorized</p>
                </div>
                <div className="text-center">
                  <Package className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Genuine Product</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <Card className="border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border last:border-0 ${index % 2 === 0 ? "bg-muted/20" : ""}`}
                      >
                        <td className="py-4 px-6 font-semibold w-1/3">{spec.label}</td>
                        <td className="py-4 px-6 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Authorized dealer strip */}
          <Card className="bg-gradient-primary text-primary-foreground border-0 overflow-hidden mb-12">
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-pulse">
                  <Award className="w-10 h-10" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Authorized Dealer of {product.brand}
                  </h3>
                  <p className="text-primary-foreground/90 mb-4">
                    All products come with genuine manufacturer warranty and certification. Trust Percitech Sales Corporation for authentic industrial solutions.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge className="bg-primary-foreground/20 border-0">100% Genuine</Badge>
                    <Badge className="bg-primary-foreground/20 border-0">Warranty Included</Badge>
                    <Badge className="bg-primary-foreground/20 border-0">Quality Certified</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

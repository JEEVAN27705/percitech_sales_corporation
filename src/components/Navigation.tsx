import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-3 py-1 rounded">
              PSC
            </div>
            <span className="font-semibold text-foreground hidden sm:block">
              Percitech Sales
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About Us</Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost">Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:opacity-90">
                Get Quote
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                About Us
              </Button>
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Products
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
            </Link>
            <form onSubmit={handleSearch} className="relative px-2">
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

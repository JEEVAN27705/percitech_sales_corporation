import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-3 py-1 rounded">
                PSC
              </div>
              <span className="font-semibold text-foreground">
                Percitech Sales
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Trusted Industrial Abrasive & Pneumatic Solutions Provider
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms & Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Brands</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Apidor Industrial Products</li>
              <li>Tyrolit Abrasives</li>
              <li>Perfect Super Abrasive Tools</li>
              <li>SMC Pneumatic Products</li>
              <li>Janatics Pneumatic Products</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Industrial Area, Business District</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@percitechsales.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Percitech Sales Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

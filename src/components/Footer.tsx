import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="font-semibold text-lg text-foreground mb-3">
              Percitech Sales Corporation
            </h2>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Your Trusted Partner for Industrial Abrasives, Power Tools,
              Pneumatic Solutions & Safety Products.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Services</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Our Brands</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Apidor Abrasives</li>
              <li>Tyrolit Grinding Solutions</li>
              <li>Perfect Tools</li>
              <li>Chicago Pneumatic Tools</li>
              <li>Janatics Pneumatics</li>
              <li>Bosch Power Tools</li>
              <li>3M Products</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">

              {/* GOOGLE MAPS LINK */}
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <a
                  href="https://www.google.com/maps/place/MIDC+Sector+3,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  Shop No. 12, Industrial Estate,<br />
                  MIDC Area, Sector 3, Maharashtra
                </a>
              </li>

              {/* CLICK TO CALL */}
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+917276605175"
                  className="hover:text-primary transition"
                >
                  +91 7276605175
                </a>
              </li>

              {/* CLICK TO EMAIL */}
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:info@percitechsales.com"
                  className="hover:text-primary transition"
                >
                  info@percitechsales.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Percitech Sales Corporation. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

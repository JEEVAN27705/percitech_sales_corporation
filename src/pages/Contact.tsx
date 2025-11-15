import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Handshake } from "lucide-react";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Contact Us
            </h1>
            <p className="text-center text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Get in touch with our team for quotes, product trials, or any inquiries
            </p>
          </div>
        </section>

        {/* LEFT + RIGHT LAYOUT */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

              {/* LEFT SIDE SECTION */}
              <div className="space-y-8">

                {/* PHONE */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <a href="tel:+919876543210" className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Phone</h3>
                        <p className="text-sm text-primary hover:underline font-medium">+91 7276605175 </p>
                        <p className="text-xs text-muted-foreground mt-1">Mon-Sat: 9AM - 6PM</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* EMAIL */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Email</h3>
                        <a href="mailto:info@percitechsales.com" className="text-sm text-primary hover:underline font-medium block">
                          info@percitechsales.com
                        </a>
                        <a href="mailto:sales@percitechsales.com" className="text-sm text-primary hover:underline font-medium block">
                          sales@percitechsales.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* ADDRESS */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <a
                      href="https://www.google.com/maps/search/Industrial+Area+Business+District"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Address</h3>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Industrial Area</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Business District</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* SOCIAL MEDIA BOX */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
  <Handshake className="w-8 h-8 text-primary-foreground" />
</div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">Follow Us</h3>

                        <div className="mt-2 flex items-center gap-5">

                          {/* Instagram */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-pink-600 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-pink-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-pink-500/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                          </a>

                          {/* Facebook */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-blue-600 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-blue-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-blue-500/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <Facebook className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6" />
                          </a>

                          {/* LinkedIn */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-sky-700 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-sky-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-sky-600/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <Linkedin className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                          </a>

                          {/* WHATSAPP (NEW + BIGGER) */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-green-600 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-green-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-green-500/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-3" />
                          </a>

                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* RIGHT SIDE — CONTACT FORM */}
              <div>
                <Card className="border-border shadow-xl w-full">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-foreground mb-3">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Jeevan Patil"
                            className="h-11 border-2 focus:border-primary transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            Email Address <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="jeevan@example.com"
                            className="h-11 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXXXXXXX"
                          className="h-11 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your requirements..."
                          rows={6}
                          className="border-2 focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-primary hover:opacity-90 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                      >
                        Submit Inquiry
                      </Button>
                    </form>

                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;

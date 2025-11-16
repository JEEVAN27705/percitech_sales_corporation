import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Users, CheckCircle2, Zap, Shield, TrendingUp, Package, Headphones } from "lucide-react";
import industrialFacility from "@/components/industrial-facility.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About Percitech Sales Corporation
            </h1>
            <p className="text-center text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted partner in industrial solutions since over a decade
            </p>
          </div>
        </section>

        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Story</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch auto-rows-auto">
                {/* LEFT: Text determines row height */}
                <div className="space-y-6 text-lg leading-relaxed animate-fade-in">
                  <p className="text-muted-foreground">
                    <span className="text-primary font-bold text-2xl block mb-2">Percitech Sales Corporation</span>
                    has been a leading name in the industrial supply sector for over <span className="font-semibold text-foreground">10 years</span>. 
                    We specialize in providing high-quality industrial cutting, grinding, pneumatic, polishing, and abrasive 
                    tools to industries across the region.
                  </p>
                  
                  <p className="text-muted-foreground">
                    As an <span className="font-bold text-primary">authorized distributor</span> of renowned brands including <span className="font-semibold text-foreground">Apidor Industrial Products, Tyrolit Abrasives, 
                    Perfect Super Abrasive Tools, SMC, and Janatics Pneumatic Products</span>, we ensure that our clients receive 
                    only genuine, premium quality products backed by manufacturer warranties.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Our commitment to excellence, combined with our <span className="font-semibold text-foreground">48-hour delivery support</span> and extensive product range, 
                    has made us the <span className="font-bold text-primary">preferred choice</span> for industries seeking reliable industrial solutions.
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Note: Date and time will be auto-filled in the message if it’s empty. 
                    If the details do not appear, kindly re-select your preferred slot.
                  </p>

                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground font-medium">10+ Years of Industry Excellence</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground font-medium">Authorized Distributor of Premium Brands</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground font-medium">Trusted by Leading Industries</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Image */}
                <div className="relative animate-fade-in lg:pl-0" style={{ animationDelay: '0.2s' }}>
                  <div className="relative h-full translate-x-4 md:translate-x-6 lg:translate-x-10 xl:translate-x-12">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 h-full">
                      <img 
                        src={industrialFacility} 
                        alt="Modern industrial manufacturing facility" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To provide superior quality industrial products with exceptional service and reliability
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To be the most trusted industrial supply partner known for quality and innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Authorized Partner</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Official distributor of leading global industrial brands
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Client First</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dedicated support team ensuring customer satisfaction
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* WHY INDUSTRIES TRUST US */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Industries Trust Us</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Genuine Products</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    100% authentic items with warranties
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Fast Delivery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Less than 48-hour shipping support
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Competitive Pricing</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Best rates with bulk discounts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Wide Range</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Huge product catalog available
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Expert Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dedicated technical assistance 24*7 
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Quality Assured</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Strict quality checks on all products
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

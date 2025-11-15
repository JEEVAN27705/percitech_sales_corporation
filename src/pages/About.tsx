import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Eye, Users } from "lucide-react";

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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Percitech Sales Corporation has been a leading name in the industrial supply sector for over 10 years. 
                  We specialize in providing high-quality industrial cutting, grinding, pneumatic, polishing, and abrasive 
                  tools to industries across the region.
                </p>
                <p>
                  As an authorized distributor of renowned brands including Apidor Industrial Products, Tyrolit Abrasives, 
                  Perfect Super Abrasive Tools, SMC, and Janatics Pneumatic Products, we ensure that our clients receive 
                  only genuine, premium quality products backed by manufacturer warranties.
                </p>
                <p>
                  Our commitment to excellence, combined with our 48-hour delivery support and extensive product range, 
                  has made us the preferred choice for industries seeking reliable industrial solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To provide superior quality industrial products with exceptional service and reliability
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To be the most trusted industrial supply partner known for quality and innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Authorized Partner</h3>
                  <p className="text-muted-foreground text-sm">
                    Official distributor of leading global industrial brands
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Client First</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicated support team ensuring customer satisfaction
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Why Industries Trust Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Genuine Products</h4>
                      <p className="text-sm text-muted-foreground">100% authentic products from authorized brands</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                      <p className="text-sm text-muted-foreground">48-hour delivery support across regions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Expert Guidance</h4>
                      <p className="text-sm text-muted-foreground">Technical support for product selection</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Competitive Pricing</h4>
                      <p className="text-sm text-muted-foreground">Best prices with volume discounts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Wide Range</h4>
                      <p className="text-sm text-muted-foreground">Extensive product sizes and varieties</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">Rigorous quality checks on all products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

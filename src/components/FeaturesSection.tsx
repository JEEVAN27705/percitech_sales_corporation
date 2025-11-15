import { Clock, Award, Package, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "48-Hour Delivery",
    description: "Fast and reliable delivery support to keep your operations running smoothly",
  },
  {
    icon: Award,
    title: "Authorized Distributor",
    description: "Official partner of leading industrial brands ensuring genuine products",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description: "Extensive size and variety availability for all your industrial needs",
  },
  {
    icon: Users,
    title: "10+ Years Trusted",
    description: "Decade of excellence in serving industries with quality solutions",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Percitech Sales?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide more than just products - we deliver complete industrial solutions with reliability and trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

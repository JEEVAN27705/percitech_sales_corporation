import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Steel Industries Ltd.",
    text: "Percitech Sales has been our trusted partner for over 5 years. Their product quality and timely delivery are exceptional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Precision Manufacturing",
    text: "The 48-hour delivery commitment is a game-changer for our operations. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "AutoTech Solutions",
    text: "Great range of pneumatic products at competitive prices. Their technical support team is very knowledgeable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading industries across the region
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="border-border">
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-foreground text-lg mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// src/components/Hero.tsx
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import industrialBg from "@/components/background_image.jpg" 

const Hero = () => {
  return (
    <section
      className="
        relative isolate overflow-hidden
        text-primary-foreground
        min-h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
      "
      aria-label="Industrial marketing hero"
    >
      <div
        className="absolute inset-0 -z-20 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${industrialBg})` }}
        aria-hidden="true"
      />

      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b from-black/70 via-black/55 to-black/75
          backdrop-blur-[2px]
        "
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 w-full">
        <div className="mx-auto max-w-4xl text-center">

          {/* Title */}
          <h1
            className="
              animate-fade-in-up
              text-5xl md:text-7xl font-bold leading-tight
              tracking-tight drop-shadow-lg whitespace-nowrap
            "
          >
            Trusted Industrial Marketing Dealer
          </h1>

          {/* Subtitle */}
          <p
            className="
              animate-fade-in-up-delayed
              mt-4 md:mt-6 text-lg md:text-2xl text-white/90
            "
          >
            Premium-grade products, dependable service, and 48-hour delivery support.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Request a Product Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white/80 text-white hover:bg-white hover:text-primary"
              >
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up 1.5s ease-out forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  )
}

export default Hero

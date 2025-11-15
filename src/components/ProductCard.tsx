import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  category: string
  description: string
  image: string
}

const ProductCard = ({ id, name, category, description, image }: ProductCardProps) => {
  return (
    <Card
      className="
        group h-full flex flex-col overflow-hidden rounded-xl border-border
        shadow-sm hover:shadow-lg transition-all duration-300
        hover:-translate-y-1 focus-within:-translate-y-1
      "
    >
      {/* Image block with full cover (no letterboxing) */}
      <div className="relative bg-secondary overflow-hidden rounded-t-xl">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Category pill */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium tracking-wide shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="pt-5 pb-0 flex-grow">
        <h3
          title={name}
          className="text-base md:text-lg font-bold tracking-tight text-foreground text-center leading-snug line-clamp-2"
        >
          {name}
        </h3>
        <p
          title={description}
          className="mt-2 text-sm text-muted-foreground text-center line-clamp-3"
        >
          {description}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto p-4">
        <Link to={`/products/${id}`} className="w-full">
          <Button
            variant="outline"
            className="
              w-full group/button
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-primary/60 focus-visible:ring-offset-background
            "
            aria-label={`View details for ${name}`}
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProductCard

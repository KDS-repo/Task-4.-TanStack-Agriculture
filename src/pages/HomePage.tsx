import { Button } from "@/components/ui/button"
import { Skeleton } from "../components/ui/skeleton"
import { useImages } from "@/hooks/useImages"

export function HomePage() {
  const { data: products, isLoading, error } = useImages(3)
  const cardText = [
    "Rent your own piece of farmland and watch your vegetables grow.",
    "Enjoy, year after year, the wonders of nature with your rented vegetable farmland (60 sqm / 30 sqm).",
    "Grow your own piece of land, from planting seeds in the lush soil to harvesting your own vegetables."
  ]

  return (
    <>
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
            Rent your own field, invest in farming, and grow your own vegetables
          </h1>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg md:text-xl font-semibold rounded-lg"
          >
            Let's start
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {isLoading ? (
            // Show skeletons while loading
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex-1">
                <ImageCard imageUrl="" text={cardText[index]} />
              </div>
            ))
          ) : error ? (
            // Error message on the page
            <div className="col-span-3 text-center py-12">
              <p className="text-red-600">Failed to load images. Please try again later.</p>
            </div>
          ) : (
            // Images if loaded without error
            products?.map((product, index) => (
              <div key={product.id} className="flex-1">
                <ImageCard
                  imageUrl={product.thumbnail || product.images[0]}
                  text={cardText[index]}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  )
}

interface ImageCardProps {
  imageUrl: string
  text: string
}

function ImageCard({ imageUrl, text }: ImageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl h-64">
      {(imageUrl === "") ? (
        <Skeleton className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
      ) : (
        <img
          src={imageUrl}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-x-[15px] bottom-[15px] bg-white border-2 rounded-[10px] px-[8px] py-[15px]">
        <p className="text-sm md:text-base">{text}</p>
      </div>

      <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300" />
    </div>
  )
}
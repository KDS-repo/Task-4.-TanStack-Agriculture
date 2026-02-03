import { Button } from "@/components/ui/button"
import { Skeleton } from "../components/ui/skeleton"
import mapImage from '@/img/map.png'

export function HomePage() {
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
          <div className="flex-1">
            <ImageCard text="Rent your own piece of farmland and watch your vegetables grow." />
          </div>
          <div className="flex-1">
            <ImageCard text="Enjoy, year after year, the wonders of nature with your rented vegetable farmland (60 sqm / 30 sqm)." />
          </div>
          <div className="flex-1">
            <ImageCard text="Grow your own piece of land, from planting seeds in the lush soil to harvesting your own vegetables." />
          </div>
        </div>
      </section>
    </>
  )
}

interface ImageCardProps {
  text: string
}

function ImageCard({ text }: ImageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl h-64">
      <img
          src={mapImage} >
          </img>
      <Skeleton className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />

      <div className="absolute inset-x-[15px] bottom-[15px] bg-white border-2 rounded-[10px] px-[8px] py-[15px]">
        <p className="text-sm md:text-base">{text}</p>
      </div>

      <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300" />
    </div>
  )
}
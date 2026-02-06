import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronDown } from "lucide-react"
import { useImages } from "@/hooks/useImages"
import Map from '@/img/map.png'

export function Locations() {

  const { data: products, isLoading, error } = useImages(1)

  const locations = [
    {
      title: "Green Acres Ranch",
      country: "Germany",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 font-brand-serif">
            Locations
          </h1>
        </div>


        <div className="flex justify-center mb-8 font-brand-sans">
          <div className="w-full max-w-2xl bg-brand-grey rounded-xl border border-gray-200 p-2">
            <div className="flex flex-col md:flex-row gap-4">

              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                <Input
                  placeholder="Search by city, country, village places"
                  className="pl-10 border-none shadow-none focus:border-none focus:shadow-none"
                />
              </div>

              <Button className="gap-2 bg-brand-green hover:bg-brand-green hover:shadow-md/20 transition-shadow">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 font-brand-sans">
          <div className="lg:w-3/5">
            <div className="flex items-center justify-between gap-3 mb-6">
              <Button variant="outline" className="gap-2">
                Sort by All
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="flex flex-col h-full overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="h-64 overflow-hidden">
                    <img
                      src={products?.[0]?.images?.[0]}
                      alt={location.title}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>

                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{location.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-700">{location.country}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-brand-green hover:bg-brand-green">
                      Shop
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="sticky top-24 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={Map}
                  alt="Farm locations map"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
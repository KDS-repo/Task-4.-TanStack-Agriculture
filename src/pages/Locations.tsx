import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronDown } from "lucide-react"
import { useImages } from "@/hooks/useImages"

export function Locations() {

  const { data: products, isLoading, error } = useImages(1)

  const locations = [
    {
      title: "Green Acres Ranch",
      country: "Germany",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Locations</h1>
          <p className="text-gray-600 mt-2">Browse available farming locations across Europe</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by city, country, village places"
                className="pl-10"
              />
            </div>

            <Button variant="outline" className="gap-2 bg-green-600 text-white">
              Search
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" className="gap-2">
            Sort by All
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-scroll border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <img
                  src={products?.[0]?.images?.[0]}
                  alt={location.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // If image fails to load, show a fallback
                    e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image'
                  }}
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
                <Button variant="outline" className="border-green-600 hover:bg-green-700">
                  Shop
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
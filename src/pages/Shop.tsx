import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MapPin, Filter, ChevronDown } from "lucide-react"
import { useImages } from "@/hooks/useImages"

export function ShopPage() {
  const { data: products, isLoading, error } = useImages(3)
  // plots has an inferred type, not the same thing as implicit :any
  const plots = [
    {
      title: "Vegetable field S - unplanted in Edenbridge, Kent",
      country: "UK",
      size: "20qm",
      price: "€100.0"
    },
    {
      title: "Unplanted field L in Trysurill, Staffordshire",
      country: "UK",
      size: "40qm",
      price: "€170.0"
    },
    {
      title: "Unplanted field L in Waldberghheim",
      country: "Germany",
      size: "40qm",
      price: "€180.0"
    }
  ]

  return (
    <div className="min-h-screen font-brand-sans">
      <div className="container mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Invest
          </h1>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="gap-2">
              Sort by All
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="outline" className="gap-2 border-2 border-black">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="gap-2 bg-brand-green hover:bg-brand-green hover:shadow-md/20 transition-shadow text-white">
              <MapPin className="h-4 w-4" />
              Map
            </Button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!isLoading && products?.map((property, index) => (
            <Card key={index} className="flex flex-col h-full bg-brand-ash border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <img src={property.images[0]} alt="" />
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {plots[index].title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-grow">
                <div className="flex items-center gap-2">
                  <div>
                    <span className="font-medium text-gray-900">{plots[index].country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <span className="text-sm text-gray-600">Size: </span>
                    <span className="font-medium text-gray-900">{plots[index].size}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <span className="text-sm text-gray-600">Guide Price: </span>
                    <span className="font-medium text-gray-900">{plots[index].price}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="mt-auto border-t pt-4">
                <Button variant="outline" className="border-brand-green bg-transparent hover:bg-brand-green">
                  Invest
                </Button>
                <Button variant="ghost" className="hover:bg-brand-green text-brand-green">
                  Reserve
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
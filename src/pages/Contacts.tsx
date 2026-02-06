import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Map from '@/img/map.png'

export function Contacts() {
  return (
    <div className="flex gap-8 p-8">
      <Card className="flex flex-col h-full lg:w-3/5 border-gray-200">
        <CardHeader className="pb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            Find us at
          </h3>
        </CardHeader>

        <CardContent className="mt-auto border-t pt-4">
          <p>Berlin, Germany</p>
          <p>+49 30 1234 5678</p>
          <p>plottrmail@plottr.com</p>
        </CardContent>
      </Card>

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
  )
}
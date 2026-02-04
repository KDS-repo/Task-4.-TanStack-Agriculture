import { useQuery } from '@tanstack/react-query'

interface Product {
  id: number
  title: string
  thumbnail: string
  images: string[]
  description: string
}

interface ProductsResponse {
  products: Product[]
  total: number
}

async function fetchProducts(limit: number = 3): Promise<Product[]> {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
  if (!response.ok) throw new Error("Fetch failed")
  const data: ProductsResponse = await response.json()
  return data.products
}

export function useImages(limit: number = 3) {
  return useQuery({
    queryKey: ["products", limit],
    queryFn: () => fetchProducts(limit),
    staleTime: 1000 * 60 * 5,
  })
}
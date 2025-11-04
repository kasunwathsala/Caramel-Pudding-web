"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { PRODUCTS } from "@/lib/products"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null)

  const flavors = Array.from(new Set(PRODUCTS.map((p) => p.flavor)))
  const filteredProducts = selectedFlavor ? PRODUCTS.filter((p) => p.flavor === selectedFlavor) : PRODUCTS

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3 text-foreground">Our Caramel Pudding Collection</h1>
          <p className="text-muted-foreground">Discover our carefully crafted selection of caramel pudding flavors</p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex gap-2 flex-wrap">
          <Button
            onClick={() => setSelectedFlavor(null)}
            variant={selectedFlavor === null ? "default" : "outline"}
            className={selectedFlavor === null ? "bg-primary" : ""}
          >
            All Flavors
          </Button>
          {flavors.map((flavor) => (
            <Button
              key={flavor}
              onClick={() => setSelectedFlavor(flavor)}
              variant={selectedFlavor === flavor ? "default" : "outline"}
              className={selectedFlavor === flavor ? "bg-primary" : ""}
            >
              {flavor}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-lg hover:border-primary transition-all cursor-pointer h-full flex flex-col">
                <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    <span className="text-xs font-semibold text-accent bg-secondary px-3 py-1 rounded-full">
                      {product.flavor}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

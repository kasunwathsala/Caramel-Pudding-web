"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { PRODUCTS } from "@/lib/products"
import Link from "next/link"

export default function ProductDetail() {
  const params = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("medium")
  const [addedToCart, setAddedToCart] = useState(false)

  const product = PRODUCTS.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: `${product.id}-${size}`,
      name: product.name,
      price: product.price,
      quantity,
      flavor: product.flavor,
      size,
      image: product.image,
    }
    addToCart(cartItem)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/products"
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <Card className="w-full aspect-square bg-secondary flex items-center justify-center overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-sm font-semibold text-primary bg-secondary px-3 py-1 rounded-full">
                {product.flavor}
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-2 text-foreground">{product.name}</h1>
              <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-foreground mb-8 leading-relaxed">{product.longDescription}</p>

            <div className="mb-8">
              <label className="text-sm font-semibold text-foreground mb-3 block">Size</label>
              <div className="flex gap-4">
                {["small", "medium", "large"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all border ${
                      size === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold text-foreground mb-3 block">Quantity</label>
              <div className="flex items-center gap-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center gap-2"
              >
                🛒{addedToCart ? "Added to Cart!" : "Add to Cart"}
              </Button>
              <Link href="/cart" className="flex-1">
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  View Cart
                </Button>
              </Link>
            </div>

            <Card className="p-6 bg-card">
              <h3 className="font-bold text-foreground mb-4">Product Details</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Flavor:</span>
                  <span className="text-foreground font-medium">{product.flavor}</span>
                </li>
                <li className="flex justify-between">
                  <span>Ingredients:</span>
                  <span className="text-foreground font-medium">{product.ingredients.join(", ")}</span>
                </li>
                <li className="flex justify-between">
                  <span>Shelf Life:</span>
                  <span className="text-foreground font-medium">3 months frozen</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

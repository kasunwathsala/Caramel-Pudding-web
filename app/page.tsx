"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PRODUCTS } from "@/lib/products"

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="text-6xl md:text-7xl">🍮</div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Premium <span className="text-primary">Caramel Pudding</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Handcrafted with passion using only the finest ingredients. Our silky smooth caramel pudding is the
              perfect balance of sweetness and sophistication.
            </p>
            <div className="flex gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Featured Flavors</h2>
            <p className="text-muted-foreground">Explore our most popular caramel pudding varieties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg hover:border-primary transition-all cursor-pointer h-full">
                  <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
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
      </section>

      {/* Features Section */}
      <section className="bg-card py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🥄</div>
              <h3 className="font-bold text-lg mb-2">Handcrafted</h3>
              <p className="text-muted-foreground">Made in small batches with care and attention to detail</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-bold text-lg mb-2">Premium Ingredients</h3>
              <p className="text-muted-foreground">
                Only the finest caramel, cream, and vanilla sourced from top suppliers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Shipped fresh and frozen to your doorstep within 48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Treat Yourself?</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join thousands of pudding lovers who've discovered the magic of our caramel creations
            </p>
            <Link href="/products">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-secondary">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

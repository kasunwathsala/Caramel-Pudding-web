"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function Navigation() {
  const { cart } = useCart()
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🍮
          </div>
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            Caramel Co.
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/products" className="text-foreground hover:text-primary transition-colors font-medium">
            Products
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </Link>
        </div>

        <Link href="/cart">
          <Button variant="outline" className="relative bg-transparent">
            🛒
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </nav>
  )
}

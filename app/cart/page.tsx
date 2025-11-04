"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 10 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold mb-2 text-foreground">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any caramel pudding yet</p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-accent text-primary-foreground">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/products"
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors"
        >
          ← Continue Shopping
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.flavor} - {item.size}
                    </p>
                    <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 border border-border rounded-lg p-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-muted rounded"
                    >
                      −
                    </button>
                    <span className="px-3 font-medium min-w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-muted rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive/80 transition-colors p-2"
                  >
                    🗑️
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-6 text-foreground">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg text-foreground">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground mb-3">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

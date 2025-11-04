"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("confirmation")
    setTimeout(() => {
      clearCart()
    }, 2000)
  }

  if (cart.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/products">
            <Button className="bg-primary hover:bg-accent text-primary-foreground">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md">
          <div className="mb-6 flex justify-center">
            <div className="text-6xl">✓</div>
          </div>
          <h1 className="text-4xl font-bold mb-3 text-foreground">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-2">Thank you for your order, {formData.firstName}!</p>
          <p className="text-muted-foreground mb-6">A confirmation email has been sent to {formData.email}</p>
          <p className="text-3xl font-bold text-primary mb-8">${total.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground mb-8">
            Your caramel pudding will be shipped within 24 hours and arrive fresh at your doorstep.
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-accent text-primary-foreground w-full">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors">
          ← Back to Cart
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Progress Indicator */}
            <div className="flex gap-4 mb-8">
              <div
                className={`flex-1 pb-3 border-b-2 transition-colors ${step === "shipping" || step === "payment" || step === "confirmation" ? "border-primary" : "border-muted"}`}
              >
                <div className="font-semibold text-sm text-primary">1. Shipping</div>
              </div>
              <div
                className={`flex-1 pb-3 border-b-2 transition-colors ${step === "payment" || step === "confirmation" ? "border-primary" : "border-muted"}`}
              >
                <div
                  className={`font-semibold text-sm ${step === "payment" || step === "confirmation" ? "text-primary" : "text-muted-foreground"}`}
                >
                  2. Payment
                </div>
              </div>
            </div>

            {/* Shipping Form */}
            {step === "shipping" && (
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Shipping Information</h2>
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    Continue to Payment
                  </Button>
                </form>
              </Card>
            )}

            {/* Payment Form */}
            {step === "payment" && (
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Payment Information</h2>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="bg-secondary p-4 rounded-lg text-sm text-muted-foreground">
                    This is a demo checkout. No actual payment will be processed.
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setStep("shipping")}
                    >
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 bg-primary hover:bg-accent text-primary-foreground">
                      Place Order
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-6 text-foreground">Order Summary</h2>

              <div className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-foreground font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-4">
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
                <div className="border-t pt-3 flex justify-between font-bold text-lg text-foreground">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

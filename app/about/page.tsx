import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🍮</div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">About Caramel Co.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where passion meets pudding. Our story is one of tradition, quality, and an unwavering commitment to
            creating the finest caramel pudding on Earth.
          </p>
        </div>

        {/* Our Story */}
        <Card className="p-12 mb-16 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2015, Caramel Co. started as a small artisan pudding kitchen in the heart of a bustling city.
                What began as a passion project between two friends quickly evolved into a beloved local institution.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe that exceptional caramel pudding should be accessible to everyone. Each batch is made with
                the same meticulous care and premium ingredients we've used since day one.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we ship our signature pudding to pudding lovers across the country, staying true to our original
                recipe and commitment to quality.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-9xl">🥄</div>
            </div>
          </div>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Quality</h3>
              <p className="text-muted-foreground">
                We source the finest caramel, cream, and vanilla. Never artificial, always authentic.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Passion</h3>
              <p className="text-muted-foreground">Made with love and attention to detail in small batches.</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-bold text-lg mb-3 text-foreground">Sustainability</h3>
              <p className="text-muted-foreground">Eco-friendly packaging and responsible sourcing practices.</p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Taste the Difference?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join our growing community of caramel pudding enthusiasts
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

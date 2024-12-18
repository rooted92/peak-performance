import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ChillersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Glycol Chillers
            </h1>
            <p className="text-xl text-gray-600">
              Our design department specializes in creating customized glycol chillers ranging from 5 to 100 tons.
              We provide comprehensive design, build, installation, and service solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Chiller 1 */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/high-capacity-chiller.jpg"
                      alt="Glycol Chiller System #1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h2 className="mb-4 text-2xl font-bold">High-Capacity Winery</h2>
                    <p className="text-gray-600">
                      Our flagship glycol chiller system, designed for optimal performance and energy efficiency.
                      Perfect for medium to large-scale winery operations, offering superior temperature control
                      for fermentation and storage processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chiller 2 */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:order-2">
                    <Image
                      src="/images/space-efficient-chiller.jpg"
                      alt="Glycol Chiller System #2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h2 className="mb-4 text-2xl font-bold">Space-Efficient Glycol</h2>
                    <p className="text-gray-600">
                      A versatile chiller solution that combines power with space efficiency.
                      Ideal for wineries with specific space requirements, this system maximizes
                      cooling capacity while minimizing floor space usage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chiller 3 */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/compact-chiller.jpg"
                      alt="Glycol Chiller System #3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h2 className="mb-4 text-2xl font-bold">Compact Performance</h2>
                    <p className="text-gray-600">
                      Our compact yet powerful chiller system, designed for smaller operations
                      without compromising on performance. Perfect for boutique wineries or as
                      a supplementary system for specific cooling needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Get Your Custom Chiller Solution</h2>
            <p className="mb-8 text-lg text-gray-600">
              Our design department is ready to provide you with a customized solution that meets your specific needs.
              Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a href="tel:7075263600" className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-blue-500" />
                <span className="text-lg font-semibold">(707) 526-3600</span>
              </a>
              <span className="hidden text-gray-400 sm:inline">|</span>
              <a href="tel:7075262237" className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-lg font-semibold">Fax: (707) 526-2237</span>
              </a>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


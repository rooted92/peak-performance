import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, Gauge, Zap, ThermometerSun, Settings2 } from 'lucide-react'
import Link from "next/link"

export default function GlycolHeatingSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Glycol Heating Systems
            </h1>
            <p className="text-xl text-gray-600">
              From portable to stationary solutions, we offer different models of Glycol Heating Systems 
              to fit your specific needs, ensuring optimal temperature control for your winery operations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Portable System */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src="/images/portable-glycol-heater.jpg"
                      alt="Portable Glycol Heating System"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h2 className="mb-4 text-2xl font-bold">Portable Glycol Heating System</h2>
                    <p className="mb-6 text-gray-600">
                      Our standard portable glycol heating units can be used to plug into a 30 amp 3-phase service 
                      and are 30" wide to fit through any doorway. Features include:
                    </p>
                    <ul className="mb-6 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <ThermometerSun className="h-5 w-5 text-blue-500" />
                        Low-level cutout with temperature/pressure relief valves
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings2 className="h-5 w-5 text-blue-500" />
                        Additional relief to prevent over-pressurization
                      </li>
                      <li className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-blue-500" />
                        9 kw of heat with 240 volt 3-phase power
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stationary System */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto md:order-2">
                    <Image
                      src="/images/stationary-glycol-heater.jpg"
                      alt="Stationary Glycol Heating System"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <h2 className="mb-4 text-2xl font-bold">Stationary Glycol Heating System</h2>
                    <p className="mb-6 text-gray-600">
                      Our stationary glycol heating units circulate from your boiler to a heat exchanger and back, 
                      providing efficient heating without the need for additional tanks. Each unit contains:
                    </p>
                    <ul className="mb-6 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-500" />
                        2 Hp pump for multi-tank heating capability
                      </li>
                      <li className="flex items-center gap-2">
                        <ThermometerSun className="h-5 w-5 text-blue-500" />
                        Bypass valve to maintain reservoir temperature
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings2 className="h-5 w-5 text-blue-500" />
                        Optional 6-tank connections
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">System Features</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <ThermometerSun className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Temperature Control</h3>
                    <p className="text-sm text-gray-600">
                      Precise temperature management with automatic controls to maintain optimal conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Settings2 className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Easy Installation</h3>
                    <p className="text-sm text-gray-600">
                      Designed for simple setup and integration with existing systems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Zap className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Energy Efficient</h3>
                    <p className="text-sm text-gray-600">
                      Optimized power consumption with efficient heating elements and circulation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Gauge className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Safety Features</h3>
                    <p className="text-sm text-gray-600">
                      Built-in safety measures including pressure relief and low-level cutouts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Get Your Custom Heating Solution</h2>
            <p className="mb-8 text-lg text-gray-600">
              Contact us today to discuss your glycol heating system needs. 
              We'll help you select the perfect solution for your facility.
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


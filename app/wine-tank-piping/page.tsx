import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, Thermometer, Settings2, Wrench, GitMerge } from 'lucide-react'
import Link from "next/link"

export default function WineTankPipingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/images/wine-tank-exterior.jpg'}
            alt="Wine tanks in winery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Wine Tank Piping Solutions
            </h1>
            <p className="text-xl text-gray-200">
              Professional wine tank piping and temperature control systems customized for your facility's specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Comprehensive Piping Solutions</h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Peak Performance Refrigeration provides customized wine tank piping and temperature
              controls for your facility. With automatic and dual function cooling control valves,
              you can run your wine tank on "set it and forget it" or maintain manual control over
              heating and cooling systems.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/wine-tanks-exterior-grass.jpg"
                      alt="Wine Tank Piping Installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold">Professional Installation</h3>
                    <p className="text-gray-600">
                      Our expert team ensures proper installation of all piping systems,
                      guaranteeing optimal performance and longevity.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/stainless-steel-tanks.jpg"
                      alt="Temperature Control Systems"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold">Temperature Control</h3>
                    <p className="text-gray-600">
                      Advanced temperature control systems with both automatic and manual options
                      for precise wine temperature management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                  <Settings2 className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Automatic Control</h3>
                    <p className="text-sm text-gray-600">
                      "Set it and forget it" functionality with automatic temperature control valves.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Thermometer className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Dual Function Control</h3>
                    <p className="text-sm text-gray-600">
                      Integrated heating and cooling control for complete temperature management.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Wrench className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Manual Override</h3>
                    <p className="text-sm text-gray-600">
                      Optional manual control for precise temperature adjustments when needed.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <GitMerge className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Custom Integration</h3>
                    <p className="text-sm text-gray-600">
                      Seamless integration with existing systems and infrastructure.
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
            <h2 className="mb-8 text-3xl font-bold">Get Started Today</h2>
            <p className="mb-8 text-lg text-gray-600">
              Contact us to discuss your wine tank piping needs. Our team will provide you with
              a professional consultation and custom solution for your facility.
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
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
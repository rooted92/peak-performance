import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, Fan, Thermometer, Wind, GaugeCircle } from 'lucide-react'
import Link from 'next/link'

export default function BarrelWarehousePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Barrel Warehouse Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Custom-designed cooling and heating systems for optimal barrel storage conditions. 
              We calculate your exact load requirements to provide the most efficient solution for your facility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src="/images/barrel-room-cooling.jpg"
                    alt="Barrel Room Cooling System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <h2 className="mb-6 text-3xl font-bold">Barrel Room Heating And Cooling</h2>
                  <p className="mb-6 text-gray-600">
                    We calculate your load requirements from the information you provide to us and design a 
                    barrel warehouse cooling system for your facility needs. The system can include automatic 
                    heating, night air and CO2 removal to provide you with the highest efficiency, thus 
                    lowering your energy usage.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700 sm:w-auto">
                      Request System Design
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">System Features</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Fan className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Advanced Ventilation</h3>
                    <p className="text-sm text-gray-600">
                      High-efficiency fan systems designed for optimal air circulation throughout your barrel storage facility.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Thermometer className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Temperature Control</h3>
                    <p className="text-sm text-gray-600">
                      Precise temperature management with automatic heating and cooling capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Wind className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">Night Air System</h3>
                    <p className="text-sm text-gray-600">
                      Utilize cool night air to naturally regulate temperature and reduce energy consumption.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <GaugeCircle className="h-8 w-8 shrink-0 text-blue-500" />
                  <div>
                    <h3 className="mb-2 font-semibold">CO2 Management</h3>
                    <p className="text-sm text-gray-600">
                      Integrated CO2 removal systems to maintain optimal atmospheric conditions.
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
              Contact us to discuss your barrel warehouse cooling and heating needs. 
              We'll help you design the perfect system for your facility.
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


import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, Clock, Clipboard, PenToolIcon as Tools, Shield, CheckCircle, Phone } from 'lucide-react'
import Link from "next/link"

export default function ServicingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cold-storage.jpg"
            alt='Exterior refrigiration unit for cold storage'
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              24/7 Professional Service
            </h1>
            <p className="text-xl text-gray-200">
              Protecting your investment with prompt, professional refrigeration service and maintenance
            </p>
            <div className="mt-8">
              <Link href="tel:7075263600">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Comprehensive Service Solutions</h2>
            <p className="mb-12 text-center text-lg text-gray-600">
              Your refrigeration system represents a major investment, and Peak Performance Refrigeration, Inc.
              is the best company to provide effective maintenance, repairs and analysis to protect this vital
              part of your facility.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Clock className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-bold">24/7 Emergency Service</h3>
                  </div>
                  <p className="text-gray-600">
                    We provide round-the-clock emergency service that connects you directly with our
                    on-call technicians via cellular phone at any time you call.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Clipboard className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-bold">200+ Point Inspection</h3>
                  </div>
                  <p className="text-gray-600">
                    Our base service system provides over 200 checkpoints, and we add custom
                    checkpoints for your particular equipment needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Our Service</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <Tools className="h-12 w-12 text-blue-500" />
                  <h3 className="font-semibold">Custom Maintenance</h3>
                  <p className="text-sm text-gray-600">
                    Customized service plans tailored to your specific equipment and facility needs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-500" />
                  <h3 className="font-semibold">Preventive Care</h3>
                  <p className="text-sm text-gray-600">
                    Regular maintenance to prevent equipment failures and extend system life
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-blue-500" />
                  <h3 className="font-semibold">Expert Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Professional system analysis to optimize performance and reduce energy costs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Service Process</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-auto">
                <Image
                  src="/images/condenser-tower.jpg"
                  alt="Service Equipment"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-600">
                  You purchased a custom designed refrigeration system for your particular needs,
                  and it should be serviced in a customized manner for your specific needs. Our
                  comprehensive service approach includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Regular maintenance checks and system optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Custom checkpoints specific to your equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>24/7 emergency response from trained technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Comprehensive system analysis and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Need Service?</h2>
            <p className="mb-8 text-lg text-gray-600">
              Contact us 24/7 for emergency service or to schedule regular maintenance.
              Our professional team is always ready to help.
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
                  Schedule Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


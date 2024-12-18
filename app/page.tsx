import { PhoneCall, Mail, MapPin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Hero from '@/components/ui/Hero'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Winery Refrigeration</h3>
                <p className="text-center text-gray-600">
                  Customized cooling solutions for wineries and wine storage facilities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Cold Storage</h3>
                <p className="text-center text-gray-600">
                  Professional cold storage solutions for various industries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Food Processing</h3>
                <p className="text-center text-gray-600">
                  Specialized cooling systems for food processing facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">About Us</h2>
            <p className="mb-6 text-lg text-gray-600">
              Since 1990, Peak Performance Refrigeration has been servicing Sonoma, Napa Valley, Mendocino and Lake County
              wineries. We specialize in winery refrigeration, cold storage and food processing, providing personalized
              service and professional solutions.
            </p>
            <p className="text-lg text-gray-600">
              Located in Santa Rosa, CA, we provide a higher level of service at competitive rates. Our commitment is to
              reduce your equipment failures and lower your operating costs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Contact Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <PhoneCall className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-600">(707) 526-3600</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Mail className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600">peakperformanceref@att.net</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <MapPin className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-600">Santa Rosa, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
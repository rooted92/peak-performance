import { PhoneCall, Mail, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container flex flex-col space-y-4 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="relative h-16 w-48">
                <Image
                  src="/peakperformance-logo.png"
                  alt="Peak Performance Refrigeration, Inc."
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 ease-in-out">
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-red-600">
                      Equipment & Systems
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <NavigationMenuLink asChild>
                          <Link href="/chillers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Chillers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Customized glycol chillers from 5 to 100 tons
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/glycol-heating-systems" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Glycol Heating Systems</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Portable and stationary heating solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-red-600">
                      Installation Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <NavigationMenuLink asChild>
                          <Link href="/wine-tank-piping" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Wine Tank Piping</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Custom wine tank piping and temperature control
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/barrel-warehouse" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Barrel Warehouse</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Barrel room heating and cooling solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/servicing" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 ease-in-out">
                        Servicing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="hidden items-center space-x-4 md:flex">
              <a href="tel:7075263600" className="flex items-center space-x-2">
                <PhoneCall className="h-5 w-5 text-blue-500" />
                <span className="text-lg font-semibold">(707) 526-3600</span>
              </a>
              <Button className="bg-red-600 hover:bg-red-700">Contact Us</Button>
            </div>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                State of the Art Refrigeration Solutions
              </h1>
              <p className="text-xl text-gray-600">
                Specializing in winery refrigeration, cold storage, and food processing systems in Northern California.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for hero image */}
              <div className="aspect-square rounded-lg bg-gray-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container px-4">
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
        <div className="container px-4">
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
        <div className="container px-4">
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

      {/* Footer */}
      <footer className="mt-auto border-t bg-white py-8">
        <div className="container px-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Peak Performance Refrigeration, Inc. Lic. #795823
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
import React from 'react'

import { PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
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

const Header = () => {
  return (
    <div>
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="relative h-16 w-48">
                <Image
                  src="/images/peakperformance-logo.png"
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
    </div>
  )
}

export default Header
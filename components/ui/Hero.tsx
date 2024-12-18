import React from 'react'
import { Button } from './button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container mx-auto px-4">
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
                        <div className="aspect-square rounded-lg bg-gray-100">
                            <Image
                                src="/images/cold-storage.jpg"
                                alt="Barrels of wine stacked in a cellar"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
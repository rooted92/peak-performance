import React from 'react'

import { Card, CardContent } from '@/components/ui/card'

const Services = () => {
    return (
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
                            <h3 className="text-xl font-semibold text-center">Winery Refrigeration</h3>
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

    )
}

export default Services
import React from 'react'

const About = () => {
    return (
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
    )
}

export default About
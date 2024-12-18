import React from 'react'
import { PhoneCall, Mail, MapPin } from 'lucide-react'

const ContactUs = () => {
    return (
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
    )
}

export default ContactUs
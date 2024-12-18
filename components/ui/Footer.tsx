import React from 'react'

import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

const scheduleData = [
  { day: 'Monday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
]

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <PhoneCall className="mr-2 h-5 w-5 text-blue-500" />
                                <span>(707) 526-3600</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                                <span>peakperformanceref@att.net</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                                <span>Santa Rosa, CA</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                            <li><Link href="/chillers" className="hover:text-red-600">Chillers</Link></li>
                            <li><Link href="/glycol-heating-systems" className="hover:text-red-600">Glycol Heating Systems</Link></li>
                            <li><Link href="/wine-tank-piping" className="hover:text-red-600">Wine Tank Piping</Link></li>
                            <li><Link href="/barrel-warehouse" className="hover:text-red-600">Barrel Warehouse</Link></li>
                            <li><Link href="/servicing" className="hover:text-red-600">Servicing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Hours of Operation</h3>
                        <ul className="space-y-2">
                            {scheduleData.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <Clock className="mr-2 h-5 w-5 text-blue-500" />
                                    <span>{item.day}: {item.hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">About Us</h3>
                        <p className="text-sm text-gray-600">
                            Since 1990, Peak Performance Refrigeration has been providing top-notch refrigeration solutions to Sonoma, Napa Valley, Mendocino, and Lake County wineries. We specialize in winery refrigeration, cold storage, and food processing systems.
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-8 text-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Peak Performance Refrigeration, Inc. Lic. #795823
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
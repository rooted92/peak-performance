import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white pt-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-600">
                            Whether you&apos;re looking for a quote or have a general inquiry, we&apos;re here to help.
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Card className="mx-auto max-w-2xl">
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                            <CardDescription>Fill out this form and we&apos;ll respond promptly.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your full name" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Your email address" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" type="tel" placeholder="Your phone number" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Reason for Contact</Label>
                                        <RadioGroup defaultValue="general">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="general" id="general" />
                                                <Label htmlFor="general">General Inquiry</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="quote" id="quote" />
                                                <Label htmlFor="quote">Request a Quote</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="service" id="service" />
                                                <Label htmlFor="service">Schudule Service</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="consultation" id="consultation" />
                                                <Label htmlFor="consultation">Request a Consultaion</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Your message or details about your project" required />
                                    </div>
                                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}


import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-auto border-t bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Peak Performance Refrigeration, Inc. Lic. #795823
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
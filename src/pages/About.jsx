import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
    <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">About Eco Bazar</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to <span className="font-semibold">Eco Bazar</span>, your one-stop destination for sustainable and eco-friendly shopping. 
            We are passionate about providing high-quality products that are kind to both you and the planet. 
            Our mission is to make sustainable living easy, affordable, and accessible to everyone.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
            At Eco Bazar, we carefully curate our collections to ensure they meet the highest standards of sustainability, quality, and style. 
            Join us on our journey to create a greener, cleaner world—one product at a time.
        </p>
    </div>

    <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
                To inspire and empower everyone to live sustainably and make eco-friendly choices every day.
            </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
                To offer top-quality, eco-friendly products while raising awareness about environmental conservation.
            </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-2">Our Values</h3>
            <p className="text-gray-600">
                Sustainability, integrity, customer satisfaction, and a commitment to a greener future.
            </p>
        </div>
    </div>
</div>

  )
}

export default About
import React from 'react'

const OurValues = () => {
    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our <span className='text-purple-500'>Values</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:-translate-y-4 transition ease-linear duration-150">
                    <h3 className="text-2xl font-bold mb-4">Quality</h3>
                    <p className="text-gray-800 leading-relaxed">Quality is at the core of everything we do. We are committed to delivering excellence through meticulous attention to detail, robust processes, and continuous improvement. Our unwavering dedication to quality ensures that our clients receive exceptional websites and digital solutions that surpass expectations.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:-translate-y-4 transition ease-linear duration-150">
                    <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                    <p className="text-gray-800 leading-relaxed">Innovation is our driving force. We embrace curiosity, think outside the box, and push the boundaries of what&apos;s possible. We are constantly exploring new technologies, trends, and ideas to bring fresh perspectives to our clients&apos; projects. By fostering a culture of innovation, we deliver cutting-edge solutions that make a lasting impact in the digital landscape.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:-translate-y-4 transition ease-linear duration-150">
                    <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
                    <p className="text-gray-800 leading-relaxed">Your satisfaction is our priority. We strive to exceed your expectations by delivering exceptional results, providing personalized solutions, and ensuring a seamless customer experience. Your success is our success, and we are committed to building strong, long-lasting partnerships based on trust and satisfaction.</p>
                </div>
            </div>
        </div>
    )
}

export default OurValues

import React from 'react'

const OurValues = ({ ourvalues }) => {
    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our <span className='text-purple-500'>Values</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ourvalues.map((e) => {
                    return (
                        <div key={e.uid} className="bg-white rounded-lg shadow-lg p-6 hover:-translate-y-4 transition ease-linear delay-100 hover:bg-purple-500 hover:text-white duration-200">
                            <h3 className="text-2xl font-bold mb-4">{e.title}</h3>
                            <p className="leading-relaxed">{e.content}</p>
                        </div>
                    )
                })}

                {/* <div className="bg-white rounded-lg shadow-lg p-6 hover:-translate-y-4 transition ease-linear delay-100 hover:bg-purple-500 hover:text-white duration-200">
                    <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                    <p className="leading-relaxed">Innovation is our driving force. We embrace curiosity, think outside the box, and push the boundaries of what&apos;s possible. We are constantly exploring new technologies, trends, and ideas to bring fresh perspectives to our clients&apos; projects. By fostering a culture of innovation, we deliver cutting-edge solutions that make a lasting impact in the digital landscape.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:-translate-y-4 transition ease-linear delay-100 hover:bg-purple-500 hover:text-white duration-200">
                    <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
                    <p className="leading-relaxed">Your satisfaction is our priority. We strive to exceed your expectations by delivering exceptional results, providing personalized solutions, and ensuring a seamless customer experience. Your success is our success, and we are committed to building strong, long-lasting partnerships based on trust and satisfaction.</p>
                </div> */}
            </div>
        </div>
    )
}

export default OurValues

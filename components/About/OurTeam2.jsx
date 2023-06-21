import Image from 'next/image';
import React from 'react'

const OurTeamSection = () => {
    const ourteam = [
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?man,businessman"
        },
        {
            name: "Ram Krishna Dhakal",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?boy"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?girl"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?kid"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?girl,woman"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?woman"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?man,businessman"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?boy"
        },
        {
            name: "Sumit Shrestha",
            designation: "Chief Executive Officer (CEO)",
            image: "https://source.unsplash.com/300x300/?girl"
        },
    ];

    return <>
        {ourteam.map((e, index) => {
            return (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <Image height={300} width={300} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={e.image} />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">{e.name}</h2>
                            <p className="text-gray-500">{e.designation}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </>

}

const OurTeam2 = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Our <span className='text-purple-500'>Team</span></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <OurTeamSection />
                    {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p className="text-gray-500">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                <p className="text-gray-500">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                                <p className="text-gray-500">DevOps</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                                <p className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                <p className="text-gray-500">UX Researcher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                <p className="text-gray-500">QA Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                <p className="text-gray-500">System</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                <p className="text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default OurTeam2

import React from 'react'

const OurTeam = () => {
    return (
        <>
            <div className="flex items-center justify-center text-center">
                <div className="flex flex-col p-2 m-2  max-w-7xl">
                    <div className="text-3xl font-medium">Meet Our Team</div>
                    <div className="text-sm mx-2 md:text-xl text-stone-500">Meet the team member who have contributed their designs for this websites.</div>
                    <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">Resource person of Tailblocks communinty</div>


                    <div className="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">

                        <div className="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full  ">
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?man,businessman" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">John Doe</div>
                                <div className=" italic text-gray-500">CEO, Tailblocks</div>
                            </div>
                        </div>
                        <div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?boy" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Arkay</div>
                                <div className=" italic text-gray-500">Executive </div>
                            </div>
                        </div>
                        <div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?girl" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Elina Gilbert</div>
                                <div className=" italic text-gray-500">HR</div>
                            </div>
                        </div>

                    </div>
                    <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
                        <div className="flex items-center ml-4 md:ml-0 space-x-2 px-6 py-2 md:w-1/3 w-full  ">
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?kid" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Clay Johnson</div>
                                <div className=" italic text-gray-500">Manager</div>
                            </div>
                        </div>
                        <div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?girl,woman" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Hannah Saw</div>
                                <div className=" italic text-gray-500">Marketing </div>
                            </div>
                        </div>
                        <div className="flex items-center  space-x-2 px-6 py-2 md:w-1/3 w-full  ">
                            <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">

                                <img src="https://source.unsplash.com/300x300/?woman" alt="" className="" />
                            </div>
                            <div className="flex-col">

                                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Wednesday </div>
                                <div className=" italic text-gray-500">Financer</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam

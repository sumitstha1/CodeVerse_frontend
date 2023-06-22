import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const UnderMaintenance = () => {
    return (
        <div class="flex items-center justify-center h-screen">
            <div class="flex-col space-y-4 text-left px-6">
                <div class="text-7xl font-bold text-purple-700">503</div>
                <div class="text-stone-500 font-medium">Under maintenance, please come back later!!</div>
                <div class="flex space-x-4 items-center justify-start">
                    <Link href="/">
                        <div class="bg-purple-700 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">
                            <BiArrowBack />
                        </div>
                    </Link>
                    <div class="text-sm font-medium text-stone-500">Back to Home Page</div>
                </div>
            </div>
        </div>

    )
}

export default UnderMaintenance

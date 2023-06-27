import React, { useState } from 'react'
import { FaViber, FaFacebookF, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import notify from '../../utils/notify';
import { STATUSCODES } from '../../Data/statusCodes';
import Link from 'next/link';

const ContactSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handleChange = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name == "message") {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, email, message }

        try {
            const response = await fetch(process.env.API_URL + "/client/contact/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                notify("We have successfully received your message. We will mail you soon😊!!!")
                setName('')
                setEmail('')
                setMessage('')
            } else {
                notify(`${STATUSCODES[response.status]}, Please try again`, "error")
                console.log("error")
            }
        }
        catch (err) {
            notify("An error occured. Please try again later.", "error")
            console.log("error")
        }
    }

    return (
        <>
            <section id="contact" class="relative w-full min-h-[80vh] bg-transparent text-purple-500">
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-800 h-32 w-full"></div>

                <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">

                    <div class="w-full md:w-1/2 p-5 md:px-0 mx-5">
                        <div class="bg-gray-900 border border-purple-500 w-full lg:w-1/2 h-full p-5 pt-8 mt-28">
                            <h3 class="text-2xl font-semibold mb-5">
                                My Social Media
                            </h3>
                            <div class="flex flex-col gap-3">
                                <Link href="https://www.facebook.com/codeverse.np" target='_blank' class="flex items-center hover:text-white hover:bg-purple-500 p-2">
                                    <FaFacebookF className='w-7 h-7 mr-3' />
                                    Facebook
                                </Link>
                                <Link href="https://m.me/codeverse.np" target='_blank' class="flex items-center hover:text-white hover:bg-purple-500 p-2">
                                    <FaFacebookMessenger className='w-7 h-7 mr-3' />
                                    Messenger
                                </Link>
                                <Link href="https://instagram.com/codeverse.np/" target='_blank' class="flex items-center hover:text-white hover:bg-purple-500 p-2">
                                    <FaInstagram className='w-7 h-7 mr-3' />
                                    Instagram
                                </Link>
                                <Link href="viber://chat/?number=%2B9779815980798" target='_blank' class="flex items-center hover:text-white hover:bg-purple-500 p-2">
                                    <FaViber className='w-7 h-7 mr-3' />
                                    Viber
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} class="w-full md:w-1/2 border border-purple-500 p-6 bg-gray-900">
                        <h2 class="text-2xl pb-3 font-semibold">
                            Send Message
                        </h2>
                        <div>
                            <div class="flex flex-col mb-3">
                                <label for="name">Name</label>
                                <input
                                    type="text" id="name"
                                    class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-purple-500 focus:outline-none focus:bg-gray-800 focus:text-purple-500 placeholder:text-purple-400 placeholder:text-opacity-30" name='name' placeholder='John Doe' onChange={handleChange}
                                />
                            </div>
                            <div class="flex flex-col mb-3">
                                <label for="email">Email</label>
                                <input
                                    type="text" id="email"
                                    class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-purple-500 focus:outline-none focus:bg-gray-800 focus:text-purple-500 placeholder:text-purple-400 placeholder:text-opacity-30" name='email' placeholder='johndoe@gmail.com' onChange={handleChange}
                                />
                            </div>
                            <div class="flex flex-col mb-3">
                                <label for="message">Message</label>
                                <textarea
                                    rows="4" id="message"
                                    class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-purple-500 focus:outline-none focus:bg-gray-800 focus:text-purple-500 placeholder:text-purple-400 placeholder:text-opacity-30" name='message' placeholder='Enter you message here...' onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div class="w-full pt-3">
                            <button type="submit" class="w-full bg-gray-900 border border-purple-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-purple-500 hover:text-white text-xl cursor-pointer">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactSection

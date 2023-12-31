import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaViber, FaFacebookF, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsChevronRight } from 'react-icons/bs';
import notify from '../utils/notify';
import { STATUSCODES } from '../Data/statusCodes';

const Footer = () => {

    const [service, setService] = useState([]);

    const [email, setEmail] = useState('');
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.API_URL + '/service/');
                const jsonData = await response.json();
                setService(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        if (e.target.name == "email") {
            setEmail(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { email }

        try {
            const response = await fetch(process.env.API_URL + "/account/newsletter/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                notify("You have successfully subscribed to our newsletter😊!")
                setEmail('')
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
        <div className='w-[100vw]'>
            <div className=" flex items-center justify-around">
                <div className="items-start relative w-full flex flex-row justify-between mt-10">
                    <div className="relative">
                        <div className="bg-white p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
                            <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                                <h1 className="text-purple-600 text-xl font-medium">Company</h1> <br />
                                <p className="text-gray-500 font-medium text-base hover:text-purple-600 "> Boudha Street <br />
                                    Chabahil, Kathmandu <br /> Nepal </p> <br />
                                <p className="text-gray-500 font-medium text-base hover:text-purple-600 cursor-pointer"> <strong
                                    className="tracking-wide text-purple-600 font-normal">Phone:</strong> <Link href={"tel:+9779815980798"}>+977 9815980798</Link> </p>
                                <p className="text-gray-500 font-medium text-base hover:text-purple-600 cursor-pointer"> <strong
                                    className="tracking-wide text-purple-600 font-normal">Email:</strong> <Link href={"mailto:web.codeverse@gmail.com"}>web.codeverse@gmail.com</Link> </p>
                            </div>
                            <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
                                <h1 className="text-purple-600 text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
                                <ul className="mt-2 text-gray-500 font-medium">
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href={"/"} className="hover:text-purple-600">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href={"/about"} className="hover:text-purple-600">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href={"/services"} className="hover:text-purple-600">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href={"/portfolio"} className="hover:text-purple-600">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href={"/blog"} className="hover:text-purple-600">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href={"#"} className="hover:text-purple-600">
                                            Terms and Condition
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="leading-9 md:w-3/4 md:order-4">
                                <h1 className="text-purple-600 text-xl font-medium tracking-[0.030rem]"> Our Services </h1>
                                <ul className="mt-2 text-gray-500 font-medium">
                                    {service.map((e) => {
                                        return (
                                            <li key={e.uid}>
                                                <i className="fa fa-chevron-right text-purple-600"></i>
                                                <Link href={`/services/${e.slug}`} className="hover:text-purple-600">
                                                    {e.title}
                                                </Link>
                                            </li>)
                                    })}
                                    {/* <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href="#" className="hover:text-purple-600">
                                            Backend Development
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href="#" className="hover:text-purple-600">
                                            API Development
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href="#" className="hover:text-purple-600">
                                            Hosting / Deployment
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-purple-600"></i>
                                        <Link href="#" className="hover:text-purple-600">
                                            Frontend Development
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="md:order-2 lg:order-last">
                                <h1 className="text-purple-600 text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1> <br />
                                <p className="text-gray-500 font-medium w-3/5 leading-7 mb-5 md:w-3/4"> Join our newsletter and never
                                    miss out any updates, discounts and offers.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <input type="email"
                                        placeholder="Enter E-mail Here"
                                        className="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:bordermd:w-1/2 lg:w-3/5 border"
                                        name='email' onChange={handleChange}
                                        />
                                    <button type='submit' className="text-white bg-purple-600 p-1 -translate-x-1 rounded-br-xl hover:bg-purple-500"> Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-gray-900 p-3 flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0 w-full">
                <div className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                    <p>Copyright &copy; 2023 <Link href={"/"} className='hover:text-purple-300'>CodeVerse</Link>. All Rights Reserved.</p>
                </div>
                <div className="md:flex flex-row justify-end items-center mr-20 mx-3 hidden text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                    <Link href="viber://chat/?number=%2B9779815980798" className="w-8 h-8 bg-purple-500 hover:text-purple-500 flex flex-col rounded-full pt-[3px] hover:bg-gray-200 justify-center items-center">
                        <FaViber />
                    </Link>
                    <Link href="https://www.facebook.com/codeverse.np" className="w-8 h-8 bg-purple-500 hover:text-purple-500 flex flex-col rounded-full pt-[3px] hover:bg-gray-200 justify-center items-center">
                        <FaFacebookF />
                    </Link>
                    <Link href="https://m.me/codeverse.np" className="w-8 h-8 bg-purple-500 hover:text-purple-500 flex flex-col rounded-full pt-[3px] hover:bg-gray-200 justify-center items-center">
                        <FaFacebookMessenger />
                    </Link>
                    <Link href="https://instagram.com/codeverse.np/"
                        className="w-8 h-8 bg-purple-500 hover:text-purple-500 flex flex-col rounded-full pt-[3px] hover:bg-gray-200 justify-center items-center">
                        <FaInstagram />
                    </Link>
                    <Link href="mailto:web.codeverse@gmail.com"
                        className="w-8 h-8 bg-purple-500 hover:text-purple-500 flex flex-col rounded-full pt-[3px] hover:bg-gray-200 justify-center items-center">
                        <AiOutlineMail />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer

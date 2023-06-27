import React from 'react'
import { useEffect, useState } from 'react';
import notify from "../../utils/notify"
import { STATUSCODES } from '../../Data/statusCodes'

const HireMe = () => {

    const [data, setData] = useState([]);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [service, setService] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.API_URL + '/service/');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == "company") {
            setCompany(e.target.value)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name == "contact") {
            setContact(e.target.value)
        }
        else if (e.target.name == "service") {
            setService(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, company, email, contact, service }

        try {
            const response = await fetch(process.env.API_URL + "/client/hire/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                notify("We have successfully received your request. We will mail you soon😊!!!")
                setName('')
                setEmail('')
                setCompany('')
                setContact('')
                setService('')
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

    // console.log(data)
    // console.log(process.env.API_URL)

    return (
        <div>
            {/* <h1>Hire Us</h1> */}
            <section className='body-font text-gray-600 flex justify-center'>
                <div className='lg:w-[90%] w-[100%] h-full px-5 py-6 flex justify-center items-center flex-col md:justify-start md:items-start'>
                    <h1 className='text-4xl font-semibold tracking-wider text-purple-600 text-center md:text-start' id='hire_us'>Hire Us</h1>
                    <div className=' flex lg:justify-between lg:flex-row flex-col h-full my-8'>
                        <div className='lg:w-1/2 w-[100%] mr-2 h-full flex justify-center items-center lg:justify-start' >
                            <div className='w-[85%] lg:flex lg:justify-center items-center flex-col h-full ' >
                                <h2 className='text-2xl py-5 text-center lg:text-start'>&quot;<span className='text-purple-700'>CodeVerse:</span> Elevate Your Digital Presence, Choose Excellence!&quot;</h2>
                                <p className='py-5 text-center lg:text-start'>Unlock your business&apos;s true potential with CodeVerse. Empower your digital presence, enhance user experiences, and drive growth with our expert team of developers. Let&apos;s collaborate and take your business to new heights. Contact us today!</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-[100%] md:px-5 py-2' data-aos="fade-left" id='hire_me'>
                            <form onSubmit={handleSubmit}>
                                <div className='flex md:flex-row flex-col justify-between mx-6 mt-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="name">Name <span className='text-red-600'>*</span></label>
                                        <input type="text" onChange={handleChange} name="name" id='name' className='px-2 mt-2 w-64 py-1 border rounded border-gray-300 shadow-sm shadow-gray-400 text-gray-800 outline-black' required placeholder='Full Name' />
                                    </div>
                                    <div className='flex flex-col md:mt-0 mt-4'>
                                        <label htmlFor="company">Company Name</label>
                                        <input type="text" onChange={handleChange} name="company" className='px-2 mt-2 w-64 py-1 border rounded border-gray-300 shadow-sm shadow-gray-400 text-gray-800 outline-black' id='company' placeholder='Company Name' />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col justify-between mx-6 mt-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="contact">Contact Number <span className='text-red-600'>*</span></label>
                                        <input type="text" onChange={handleChange} required name="contact" className='px-2 mt-2 w-64 py-1 border rounded border-gray-300 shadow-sm shadow-gray-400 text-gray-800 outline-black' id='contact' placeholder='Contact Number' />
                                    </div>
                                    <div className='flex flex-col md:mt-0 mt-4'>
                                        <label htmlFor="name">Email <span className='text-red-600'>*</span></label>
                                        <input type="email" onChange={handleChange} required name="email" className='px-2 mt-2 w-64 py-1 border rounded border-gray-300 shadow-sm shadow-gray-400 text-gray-800 outline-black' id='email' placeholder='Email' />
                                    </div>
                                </div>


                                <div className='flex flex-col mx-6 mt-4'>
                                    <label for="underline_select" className="sr-only">Underline select </label>
                                    <select id="underline_select" onChange={handleChange} className="block w-64 lg:w-72 py-2.5 px-2 text-base text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" required name='service'>
                                        <option selected>Choose a service</option>
                                        {data.map((e) => {
                                            return (
                                                <option key={e.uid} value={e.uid}>{e.title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type='submit' className='bg-purple-500 mx-5 md:mx-6 hover:bg-purple-700 transition ease-in delay-75 duration-100 md:px-5 px-4 py-2 rounded my-6 text-white hover:shadow-lg hover:shadow-purple-300 text-sm md:text-base'>Hire Now</button>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default HireMe

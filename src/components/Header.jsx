import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import mslogo from "../Assests/mslogo.png"
import { VscSearch } from "react-icons/vsc";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!isOpen)
    }
    return (
        <>
            <div className="navbar relative w-screen flex justify-between items-center p-4 pt-3 md:px-20 select-none">

                <div className="hamburger flex justify-center items-center md:order-2">
                    <div className=" text-3xl cursor-pointer md:hidden"><IoIosMenu onClick={handleMenu} /></div>
                    <div className="search md:hidden ml-6"><VscSearch /></div>
                </div>

                <div className="logo flex justify-center items-center md:order-1">
                    <img className='w-[108px]' src={mslogo} alt="" />
                    <div className="features mt-2 absolute inset-0 -translate-x-32 md:translate-x-0 md:static bg-gray-200 md:bg-white w-fit md:w-auto  md:flex justify-center items-center md:mx-4 md:space-x-2">
                        <div className="fitems text-sm  hover:border-black border-b-2 border-transparent">Microsoft 365 </div>
                        <div className="fitems text-sm  hover:border-black border-b-2 border-transparent"> Office </div>
                        <div className="fitems text-sm  hover:border-black border-b-2 border-transparent"> Copilot </div>
                        <div className="fitems text-sm  hover:border-black border-b-2 border-transparent">Windows </div>
                        <div className="fitems text-sm  hover:border-black border-b-2 border-transparent"> Support</div>
                    </div>
                </div>

                <div className="cart flex justify-center items-center md:order-3 md:mt-2">
                    <div className="search hidden md:flex justify-center items-center gap-9 text-sm text-black "><span className='border-b-2 border-transparent hover:border-black'>All Microsoft </span><span className='-mr-6 border-b-2 border-transparent hover:border-black'>Search</span><VscSearch className=' text-lg mt-1' /></div>
                    <div className='flex justify-center items-center gap-7 text-xl ml-8'><span className='text-sm -mr-4 hidden md:block border-b-2 border-transparent hover:border-black'>Cart</span> <GrCart /> <span className='text-sm -mr-4 hidden md:block border-b-2 border-transparent hover:border-black'>Sign in</span> <VscAccount className='text-2xl' /></div>
                </div>


            </div>

            {
                isOpen &&
                <div className='bg-[#f2f2f2] absolute w-[100vw] top-12  z-10'>
                    <ul>
                        <li className='px-6 py-[20px] '>Microsoft 365</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Office</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Copilot</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Windows</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Support</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Software</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>PC's & Devices</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Entertainment</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Business</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Developer and IT</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>Other</li><hr className='bg-[#dfbbbb]' />
                        <li className='px-6 py-[14px]'>View Sitemap</li><hr className='bg-[#dfbbbb]' />
                    </ul>
                </div>
            }

        </>
    )
}

export default Header

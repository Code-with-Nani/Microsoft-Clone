import React from 'react'
import img1 from "../Assests/sliderimg.avif"
import { RxCaretRight } from "react-icons/rx"
import img2 from "../Assests/sliderimg2.avif"



const Home = () => {
    return (
        <>
            <div className="slider hidden xl:block w-screen px-2 select-none">

                <div className="right relative ">
                    <img src={img1} alt="" />
                </div>
                <div className="left absolute top-[30%] left-[4.5%] -translate-y-10  ">
                    <h1 className='text-[40px] tracking-tight font-semibold -mb-2'>Maximise the everyday with</h1>
                    <h2 className='text-[40px] tracking-tight font-semibold mb-1 '>Microsoft 365</h2>
                    <p className='w-[28rem] mb-5'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                    <div className="btn flex ">
                        <button className='hover:bg-[#5332af] bg-[#0067b8]  px-3 py-[7px] text-white text-lg font-semibold tracking-tight '>For one Person</button>
                        <button className='mx-6 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'>For up to six people  <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                    </div>

                </div>
            </div>

            <div className="card xl:hidden w-screen select-none ">
                <div className="img px-2">
                    <img className='w-screen' src={img2} alt="" />
                    <div className="text px-2  bg-[#ffffff]">
                        <h1 className='px-4 pt-5 text-[25px] font-semibold'>Maximise the everyday with</h1>
                        <h2 className='px-4 -translate-y-1 text-[25px] font-semibold'>Microsoft 365</h2>
                        <p className='pl-4 pr-2 pt-2'>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                        <button className='bg-[#0067b8] mx-4 my-4 px-3 py-[7px] text-white text-lg font-semibold tracking-tight '>For one Person</button>
                        <button className='mx-4 pb-4 hover:underline hover:gap-1 flex justify-center text-[17px] font-semibold tracking-normal items-center text-blue-500'>For up to six people  <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                    </div>
                </div>
            </div>





            <div className="cards  mt-10">

                <div className="flex flex-wrap justify-center cursor-pointer ">

                    <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                        <img className="w-full  " src="/card1.jpg" alt="" />
                        <div className="p-2">
                            <h1 className='text-3xl  font-semibold'>Designed for life today - and tomorrow</h1>
                            <p className="text-gray-700 text-base mt-4">The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                            <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> See if your PC is ready <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                        </div>
                    </div>


                    <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                        <img className="w-full  " src="/card2.avif" alt="" />
                        <div className="p-2">
                            <h1 className='text-3xl font-semibold'>Microsoft Edge</h1>
                            <p className="text-gray-700 text-base mt-4">World-class performance with more privacy, more productivity and more value while you browse.</p>
                            <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> Download now <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                        </div>
                    </div>


                    <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                        <img className="w-full  " src="/card3.webp" alt="" />
                        <div className="p-2">
                            <h1 className='text-3xl font-semibold'>Microsoft OneDrive</h1>
                            <p className="text-gray-700 text-base mt-4">Save your files and photos to OneDrive and access them from any device, anywhere.</p>
                            <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> Learn more <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                        </div>
                    </div>


                    <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                        <img className="w-full  " src="/card4.webp" alt="" />
                        <div className="p-2">
                            <h1 className='text-3xl font-semibold'>OneNote</h1>
                            <p className="text-gray-700 text-base mt-4">Organise your notes and your life.</p>
                            <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> Learn more <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                        </div>
                    </div>


                </div>
            </div>





            <div className="lgcard  hidden xl:block  p-2 select-none ">
                <div className="bg h-[70vh] m-16  bg-cover bg-center ">
                    <h1 className='text-[36px] tracking-tight font-semibold pt-48 pl-32 '>Outlook for iOS and</h1>
                    <h2 className='text-[36px] tracking-tight font-semibold -mt-2 pl-32 '>Android</h2>
                    <h2 className=' pt-2  pl-32 '>Connect. Organise. Get things done.</h2>
                    <button className='hover:bg-[#5332af] bg-[#0067b8]  px-3 py-[7px] ml-32 mt-3 text-white text-lg font-semibold tracking-tight '>Download now</button>
                </div>
            </div>



            <div className="lgcardsm">

                <div className="card xl:hidden w-screen select-none px-2 pt-10 ">
                    <div className="img px-2">
                        <img className='w-screen' src="/lgcard2.avif" alt="" />
                        <div className="text px-2  bg-[#ffffff]">
                            <h1 className='pl-3 pt-12 text-[25px] font-semibold'>Outlook for iOS and Android</h1>

                            <p className='pl-3 pr-2 pt-2'>Connect. Organise. Get things done.</p>
                            <button className='bg-[#0067b8] mx-3 my-4 px-3 py-[7px] text-white text-lg font-semibold tracking-tight '>Download now</button>

                        </div>
                    </div>
                </div>

            </div>




            <div className="heading2ndcard lg:mx-[45px] px-10 lg:p-0 pt-6 ">
                <h1 className='lg:text-[36px] text-[23px] tracking-tight font-semibold   '>For business</h1>
            </div>


            <div className="2ndcard">
                <div className="cards  mt-1">

                    <div className="flex flex-wrap justify-center cursor-pointer">


                        <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                            <img className="w-full  " src="/img1.webp" alt="" />
                            <div className="p-2">
                                <h1 className='text-3xl font-semibold'>Get Microsoft Teams for free</h1>
                                <p className="text-gray-700 text-base mt-4">Online meetings, chat and shared cloud storage - all in one place.</p>
                                <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> Sign up for free <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                            </div>
                        </div>



                        <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                            <img className="w-full  " src="/img2.avif" alt="" />
                            <div className="p-2">
                                <h1 className='text-3xl font-semibold'>Copilot for Microsoft 365</h1>
                                <p className="text-gray-700 text-base mt-4">Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
                                <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> Learn more <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                            </div>
                        </div>



                        <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                            <img className="w-full  " src="/img3.webp" alt="" />
                            <div className="p-2">
                                <h1 className='text-3xl font-semibold'>Visual Studio 2022 </h1>
                                <p className="text-gray-700 text-base mt-4">Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.</p>
                                <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'> Download Visual Syudio 2022<span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                            </div>
                        </div>


                        <div className="bg-white  m-4 max-w-[22rem]  overflow-hidden">
                            <img className="w-full  " src="/card4.webp" alt="" />
                            <div className="p-2">
                                <h1 className='text-3xl font-semibold'>Microsoft Edge</h1>
                                <p className="text-gray-700 text-base mt-4">Performance, compatibility, security. The browser for business.</p>
                                <button className='mt-4 text-blue-500 hover:underline hover:gap-1 flex justify-center text-lg font-semibold tracking-tight items-center'>Download now <span className='text-2xl pt-1  '><RxCaretRight /></span></button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


            <div className="lowertext flex  p-10 gap-4 lg:gap-7">
                <h4 className='text-xl sm:pl-16 '>Follow Microsoft</h4>
                <ul className='flex gap-4 cursor-pointer '>
                    <li><img className='w-[32px]' src="/simg1.avif" alt="" /></li>
                    <li><img className='w-[32px]' src="/simg2.webp" alt="" /></li>
                    <li><img className='w-[32px]' src="/simg3.avif" alt="" /></li>
                </ul>
            </div>


        </>
    )
}

export default Home

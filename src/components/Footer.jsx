import React from 'react'
import { BiWorld } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='bg-[#f2f2f2] pb-4'>


            <div class="grid grid-cols-1  lg:grid-cols-7 gap-10 sm:grid-cols-3  md:pl-20 lg:pl-24 pl-6  pt-12 pb-6">

                <div class="flex flex-col gap-3">
                    <h1 class="text-md font-semibold text-gray-600">Microsoft Store</h1>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Account profile</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Download Center</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Returns</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Order tracking</h6>
                </div>

                <div class="flex flex-col gap-3 ">
                    <h1 class="text-md font-semibold text-gray-600">Education</h1>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft in education</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Devices for education</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Teams for Education</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft 365 Education</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Office Education</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Educator training and development</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Deals for students and parents</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Azure for students</h6>
                </div>

                <div class="flex flex-col gap-3 ">
                    <h1 class="text-md font-semibold text-gray-600"> Business</h1>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Cloud</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Security</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Azure</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Dynamics 365</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft 365</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Advertising</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Industry</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Teams</h6>
                </div>

                <div class="flex flex-col gap-3 ">
                    <h1 class="text-md font-semibold text-gray-600 hover:underline cursor-pointer">Developer & IT</h1>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Developer Center</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Documentation</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Learn</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Tech Community</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Azure Marketplace</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">AppSource</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft Power Platform</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Visual Studio</h6>
                </div>

                <div class="flex flex-col gap-3 ">
                    <h1 class="text-md font-semibold text-gray-600">Company</h1>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Careers</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">About Microsoft</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Company news</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Privacy at Microsoft</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Investors</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Sustainability</h6>
                </div>

            </div>


            <div className="end flex  sm:flex-row sm:justify-between sm:items-center sm:px-20 flex-col pt-5 pl-6">
                <div className="left flex gap-5">
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer flex justify-center items-center gap-2"><BiWorld className='text-2xl' /> English (Pakistan)</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer flex justify-center items-center gap-2"><img className='h-[15px]' src="/icon.png" alt="" /> Your Privacy Choices</h6>
                </div>
                <div className="right lg:flex gap-5 hidden ">
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Contact</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Microsoft</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Privacy</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Terms of use</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">Trademarks</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">About our ads</h6>
                    <h6 class="text-xs text-gray-600 hover:underline cursor-pointer">© Microsoft 2024</h6>
                </div>

            </div>

            <div className="right ml-6  space-x-3 lg:hidden md:ml-[80px] sm:ml-20">
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer">Contact</span>
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer">Microsoft</span>
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer">Privacy</span>
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer">Terms of use</span>
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer">Trademarks</span>
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer"><br className='sm:hidden' />About our ads</span>
                <span class="text-xs  text-gray-600 hover:underline cursor-pointer">© Microsoft 2024</span>
            </div>



        </div>
    )
}

export default Footer

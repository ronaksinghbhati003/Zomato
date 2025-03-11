import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";

export default function Footer() {
    let [country, setCountry] = useState(false);
    let [lang, setLang] = useState(false);
    return (
        <>
            <footer className='py-[20px] bg-[#F8F8F8]'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='w-[100%] flex md:flex-row flex-col md:justify-between items-center gap-[20px]'>
                        <div className='md:basis-[300px]'>
                            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" width="180" />
                        </div>
                        <div className='md:basis-[300px]  justify-around flex cursor-pointer'>
                            <div className='flex items-center gap-[5px] border rounded-[8px] px-[10px] relative'
                            onClick={() => {
                                setCountry(!country);
                            }}>
                                <img src="https://seeklogo.com/images/I/india-flag-logo-3522C6780F-seeklogo.com.png" width="30"/>
                                <span className='text-[20px]'>India</span>
                                < MdKeyboardArrowDown className={`text-[20px]`} />
                                <div className={` w-[300px] absolute z-2 top-[-85px] left-[-80px] bg-white shadow-lg p-[15px_20px] flex gap-[40px] ${country ? "block" : "hidden"}`}>
                                    <div className='flex items-center gap-[10px]'>
                                        <img src="https://seeklogo.com/images/I/india-flag-logo-3522C6780F-seeklogo.com.png" width="30" />
                                        <span className='text-[20px]'>India</span>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_the_President_of_the_United_Arab_Emirates.svg" width="30" />
                                        <span className='text-[20px]'>UAE</span>
                                    </div>
                                    <div className='w-[40px] z-[-1]  h-[40px] bg-white bottom-[-15px] left-[40%] rotate-[130deg] absolute'></div>
                                </div>
                            </div>
                            <div className='flex items-center gap-[5px] border px-[10px] rounded-[8px] cursor-pointer relative'  onClick={() => {
                                    setLang(!lang);
                                }}>
                                <RiGlobalLine className='text-[20px]' />
                                <span className='text-[20px]'>English</span>
                                <MdKeyboardArrowDown className='text-[20px]'/>
                                <div className={`z-2 w-[150px] absolute left-[50%] translate-x-[-50%] bottom-[168%] p-[10px_20px] bg-white shadow-lg ${lang ? "block" : "hidden"}`}>
                                    <ul>
                                        <li className='mb-[10px]   hover:bg-gray-200'>English</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Türkçe</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>हिंदी</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Português (BR)</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Indonesian</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Português (PT)</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Español</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Čeština</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Slovenčina</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Polish</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Italian</li>
                                        <li className='mb-[10px]   hover:bg-gray-200'>Vietnamese</li>
                                    </ul>
                                    <div className='absolute z-[-1] w-[40px] h-[40px] left-[50%] translate-x-[-50%] bg-white bottom-[-15px] rotate-[130deg]'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='py-[40px] w-[100%]  grid md:grid-cols-5 grid-cols-2 justify-items-center border-b-[2px] border-gray-400'>
                         <ul>
                            <h1 className='capitalize text-[18px] font-semibold tracking-wider mb-[10px]'>About zomato</h1>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Who we are</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Blog</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Work With Us</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Investor Relations</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Report Fraud</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Press Kit</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Contact Us</li>

                         </ul>
                         <ul>
                            <h1 className='capitalize text-[18px] font-semibold tracking-wider mb-[10px]'>Zomaverse</h1>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Zomato</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Blinkit</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>District</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Feeding India</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Hyperpure</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Zomato Live</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Zomaland</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Weather Union</li>

                         </ul>
                         <ul>
                            <h1 className='capitalize text-[18px] font-semibold tracking-wider mb-[10px]'>For Restaurants</h1>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Partner with us</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Apps for you</li>
                          </ul>
                          <ul>
                            <h1 className='capitalize text-[18px] font-semibold tracking-wider mb-[10px]'>Learn More</h1>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Privacy</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Security</li>
                            <li className='text-gray-400 hover:text-black cursor-pointer'>Terms</li>
                          </ul>

                          <ul>
                            <h1 className='capitalize text-[18px] font-semibold tracking-wider mb-[10px]'>Social links</h1>
                            <li className='flex gap-[10px]'> 
                                 <FaLinkedin className=' text-[25px] rounded-[100%]'/>
                                 <FaInstagramSquare className=' text-[25px] rounded-[100%]' />
                                 <FaSquareXTwitter className=' text-[25px] rounded-[100%]' />
                                 <FaYoutube className=' text-[25px] rounded-[100%]' />
                                 <FaFacebookSquare className=' text-[25px] rounded-[100%]' />
                            </li>
                            <li className='my-[20px]'>
                            <a href='https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&pli=1' target="_blank"><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" width="150"/></a>
                            </li>
                            <li className='my-[20px]'>
                            <a href='https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896' target='_blank'><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" width="150"/></a>
                            </li>
                          </ul>
                    </div>
                    <div className='w-[100%] py-[10px] text-gray-400 text-[14px]'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</div>
                </div>
            </footer>
        </>
    )
}


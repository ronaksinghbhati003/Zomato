import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { PiListDashesBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    let[header,setHeader]=useState(false);
    let[modal,setModal]=useState(false);
    let[login,setLogin]=useState(false);
     let showheader=()=>{
        if(header==false)
        {
            setHeader(true);
        }
        else{
            setHeader(false);
        }
         
     }
     let showModal=()=>{
        if(modal==false)
        {
            setModal(true);
        }
        else{
            setModal(false);
        }
         
     }
     let showLogin=()=>{
        if(login==false)
        {
            setLogin(true);
        }
        else{
            setLogin(false);
        }
         
     }

    return (
        <>
            <header className=" py-[10px] max-w-[1100px] mx-auto  flex flex-row justify-between md:px-0 px-3">
                  <button className='text-[18px] text-white md:hidden block' onClick={showheader}><PiListDashesBold /></button>
                     <div className='text-[18px] text-white font-bold tracking-[2px]'>
                         Get the App
                     </div>
                     <div className={` md:block md:static z-10 fixed md:bg-transparent bg-white top-0 md:h-auto h-[100vh] md:w-auto w-[300px] ${header?"left-[0]":"left-[-500px]"}`}>
                     <ul className='flex md:text-white text-black md:gap-[60px] gap-[20px] px-3 text-[18px] md:flex-row flex-col '>
                        <div className='flex justify-between md:hidden block'>
                            <button onClick={showheader}><RxCross2  className='text-black text-[20px]'/></button>
                            <h3 className='text-[40px] px-[10px] font-semibold'>zomato</h3>
                        </div>
                        <li>Investor Relations</li>
                        <li>Add Restuarnt</li>
                        <li><a href="#" onClick={showLogin}>Log in</a></li>
                        <li><a href="#" onClick={showModal}>Sign up</a></li>
                     </ul>
                     </div>
             </header>

             <div className={`fixed z-10 top-0 left-0 w-[100vw] h-[100vh] bg-[#0000009c] ${modal?"block":"hidden"}`}>
             <div className='md:w-[450px] w-[90%] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  p-[20px] h-auto '>
                   <div className='flex justify-between p-[10px_10px_50px_10px]'>
                      <h1 className='text-[30px] font-semibold'>Sign Up</h1>
                      <button className='cursor-pointer' onClick={showModal}><RxCross2 className='text-[25px] text-black font-semibold'/></button>
                   </div>
                   <form className='mb-[20px]'>
                     <input type="text" placeholder='Full Name' className='ps-2  border-1 w-[100%] py-[10px] rounded-[5px]'/>
                     <input type="email" placeholder='Enter Email' className='ps-2  border-1 w-[100%] py-[10px] my-5 rounded-[5'/>
                     <div className='flex  items-center gap-3 mb-5'>
                         <input type="checkbox" className=' w-[25px] h-[25px] border-1 rounded-[5px] ml-[3px] cursor-pointer'/>
                         <p className='text-[13.9px]'>
                         I agree to Zomato's <span className='text-red-600'>Terms of Service, Privacy Policy</span> and <span className='text-red-600'>Content Policies</span></p>
                     </div>
                      <button className='w-[100%] bg-gray-300 py-2 rounded-[5px] hover:bg-gray-400 cursor-pointer'>Create Account</button>
                   </form>
                   <div className='flex items-center'>
                      <div className='h-[1px] bg-gray-300 w-[45%]'></div>
                      <p className='mx-[10px]'>or</p>
                      <div className='h-[1px] bg-gray-300 w-[45%]' ></div>
                   </div>
                   <button className='w-[100%] my-4 border-[0.5px] border-gray-300 py-[7px]'><span className='relative'><FcGoogle className='absolute text-[25px] left-[-30px]'/>Sign in with google</span></button>
                   <div className='w-[100%] border-[0.1px] border-gray-300 mt-5'></div>
                   <p className='text-[20px] text-gray-400 mt-[10px]'>Already have an account? <span className='text-red-500 cursor-pointer'>Log in</span></p>
             </div>
             </div>

             <div className={`fixed z-10 top-0 left-0 w-[100vw] h-[100vh] bg-[#0000009c] ${login?"block":"hidden"} `}>
             <div className='md:w-[450px] w-[90%] mx-[] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[20px] '>
                   <div className='flex justify-between p-[10px_10px_50px_10px]'>
                      <h1 className='text-[30px] font-semibold'>Log in</h1>
                      <button className='cursor-pointer' onClick={showLogin}><RxCross2 className='text-[25px] text-black font-semibold'/></button>
                   </div>
                   <form className='mb-[20px]'>
                     <input type="tel" placeholder='Enter Mobile Number' className='ps-2  border-1 w-[100%] py-[10px] rounded-[5px]'/>
                      <button className='w-[100%]  bg-pink-600 py-2 rounded-[5px] hover:bg-gray-400 cursor-pointer mt-[20px]'>One Time Password</button>
                   </form>
                   <div className='flex items-center'>
                      <div className='h-[1px] bg-gray-300 w-[45%]'></div>
                      <p className='mx-[10px]'>or</p>
                      <div className='h-[1px] bg-gray-300 w-[45%]' ></div>
                   </div>
                   <button className='w-[100%] my-4 border-[0.5px] border-gray-300 py-[7px]'><span className='relative'><MdEmail className='absolute text-[25px] left-[-30px]'/>Continue with Email</span></button>
                   <button className='w-[100%]  border-[0.5px] border-gray-300 py-[7px]'><span className='relative'><FcGoogle className='absolute text-[25px] left-[-30px] text-[pink]'/>Sign in with google</span></button>
                   <div className='w-[100%] border-[0.1px] border-gray-300 mt-5'></div>
                   <p className='text-[20px] text-gray-400 mt-[10px] capitalize'>New to zomato?<span className='text-red-500 cursor-pointer ml-1'>Create Account</span></p>
             </div>
             </div>
        </>
    )
}

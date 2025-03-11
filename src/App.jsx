import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Accordian from './common/Accordian.jsx';
import Footer from './common/Footer.jsx';
import Header from "./common/Header.jsx";


export default function App() {
   let [gps, setGps] = useState(false);
   let[radio,setRadio]=useState(true);
   let checkMail=()=>{
      if(!radio==true){
         setRadio(true)
      }
   }
   let checkPhone=()=>{
      if(!radio==false){
         setRadio(false);
      }
   }
   
   return (
      <>
         <section className='w-[100%] md:h-[55vh]  h-[100vh] bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")] bg-cover bg-center bg-no-repeat'>
            <Header />
            <div className='max-w-[1100px] md:py-[20px] py-[60px] mx-auto'>
               <h1 className='capitalize text-[80px] text-white font-bold tracking-tight text-center'>zomato</h1>
               <p className='text-white text-[35px] text-center tracking-wider'>Discover the best food & drinks in Pathankot</p>
            </div>
            <div className='max-w-[1100px] md:mx-auto mx-[20px] flex items-center md:flex-row flex-col-reverse md:gap-[10px] gap-[10px]'>
               <div className='flex items-center gap-[10px] bg-white md:basis-[30%]  w-[100%] p-[10px] md:rounded-l-[10px] rounded-[10px] relative'>
                  <FaLocationDot className='text-[25px] text-pink-500' />
                  <p>Jodhpur</p>
                  <BiSolidDownArrow className={`text-[18px] right-[10px] absolute text-black cursor-pointer ${gps ? "rotate-[180deg]" : "rotate-[0deg]"} duration-[0.5s]`} onClick={() => {
                     setGps(gps ? false : true);
                  }} />
                  <div className={`bg-white absolute top-[110%] md:w-[120%] w-[100%] p-[20px] rounded-[10px] ${gps ? "block" : "hidden"}`}>
                     < FaLocationCrosshairs className='inline mr-[10px] text-red-400' />
                     <p className='inline text-red-400 text-[18px]'>Detect current location</p>
                     <p className='ml-[10px]'>using GPS</p>
                  </div>
               </div>
               <form className='md:w-[800px] md:basis-[70%] w-[100%]  bg-white flex items-center gap-[10px] md:rounded-r-[10px] rounded-[10px]'>
                  <CiSearch className='text-[30px] pl-[10px] ' />
                  <input type='text' placeholder='Search for Restuarnt' className='py-[10.5px] w-[100%]' />
               </form>
            </div>
         </section>
         <section className='py-[60px]'>
            <div className='max-w-[1100px] grid md:grid-cols-2 grid-cols-1 gap-[30px] mx-auto mb-[40px]'>
               <div className='mx-[10px]'>
                  <div className='relative z-0 shadow-lg hover:scale-[1.05] duration-[0.8s]'>
                     <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className=' rounded-[10px] w-[100%] h-[300px]' />
                     <div className='p-[20px] absolute z-0 bottom-0 bg-white w-[100%] rounded-b-[10px]'>
                        <h1 className='text-[20px] font-semibold'>Order Online</h1>
                        <p>Stay Home and order to your doorstep</p>
                     </div>
                  </div>
               </div>
               <div className='mx-[10px]'>
                  <div className='relative z-0 shadow-lg hover:scale-[1.05] duration-[0.8s]'>
                     <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className=' rounded-[10px] w-[100%] h-[300px]' />
                     <div className='p-[20px] absolute bottom-0 bg-white w-[100%] rounded-b-[10px]'>
                        <h1 className='text-[20px] z-0 font-semibold'>Dining</h1>
                        <p>View the city's favourite dining venues</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className='max-w-[1100px] md:mx-auto mx-[10px] '>
               <h1 className='text-[40px] font-serif'>Popular localities in and around Pathankot</h1>
               <div className='w-[300px] shadow-[0px_0px_4px_-0.5px_gray] p-[15px_20px] mt-[30px] flex flex-col gap-[10px] relative rounded-lg'>
                  <h1>Pathankot Locality</h1>
                  <p>383 places</p>
                  <MdKeyboardArrowRight className='absolute top-[50%] translate-y-[-50%] right-[5%] text-[25px]' />
               </div>
            </div>
         </section>
         <section className='py-[50px] bg-[#FFFBF7]'>
            <div className='max-w-[1100px] mx-auto grid md:grid-cols-2 grid-cols-1 items-top'>
               <div className='md:block hidden'>
                  <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" className='w-[100%] hover:scale-[1.01] duration-[0.5s] hover:brightness-75 hover:drop-shadow-lg' />
               </div>
               <div className='p-[20px] md:mx-[0] mx-[10px]'>
                      <h1 className='text-[40px] font-semibold tracking-wider'>Get the zomato app</h1>
                      <p className='my-[20px] text-[18px]'>we will send you a link, open it on your phone to download the app</p>
                      <form className='pt-[20px]'>
                        <div className='flex gap-[100px]'>
                        <div className='flex items-center'>
                        <input type="radio" value="email" name='contact' className='w-[18px]  h-[18px]'
                        onClick={checkMail}
                        /> <span className='text-[18px] ml-[10px]'>Email</span>
                        </div>
                        <div className='flex items-center'>
                        <input type="radio" value="phone" name='contact' className='w-[18px] h-[18px] '
                          onClick={checkPhone}
                        /> <span className='text-[18px] ml-[10px]'>Phone</span>
                        </div>
                        </div>
                        <div className='w-[100%] flex gap-[10px] my-[30px] '>
                              {radio?<Email/>:<Phone/>}
                             <button className='basis-[40%] bg-pink-500 rounded-[5px]'>Share App Link</button>
                        </div>
                      </form>
                      <p className='text-gray-400'>Download App From</p>
                      <div className='flex gap-[30px] mt-[30px]'>
                         <div>
                           <a href='https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&pli=1' target="_blank"><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" width="150"/></a>
                         </div>
                         <div>
                           <a href='https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896' target='_blank'><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" width="150"/></a>
                         </div>
                      </div>
               </div>
            </div>
         </section>
         <Accordian/>
         <Footer/>
      </>
   )
}


function Email(){
   return(
        <>
          <input type="email" placeholder='Email' className='basis-[60%] py-[8px] pl-[5px] bg-white border-1 rounded-[5px]'/>
        </>
   )
}
function Phone(){
   return(
        <>
          <input type="tel" placeholder='Enter Mobile Number' pattern="[0-9]{10}" className='basis-[60%] py-[8px] pl-[5px] bg-white border-1 rounded-[5px]'/>
        </>
   )
}

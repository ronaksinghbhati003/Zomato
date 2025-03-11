import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Accordian() {
   let [show, setShow] = useState(false);
   let[show1,setShow1]=useState(false);
   let[show2,setShow2]=useState(false);
   let[show3,setShow3]=useState(false);
   return (
      <section className='py-[30px]'>
         <div className='max-w-[1100px] md:mx-auto mx-[10px]'>

            <h1 className='text-[30px]'>Explore options near me</h1>
            <div className='w-[100%]  my-[30px] shadow-[0px_0px_1.5px_0.5px_gray] p-[10px_20px] cursor-pointer rounded-[8px]'>
               <h1 className='text-[23px] relative ' onClick={() => {
                  setShow(!show)
               }}>Popular cuisines near me  < MdKeyboardArrowDown className={`absolute  top-[50%] translate-y-[-50%] right-[10px] text-[23px] ${show ? "rotate-[180deg]" : "rotate-[0deg]"} duration-[0.5s]`} /></h1>

               <div className={`py-[20px] ${show ? "block" : "hidden"}`}>
                  <ul className='text-[17.5px] text-gray-400 flex gap-[8px] flex-wrap'>
                     <li className='hover:text-black'>Bakery near me |</li>
                     <li className='hover:text-black'>Beverages near me |</li>
                     <li className='hover:text-black'>Biryani near me |</li>
                     <li className='hover:text-black'>Burger near me |</li>
                     <li className='hover:text-black'>Chinese near me |</li>
                     <li className='hover:text-black'>Desserts near me |</li>
                     <li className='hover:text-black'>Italian near me |</li>
                     <li className='hover:text-black'>Momos near me |</li>
                     <li className='hover:text-black'>Mughlai near me |</li>
                     <li className='hover:text-black'>North Indian near me |</li>
                     <li className='hover:text-black'>Pasta near me |</li>
                     <li className='hover:text-black'>Pizza near me |</li>
                     <li className='hover:text-black'>Rolls near me |</li>
                     <li className='hover:text-black'>Salad near me |</li>
                     <li className='hover:text-black'>Sandwich near me |</li>
                     <li className='hover:text-black'>Seafood near me |</li>
                     <li className='hover:text-black'>Shake near me |</li>
                     <li className='hover:text-black'>South Indian near me |</li>
                     <li className='hover:text-black'>Street near me |</li>
                     <li className='hover:text-black'>Wraps near me |</li>
                  </ul>
               </div>
            </div>
            
            
            <div className='w-[100%]  my-[30px] shadow-[0px_0px_1.5px_0.5px_gray] p-[10px_20px] cursor-pointer rounded-[8px]'>
               <h1 className='text-[23px] relative ' onClick={() => {
                  setShow1(!show1)
               }}>Popular restaurant types near me  < MdKeyboardArrowDown className={`absolute  top-[50%] translate-y-[-50%] right-[10px] text-[23px] ${show1 ? "rotate-[180deg]" : "rotate-[0deg]"} duration-[0.5s]`} /></h1>

               <div className={`py-[20px] ${show1 ? "block" : "hidden"}`}>
                  <ul className='text-[17.5px] text-gray-400 flex gap-[8px] flex-wrap'>
                     <li className='hover:text-black'>Bakery near me |</li>
                     <li className='hover:text-black'>Bars near me |</li>
                     <li className='hover:text-black'>Beverage Shops near me |</li>
                     <li className='hover:text-black'>Cafés near me |</li>
                     <li className='hover:text-black'>Casual Dining near me |</li>
                     <li className='hover:text-black'>Dessert Parlors near me |</li>
                     <li className='hover:text-black'>Dhabas near me |</li>
                     <li className='hover:text-black'>Fine Dining near me |</li>
                     <li className='hover:text-black'>Food Courts near me |</li>
                     <li className='hover:text-black'>Food Trucks near me |</li>
                     <li className='hover:text-black'>Kiosks near me |</li>
                     <li className='hover:text-black'>Microbreweries near me |</li>
                     <li className='hover:text-black'>Paan Shop near me |</li>
                     <li className='hover:text-black'>Quick Bites near me |</li>
                     <li className='hover:text-black'>Sweet Shops near me |</li>
                     
                  </ul>
               </div>
            </div>

            <div className='w-[100%]  my-[30px] shadow-[0px_0px_1.5px_0.5px_gray] p-[10px_20px] cursor-pointer rounded-[8px]'>
               <h1 className='text-[23px] relative ' onClick={() => {
                  setShow2(!show2)
               }}>Top restaurant chains  < MdKeyboardArrowDown className={`absolute  top-[50%] translate-y-[-50%] right-[10px] text-[23px] ${show2 ? "rotate-[180deg]" : "rotate-[0deg]"} duration-[0.5s]`} /></h1>

               <div className={`py-[20px] ${show2 ? "block" : "hidden"}`}>
                  <ul className='text-[17.5px] text-gray-400 flex gap-[8px] flex-wrap'>
                  <li className='hover:text-black'>KFC</li>
                     
                  </ul>
               </div>
            </div>

            <div className='w-[100%]  my-[30px] shadow-[0px_0px_1.5px_0.5px_gray] p-[10px_20px] cursor-pointer rounded-[8px]'>
               <h1 className='text-[23px] relative ' onClick={() => {
                  setShow3(!show3)
               }}>Cities we deliver to  < MdKeyboardArrowDown className={`absolute  top-[50%] translate-y-[-50%] right-[10px] text-[23px] ${show3 ? "rotate-[180deg]" : "rotate-[0deg]"} duration-[0.5s]`} /></h1>

               <div className={`py-[20px] ${show3 ? "block" : "hidden"} grid md:grid-cols-5 grid-cols-2`}>
                  <ul>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Delhi NCR</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Hyderabad</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Ahmedabad</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Nashik</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Amritsar</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Ranchi</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Vadodara</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Puducherry</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Srinagar</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Haridwar</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Kozhikode</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Jodhpur</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Jalandhar</li>
                  </ul>

                  <ul>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Kolkata</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Chennai</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Chandigarh</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Ooty</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Kanpur</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Visakhapatnam</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Nagpur</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Surat</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Khajuraho</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Leh</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Alappuzha</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Kota</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Jammu</li>
                  </ul>

                  <ul>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Mumbai</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Lucknow</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Goa</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Shimla</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Allahabad</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Visakhapatnam</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Agra</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Varanasi</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Neemrana</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Pushkar</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Thrissur</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Ajmer</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Manali</li>
                  </ul>

                  <ul>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Bengaluru</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Kochi</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Indore</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Ludhiana</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Aurangabad</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Coimbatore</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Dehradun</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Patna</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Cuttack</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Rajkot</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Manipal</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Mussoorie</li>
                     <li className='my-[10px] text-black text-[17.5px]'><span className='border-b-1 py-[5px]'>All delivery cities</span></li>
                  </ul>

                  <ul>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Pune</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Jaipur</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Gangtok</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Guwahati</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Bhopal</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Mangalore</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Mysore</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Udaipur</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Trivandrum</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Madurai</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Vijayawada</li>
                     <li className='my-[10px] text-gray-400 hover:text-black text-[17.5px]'>Rishikesh</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

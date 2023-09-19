'use client';
import link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope,  } from 'react-icons/fa';
import {MdOutlineLock} from 'react-icons/md';


export default function Home()

 {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
       <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex bg-yellow-500">
         <head>
           <title> Login page </title>
        </head>

          <div className="flex  w-2/3 max-w-4xl shadow-2xl item-center bg-white rounded-tl-2xl rounded-bl-2xl  rounded-tr-2xl rounded-br-2xl mx-3">
                {/*  Login section */}

          <div className="w-3/5 text-black text-bold p-5">
            <span className="text-yellow-500 font-bold">Company</span>Name
          <div className="p-5">
            <h2 className="text-yellow-500 text-2xl font-bold text-center"> Sign In</h2>
          </div>
 <div className='flex justify-center my-2' >
              <a href='#' className='border-2 shadow-100 border-gray-500 rounded-full p-2 mx-1'>
               <FaFacebookF className="text-sm"/></a>
                <a href='#' className='border-2 shadow-100 border-gray-500 rounded-full p-2 mx-1'>
                <FaLinkedinIn className="text-sm" /></a>
                  <a href='#' className='border-2 shadow-100 border-gray-500 rounded-full p-2 mx-1'>
                <FaGoogle className="text-sm" />
             </a>
           </div>
             <p className='text-gray-500 text-sm text-center mb-2'> or use your email account</p>
             <div className='flex flex-col item-center mb-2'> 
         
              <div className='flex item-center bg-gray-200  mx-10 w-64 p-2'>
                <FaRegEnvelope className="text-gray-400 m-1"/>
                <input type="email" name='Email' placeholder='email' className="bg-gray-200  outline-none flex text-xs " /></div>  </div>

            <div className='flex flex-col item-center mb-2 mx-10'>
              <div className=' flex bg-gray-200 item-center w-64 p-2'>
                <MdOutlineLock className="text-gray-400 m-1 " />
                <input type="Password" name='password' placeholder='Password' className="bg-gray-200  outline-none flex-1 text-xs " /></div>  </div>
            
<div className='flex item-center text-sm mb-2 mx-10 '> 
  <input type="checkbox" name="Remember" className="flex mx-25 m-1" /> 
  <label className='text-gray-500 font-xs flex mx-1 '>Remember Me</label>
  <a href='#'  className=' flex text-gray-500  font-sm w-10 justify-between mx-5'>Forget password?</a>
   
</div>
           <div className='item-center justify-center '> 
            <a href="/profile" className="border-2 bordre-white mx-20 rounded-full px-6 py-2 inline-block font-semibold hover:bg-yellow-200 hover:text-yellow-500"> sign In </a>
                   </div>
          </div>
          </div>
          { /* regigster section */}
          <div className="w-2/5 bg-yellow-500 rounded-tr-2xl rounded-br-2xl py-36 px-10">
            <h2 className="text-2xl mb-2 font-bold text-white">Hello,Friends!</h2>
            <div className=" border-2 w-14 mb-2  inline-block mx-12"> </div>
            <p className="mb-10 text-white "> Fill up Personal Information and start journey with us. </p>
            <a href="/Registration" className="border-2 bordre-white rounded-full px-10 py-2 inline-block font-semibold hover:bg-white hover:text-yellow-500"> Register </a>
            </div>
      </div>
    </main>
  ) 
   }

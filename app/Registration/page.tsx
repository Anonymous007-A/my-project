"use client";
import link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaUserCircle, } from 'react-icons/fa';
import { MdOutlineLock } from 'react-icons/md';

export default function Registration() {
    return(
     
        <div className="z-10 max-w-100xl w-full items-center m-1 justify-center font-mono text-sm lg:flex bg-yellow-500">
            <head>
                <title> Login page </title>
            </head>

            <div className=" flex  w-2/5 max-w-4xl shadow-2xl item-center bg-white rounded-tl-2xl rounded-bl-2xl  rounded-tr-2xl rounded-br-2xl mx-3 ">

                {/*  Login section */}
                <div className="w-3/5 text-black text-bold p-5"><span className="text-yellow-500 font-bold">Company</span>Name
                    <div className="p-5"><h2 className="text-yellow-500 text-2xl font-bold "> Register Yourself !</h2>
                    </div>

                    <div className='flex flex-col item-center mb-2'>




                        <div className='flex item-center bg-gray-200  mx-10 w-64 p-2'>
                            <FaUserCircle className="text-gray-400 m-1" />
                            <input type="username" name='username' placeholder='username' className="bg-gray-200  outline-none flex text-xs " /></div>  </div>



                    <div className='flex flex-col item-center mb-2'>




                        <div className='flex item-center bg-gray-200  mx-10 w-64 p-2'>
                            <FaRegEnvelope className="text-gray-400 m-1" />
                            <input type="email" name='Email' placeholder='email' className="bg-gray-200  outline-none flex text-xs " /></div>  </div>

                    <div className='flex flex-col item-center mb-2 mx-10'>
                        <div className=' flex bg-gray-200 item-center w-64 p-2'>
                            <MdOutlineLock className="text-gray-400 m-1 " />
                            <input type="Password" name='password' placeholder='Password' className="bg-gray-200  outline-none flex-1 text-xs " /></div>  </div>

                    <div className='flex flex-col item-center mb-2 mx-10'>
                        <div className=' flex bg-gray-200 item-center w-64 p-2'>
                            <MdOutlineLock className="text-gray-400 m-1 " />
                            <input type="Password" name='password' placeholder='confirm Password' className="bg-gray-200  outline-none flex-1 text-xs " /></div>  </div>


                    <div className='flex item-center text-sm mb-2 mx-10 '> 
                    </div>
                    </div>
                    </div>
                    </div>

     )}

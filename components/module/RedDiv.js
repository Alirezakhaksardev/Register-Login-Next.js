import { signIn } from 'next-auth/react';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaChevronLeft }  from "react-icons/fa"
import { FaChevronDown }  from "react-icons/fa"

function RedDiv() {

    const githubHandler = () =>{
        signIn("github")
    }
  return (
    <>
        <div className="w-full h-1/3 md:w-2/5 md:h-auto bg-red-500 md:rounded-tr-lg md:rounded-br-lg relative ">
            <span 
                className="w-10 h-10 rounded-3xl bg-white shadow-md  absolute
                    md:top-1/2 md:-left-5 md:-translate-y-2/4 md:-translate-x-0 -bottom-5 left-1/2 -translate-x-2/4
                    flex justify-center items-center">
                    <FaChevronLeft className='hidden md:block' />
                    <FaChevronDown className='md:hidden' />
            </span>

            <div className="flex flex-col justify-center items-center text-white h-full px-5 ">
                <h3 className="text-lg text-center font-bold mb-5">سیستم احراز هویت و مدیرت کاربران</h3>
                <p className="text-md text-center mb-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <button className="w-1/2 py-2 px-1  transition ease-in delay-75 focus:outline-none rounded-sm text-md border-2 border-gray-100 bg-gray-100 hover:text-gray-100 hover:bg-red-500 text-red-500">اطلاعات بیشتر</button>
                <div className='w-1/2 flex flex-row justify-around m-5 text-red-400'>
                    <button className='bg-gray-50 p-1 rounded-md border border-gray-50 hover:bg-red-500 hover:text-gray-50 hover:shadow-md transition ease-in-out delay-75'><FaGoogle className='w-5 h-5' /></button>
                    <button onClick={githubHandler} className='bg-gray-50 p-1 rounded-md border border-gray-50 hover:bg-red-500 hover:text-gray-50 hover:shadow-md transition ease-in-out delay-75'><FaGithub className='w-5 h-5' /></button>
                    <button className='bg-gray-50 p-1 rounded-md border border-gray-50 hover:bg-red-500 hover:text-gray-50 hover:shadow-md transition ease-in-out delay-75' ><FaFacebookF className='w-5 h-5' /></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default RedDiv
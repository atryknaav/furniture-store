"use client";

import React from 'react'
import { FaArrowUp, FaGithub, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa6'
import { GoArrowUp } from 'react-icons/go'
import { MdLanguage } from 'react-icons/md'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className=' flex flex-col bg-[#1c1c1c] text-white'>

        <div className='h-fit p-12 flex gap-[2rem] tb:gap-[12rem] justify-between'>

            <div className=' hover:cursor-pointer flex flex-col gap-4'>
                <div className=' text-sm tb:text-xl font-semibold mb-2'>
                    Information
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                    About Us
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                    Contact
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                    Our Material
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                    Inspiration
                </div>
            </div>





            <div className=' hover:cursor-pointer flex flex-col gap-4'>
                <div className=' text-sm tb:text-xl font-semibold mb-2'>
                    Conditions
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                    Terms of Purchase
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                    Shipping Information
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                Return information
                </div>
                <div className=' text-sm tb:text-xl font-normal'>
                Privacy policy
                </div>
            </div>





            <div className=' hover:cursor-pointer sm:flex flex-col gap-4 hidden'>
                <div className=' text-sm tb:text-xl font-semibold mb-2'>
                    Address
                </div>
                <div className='  text-sm tb:text-xl font-normal'>
                    Marrej
                </div>
                
            </div>




            <div className=' flex flex-col gap-4'>
                <div className=' text-sm tb:text-xl font-semibold mb-2'>
                    Follow Us
                </div>
                <div className='  text-2xl flex-col sm:flex-row tb:text-3xl font-normal flex gap-3'>
                    <a href="https://github.com/atryknaav">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/arsenii-bilyi-46820a284/">
                        <FaLinkedin />
                    </a>
                </div>
            </div>


            <div className=' border-[2px] rounded-full border-white p-6 h-fit  text-xl tb:text-6xl hover:scale-110 transition-all duration-200 hover:cursor-pointer flex content-end' onClick={
                () => {
                    window.scroll(0, 0)
                }
            }>
            <GoArrowUp />
            </div>

        </div>

        <div className=' h-fit border-t-[1px] border-white flex justify-between px-12 py-6'>
            
            <div className='  text-sm tb:text-3xl'>
                
            </div>

            <div className='  text-2xl tb:text-4xl flex items-center'>
                MARREJ
            </div>

        </div>




        <div className=' bg-white text-red-700 flex justify-end pr-10 sm:text-sm text-xs font-semibold'>
        {year} @ THIS SITE IS CREATED USING THE CONTENT OF THE OFFICIAL DANGARDEN WEBSITE AND DESIGN <a href="https://dangarden.se/" className=' ml-12 text-green-600'>WEBSITE</a> <a href="https://www.behance.net/gallery/198258093/Shopify-Website-UXUI-Design-Development-Dangarden" className=' ml-12 text-green-600'>DESIGN</a>
        </div>

    </div>
  )
}

export default Footer
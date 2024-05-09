import { footerInfo } from '@/data/data'
import React from 'react'
import footerLogoImg from '../../../public/images/logo.png'
import Image from 'next/image'
import { SiMedium } from "react-icons/si";
import { IoLogoTwitter } from 'react-icons/io';
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='my-8'>
<div className="flex gap-0 md:gap-8 justify-between">
{
            footerInfo.map(item=>(
                <div key={item.id} className='flex flex-col gap-3'>
            <h1 className='font-semibold md:font-bold text-lg md:text-2xl dark:text-white mb-2'>{item.heading}</h1>
            <p className='text-[#737373] text-lg hidden lg:block'>{item.p1}</p>
            <p className='text-[#737373] text-lg hidden lg:block'>{item.p2}</p>
            <p className='text-[#737373] text-lg hidden lg:block'>{item.p3}</p>
        </div>
            ))
        }
</div>
<div className='flex flex-col justify-center items-center gap-4 mt-16'>
    <Image src={footerLogoImg} alt="logo" width={100} height={100}/>
    <div className='flex gap-4'>
    <SiMedium  className="text-xl"/>
    <IoLogoTwitter className="text-xl"/>
    <FaLinkedin className="text-xl" />
    <FaDiscord className="text-xl" />
    </div>
    <p className='text-sm'>© 2023 Fytobyte. All Rights Reserved.</p>
</div>
    </div>
  )
}

export default Footer
import Image from 'next/image'
import React from 'react'
import banner from '../../../public/images/banner.png'
import banner_img from '../../../public/images/banner-image.png'
import Button from '@/shared/Button'
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <Image src={banner} alt="Banner" width={500} height={100} className="w-full h-full " />

        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="mb-4 text-black">
            <h1 className="text-4xl font-extrabold dark:text-white">Transform your workflow with <br />
cutting-edge solutions from <br />
FYTOBYTE LIMITED.</h1>
            <p className="text-xl font-medium dark:text-white my-3">Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Aliquid sapiente suscipit amet
optio quia fuga rerum ex cupiditate maiores,
perferendis blanditiis, quam a.</p>
          </div>
          <div>
            <Button >Get Started</Button>
            <Image src={banner_img} alt="Banner" width={500} height={100} className="w-full mb-[px] h-full lg:max-h-screen " />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Banner
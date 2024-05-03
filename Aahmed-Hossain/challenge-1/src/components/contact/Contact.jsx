import Image from 'next/image'
import React from 'react'
import contactImg from '../../../public/images/contact.png'
const Contact = () => {
  return (
    <div>
        <h1 className='text-7xl font-normal text-center'>Contact Us</h1>
        <p className='text-sm text-[#A3A3A3] my-12 text-center'>Drop us a line to start your project or simply just say &quot;Hello!&quot;</p>
        
        <div className='flex flex-col gap-8 justify-between'>
            {/*  location info*/}
            <div className='w-full lg:w-5/12  flex  flex-col justify-between' >
<h3 className='text-lg '>We’re Ready!</h3>
<h1 className='text-2xl font-semibold    mb-6'>Let’s Connect</h1>
<h4 className='text-lg  my-2'>Head-quarters:</h4>
<p className='text-[#737373] text-sm'>Indonesia, Jakarta</p>
<p className='text-[#737373] text-sm my-1'>Phone: (+62) 82260362579</p>
<p className='text-[#737373] text-sm'>Email: mfahlevi740@gmail.com</p>
 

            </div>

{/* text input field*/}
        <div className="flex flex-col gap-3 w-full lg:w-5/12">
       <div className='flex gap-3'>
       <input
      type="text"
      className="appearance-none block w-full px-3 py-2 rounded-md focus:outline-none focus:border-gray-300 border border-gray-200 bg-gray-100 text-gray-700 leading-tight"
    />
       <input
      type="text"
      className="appearance-none block w-full px-3 py-2 rounded-md focus:outline-none focus:border-gray-300 border border-gray-200 bg-gray-100 text-gray-700 leading-tight"
    />
       
     
       </div>
       <textarea
       cols={1}
       rows={6}
      type="text"
      className="appearance-none block w-full px-3 py-2 rounded-md focus:outline-none focus:border-gray-300 border border-gray-200 bg-gray-100 text-gray-700 leading-tight"
    />
     <button className='py-2 w-full bg-black text-white'>Send The Message</button>
        </div>
        </div>
        {/*  cards */}
        <div className='flex flex-col lg:flex-row gap-8 mt-8'>
            {/* text-card */}
            <div className="w-full lg:w-1/2 bg-black h-60 flex justify-center items-center rounded-xl"> <h2 className='font-bold text-xl text-center text-white '>Your business <br /> Location</h2></div>
            {/* img card */}
            <div  className="w-full lg:w-1/2  h-60 rounded-xl">
<Image className='bg-cover w-full h-60 rounded-xl' src={contactImg} alt='contact image' height={500} width={500}/>
            </div>

        </div>
    </div>
  )
}

export default Contact
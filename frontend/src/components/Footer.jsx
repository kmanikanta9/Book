import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         {/* Left Section */}
         <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque autem praesentium quo enim dolorum blanditiis incidunt ullam nisi excepturi quas delectus aliquam odit, necessitatibus temporibus consectetur ducimus dicta laudantium totam!</p>
         </div>

         {/* center Section */}
         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
         </div>
         {/* Right Section */}
         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>9857495216</li>
              <li>test@gmail.com</li>
            </ul>
         </div>
         
      </div>
      {/* Copy right text */}
      <div>
        <hr />
        <p className='py-5 text-sm '>Copy right @2025</p>
      </div>
    </div>
  )
}

export default Footer
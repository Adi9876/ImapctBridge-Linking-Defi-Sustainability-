import React from 'react';
import Image from 'next/image';

import brandingImage from '../../images/branding/showcase.png'

export default function Hero() {
   return (
      <div className='flex max-md:flex-col-reverse text-primary mt-32 max-sm:mt-10 max-md:w-full w-[70%] mx-auto'>
         <div className='w-1/2 max-sm:w-11/12 max-md:mx-auto max-md:w-5/6 flex justify-start'>
            <div>
               <h1 className='text-7xl max-sm:text-3xl font-bold'>Tokenize fund</h1>
               <h2 className='text-3xl max-sm:text-lg text-gray-300 font-bold my-5'>Real Projects, Real Returns</h2>
               <p
                  className='text-gray-400 my-5 pr-5 text-lg'
               >Empowering Real Innovation and Investments in Web3.0. Join a thriving ecosystem connecting project creators with smart investors. Our platform ensures secure, transparent, and compliant crowdfunding. Explore cutting-edge projects and opportunities, all while benefiting from the potential of blockchain technology. Discover, Invest, and Grow with TokenizeFund today.</p>
               <div className='w-full flex flex-col max-md:items-center'>
                  <button
                     type='button'
                     className='w-5/6 py-2 rounded-full bg-gradient-to-t from-blue-600 to-blue-700 text-lg font-semibold'
                  >Start Investing</button>
                  <button
                  type='button'
                     className='w-5/6 py-2 rounded-full bg-gradient-to-t from-blue-600 to-blue-700 text-lg font-semibold mt-3'
                  >Connect Wallet</button>
               </div>
            </div>
         </div>
         <div className='w-1/2 flex justify-end max-sm:w-11/12 max-md:mx-auto max-md:w-5/6'>
            <Image
               src={brandingImage}
               alt='branding_iamge'
               quality={50}
               priority={false}
               className='md:-mt-10'
            />
         </div>
      </div>
   )
}

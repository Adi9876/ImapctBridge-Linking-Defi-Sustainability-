import React from 'react';
import investorBranding from '../../images/branding/investor_growth.png';
import Image from 'next/image';

export default function InvestorMessage() {
   return (
      <div className='w-[70%] max-md:w-full mx-auto mt-32 max-sm:mt-10 flex max-md:flex-col'>
         <div className='w-1/2 max-sm:w-11/12 max-md:mx-auto max-md:w-5/6 flex justify-start'>
            <Image
               src={investorBranding}
               quality={50}
               alt='investor_branding'
            />
         </div>

         <div className='w-1/2 max-sm:w-11/12 max-md:mx-auto max-md:w-5/6 flex flex-col text-white pl-20 max-md:pl-0'>
            <div>
               <h1 className='text-5xl max-md:text-3xl font-bold flex flex-col'><span>Hello enterpenuers</span><span>We have great deal for you</span></h1>
               <p className='text-gray-500 my-10 space-x-5 space-y-3 pr-10'>For project owners, TokenizeFund offers an unparalleled opportunity to access a global network of eager investors, ensuring your groundbreaking ideas get the funding and support they deserve, all within a secure and compliant ecosystem.</p>
            </div>
            <div className='w-full mt-5 flex flex-col items-center'>
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
   )
}

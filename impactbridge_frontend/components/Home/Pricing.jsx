import React from 'react'

export default function Pricing() {
   return (
      <div className='flex flex-col w-[70%] max-md:w-11/12 mt-20 max-sm:mt-10 mx-auto text-white'>
         <div className='w-full shadow-md bg-gradient-to-t from-blue-300 to-violet-100 px-10 py-8 max-sm:p-5 rounded-3xl mx-auto'>
            <h1 className='text-3xl max-sm:text-xl text-black font-bold text-center'>Pricing</h1>
            <p className='px-32 max-sm:px-8 my-5 text-center text-gray-600 max-sm:px-0'>
            At TokenizeFund, we prioritize fair and transparent pricing, ensuring that both project owners and investors benefit from competitive fees, allowing your investments to grow and your projects to thrive
            </p>
            <div className='flex justify-evenly my-10 w-[95%] mx-auto text-gray-900'>
            Other contents
            </div>
         </div>
      </div>
   )
}

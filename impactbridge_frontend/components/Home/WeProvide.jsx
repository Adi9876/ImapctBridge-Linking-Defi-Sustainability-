import React from 'react'

export default function WeProvide() {
  return (



    <div className='flex flex-col w-[70%] max-md:w-full mt-20 max-sm:mt-10 mx-auto text-white'>
      <div className='w-full max-sm:w-11/12 max-md:mx-auto max-md:w-5/6 shadow-md bg-gradient-to-t from-blue-300 to-violet-100 px-10 py-8 max-sm:p-5 rounded-3xl mx-auto'>
        <h1 className='text-3xl max-sm:text-xl text-black font-bold text-center'>Why ImpactBridge?</h1>
        <p className='px-32 max-sm:px-8 my-5 text-center text-gray-600 max-sm:px-0'>
        TokenizeFund stands out by combining robust security, regulatory compliance, and a user-friendly interface to provide a seamless experience for project owners and investors, making it the trusted choice for unlocking the full potential of Web3.0 investments
        </p>
        <div className='flex justify-evenly my-10 w-[95%] mx-auto text-gray-400 max-md:flex-col'>
        {["Reliability", "Trust", "Security", "Ease of use", "Blockchain", "NFT"].map((item) => (

          <div key={item} className='bg-blue-500 bg-opacity-20 rounded-lg shadow-xl p-8 max-sm:p-5 text-gray-800 max-md:mt-2 flex justify-center'>
            <h1
              className='text-lg font-semibold'
            >{item}</h1>
          </div>

        ))}
      </div>
      </div>
    </div>
  )
}

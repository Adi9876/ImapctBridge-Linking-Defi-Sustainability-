import React from 'react'
import { RiMenuFoldFill } from 'react-icons/ri';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../images/branding/logo.jpg';
import navigationItems from '@/utils/navitems';


const NavigationItem = ({ title, url }) => {
  return (
    <Link
      className='hover:shadow-3xl hover:opacity-80 transition-all duration-300 ease-linear px-3 py-2 text-lg font-semibold'
      href={url}
      scroll
    >
      {title}
    </Link>
  )

}



export default function Sidebar({ handleSiderbar }) {
  return (
    <div className='w-5/6 fixed top-2 left-2 bg-black bg-opacity-90 h-screen rounded-md animate-fade-in z-20 text-white'>
      <div className='w-full flex justify-between'>
        <div />
        <RiMenuFoldFill fontSize={50} color='white' onClick={handleSiderbar} className='bg-yellow-600 p-3 rounded-full' />
      </div>


      <div className='flex flex-col h-[90%] justify-between'>

        <div className='flex items-center px-5 h-[10%]'>

          <div className='py-3'>
            <Image
              src={logo}
              alt='logo'
              quality={100}
              priority={true}
              width={50}
              height={50}
            />
          </div>

          <div className='mx-2' />

          <div className='flex items-center'>
            <div className='h-[6vh] border-r border-2 mr-4' />
            <div className='flex flex-col'>
              <h1 className='text-xl font-bold'>ImpactBridge</h1>
              <p className='text-xs'>Build your career here</p>
            </div>
          </div>

        </div>

        <div className='h-[80%]'>
          <ul className='flex flex-col list-none px-3'>
            {navigationItems.map((navitem) => (
              <NavigationItem
                key={navitem.title + navitem.url}
                title={navitem.title}
                url={navitem.url}
              />
            ))}
          </ul>
          <div className='border-[0.5px] my-2 border-gray-500 w-5/6 mx-auto' />
        </div>

        <div className='h-[10%]'>
          Others
        </div>
      </div>
    </div>
  )
}
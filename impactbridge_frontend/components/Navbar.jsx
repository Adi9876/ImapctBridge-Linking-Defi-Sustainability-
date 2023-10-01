import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../images/branding/logo.jpg';
import navigationItems from '@/utils/navitems';

const handleLogout = () => {

}


const NavigationItem = ({ title, url }) => {
  return (
    <Link
      className='hover:shadow-3xl hover:opacity-80 transition-all duration-300 ease-linear px-3 py-6 text-lg font-semibold'
      href={url}
      scroll
    >
      {title}
    </Link>
  )

}

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [confirmLogout, setConfirmLogout] = useState(false);


  return (
    <div className='text-white z-50 sticky top-0 flex justify-evenly w-full items-center bg-gradient-to-t from-violet-950 to-violet-900'>
      <div className='flex items-center'>
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
        <div className='mx-2'/>
        <div className='flex items-center'>
          <div className='h-[6vh] border-r border-2 mr-4' />
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold'>ImpactBridge</h1>
            <p>Build your career here</p>
          </div>
        </div>
      </div>

      <div className='w-[60%]'>
        <ul className='flex gap-5 list-none'>
          {navigationItems.map((navitem) => (
            <NavigationItem
              key={navitem.title + navitem.url}
              title={navitem.title}
              url={navitem.url}
            />
          ))}
        </ul>
      </div>

      {!user ? (
        <div className='flex animate-fade-in'>
          <Link href="/auth/login" type='button' className='py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out mr-2 font-semibold'>Login</Link>
          <Link href="/auth/signup" type='button' className='py-2 px-4 rounded-md bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 ease-in-out mr-2 text-black font-semibold'>Signup</Link>
        </div>
      ) : (
        !confirmLogout ? (
          <button type='button' className='py-2 px-4 rounded-md bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 ease-in-out mr-2 text-black font-semibold animate-fade-in' onClick={()=>setConfirmLogout(true)}>Logout</button>
        ) : (
          <div className='flex animate-fade-in'>
          <button href="/" type='button' className='py-2 px-4 rounded-md bg-red-600 hover:bg-red-500 transition-all duration-300 ease-in-out mr-2 font-semibold' onClick={handleLogout}>Confirm</button>
          <button href="/" type='button' className='py-2 px-4 rounded-md text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out mr-2 text-black font-semibold' onClick={()=>setConfirmLogout(false)}>Cancel</button>
        </div>
        )
      )}

    </div>
  )
}

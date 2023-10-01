import React from 'react';
import {BsFillHeartFill} from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='py-20 w-[70%] mx-auto text-white flex justify-center'>
        <h1 className='flex items-center text-center'>Made with <BsFillHeartFill color='red' className='mx-2' /> in IIIT Ranchi</h1>
    </div>
  )
}

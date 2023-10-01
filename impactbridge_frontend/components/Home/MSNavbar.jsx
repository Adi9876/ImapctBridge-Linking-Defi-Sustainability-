import { useState } from 'react';

import { RiMenuUnfoldFill } from 'react-icons/ri';

import Sidebar from '../Sidebar';

export default function MSNavbar() {
   const [toggleSidebar, setToggleSidebar] = useState(false);

   const handleSiderbar = () => {
      setToggleSidebar(!toggleSidebar)
   }
   
   return (
      <div>
         <div className='fixed top-2 left-2 cursor-pointer z-20 bg-yellow-600 p-3 rounded-full'>
            {!toggleSidebar ? (
               <RiMenuUnfoldFill fontSize={30} color='white' className='animate-fade-in transition-all duration-300 ease-linear' onClick={handleSiderbar} />
            ) : (
               <Sidebar handleSiderbar={handleSiderbar} />
            )}
         </div>
      </div>
   )
}

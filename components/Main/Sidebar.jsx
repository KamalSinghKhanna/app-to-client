"use client"
import React, { useState } from 'react'
import Filter from './Filter';
import Image from 'next/image';

const Sidebar = () => {
  const [showSidebar, SetShowSidebar] = useState(false)
  const closeSidebar = () =>{
    SetShowSidebar(false)
  }
  const openSidebar = () =>{
    SetShowSidebar(!showSidebar)
  }
  return (
    <>
      <aside className="hidden bg-white sm:block w-80 border-r p-4 sm:relative sm:z-40">
        <div className="mt-4">
          <nav>
            <Filter />
          </nav>
        </div>
      </aside>
      {/* mobile */}
      <div className="block sm:hidden h-full  ">
        <button className='absolute top-3 z-50 left-3' onClick={openSidebar}>
          <Image src={"/menu.svg"} alt='menubar' width={200} height={200} className='w-6 h-6' />
        </button>
        {showSidebar && (
          <div className='h-full fixed z-50'>
            <div
              className="absolute inset-0 bg-black/30 z-50"
              onClick={closeSidebar}
            ></div>
            <aside className=" w-80 border-r p-4 relative z-50 bg-white h-screen">
              <div className="mt-8">
                <nav>
                  <Filter />
                </nav>
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar
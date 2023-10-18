import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { IoNotificationsOutline } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from './sidebar'

const Nav = () => {
  // bg-gray-300
  // bg-white
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu)
  }
  return (<>
    {
      hamburgerMenu ? <Sidebar hamburgerMenu={hamburgerMenu} setHamburgerMenu={setHamburgerMenu} /> :
        <div className="lg:flex justify-between bg-white rounded-xl mx-4 p-4">
          <div className='lg:hidden flex justify-end mb-2'>
            <GiHamburgerMenu onClick={handleHamburgerMenu} className='text-xl' />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-xl py-2 pl-7 border focus:outline-none focus:shadow-outline"
              placeholder="Search anything..."
            />
            <div className="absolute inset-y-0 ml-2 flex items-center">
              <CiSearch />
            </div>
          </div>
          <div className="flex items-center py-2">
            <h4 className="text-xl font-semibold">Saturday, May 3, 2023</h4>
            <div className="ml-2 flex">
              <div className="bg-red-500 rounded-full text-white py-0 px-1 items-start justify-start bottom-0">3</div>
              <IoNotificationsOutline className="text-2xl p-1 rounded-full border" />
            </div>
          </div>
        </div>
    }
  </>

  )
}

export default Nav
import React from 'react'
import { CiSearch } from "react-icons/ci"
import { IoNotificationsOutline } from "react-icons/io5"
const Nav = () => {
  // bg-gray-300
  // bg-white
  return (
    <div className="flex justify-between bg-white rounded-xl mx-4 p-4">
      <div className="relative w-64">
        <input
          type="text"
          className="w-full rounded-xl py-2 pl-8 border focus:outline-none focus:shadow-outline"
          placeholder="Search anything..."
        />
        <div className="absolute inset-y-0 ml-2 flex items-center pr-3">
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
  )
}

export default Nav
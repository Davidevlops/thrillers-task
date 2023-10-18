import React from 'react'
import img from '../images/img.webp'
import { BsPencilSquare } from "react-icons/bs"
import { GiLoveMystery } from "react-icons/gi"
import { RiTicketLine } from "react-icons/ri"
import { PiCirclesFourBold } from "react-icons/pi"
import { RiSettingsLine } from "react-icons/ri"
import { RiHome5Fill } from "react-icons/ri"
import { RiLogoutCircleRLine } from "react-icons/ri"

const Sidebar = () => {
  // bg-gray-300
  // bg-white
  return (
    <div className="col-span-1 bg-white p-2 rounded-tl-xl rounded-bl-xl">
      <h2 className="font-bold text-2xl text-center py-4">
        Mima<span className="my-bg-gray">Booking</span>
      </h2>
      <div className="flex flex-col mt-4 items-center py-2">
        <div className='flex items-end justify-center'>
          <img className="rounded-full p-1 object-cover border border-gray-500 w-24 h-24" src={img} alt="lady" />
          <div className='absolute border border- bg-purple rounded-full p-2 font-light '>
            <BsPencilSquare className='text-white text-xl font-light ' />
          </div>
        </div>
        <p className="my-bg-gray text-xl mt-2">ilia jan</p>
      </div>
      <ul className="flex flex-col py-10 mx-8">
        <li className="flex py-3">
          <RiHome5Fill className="mt-1 mr-6 text-lg" /> Dashboard
        </li>
        <li className="flex py-3">
          <PiCirclesFourBold className="mt-1 mr-6" /> Explore City
        </li>
        <li className="flex py-3">
          <RiTicketLine className="mt-1 mr-6" /> Ticket
        </li>
        <li className="flex py-3">
          <GiLoveMystery className="mt-1 mr-6" /> Favourites
        </li>
        <li className="flex py-3">
          <RiSettingsLine className="mt-1 mr-6" /> Settings
        </li>
      </ul>
      <p className="flex mx-8 py-10">
        <RiLogoutCircleRLine className="mt-1 mr-6" /> Logout
      </p>
    </div>


  )
}

export default Sidebar
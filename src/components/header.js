import React from 'react'
import imma from "../images/imaaa.webp"
import { IoMdArrowDropdown } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { BsPersonFill } from "react-icons/bs"
import { CiTimer } from "react-icons/ci"

const Header = () => {
    return (
        <div className='rounded-xl mt-4 mx-4'>
            <img className='w-full h-48 object-cover rounded-xl' src={imma} alt={imma}></img>
            <div className="bg-white rounded-xl p-4 flex gap-8 mx-16">
                <div className="flex ml-6 gap-4 p-2">
                    <CiLocationOn className="mt-1" />
                    <p>Where Are You Going?</p>
                    <IoMdArrowDropdown className="mt-1" />
                    <h3 className=''>|</h3>
                </div>
                <div className="flex gap-4 p-2">
                    <CiTimer className="mt-1" />
                    <p>Check-in Date</p>
                    <IoMdArrowDropdown className="mt-1" />
                    <h3 className=''>|</h3>
                </div>
                <div className="flex gap-4 p-2">
                    <BsPersonFill className="mt-1" />
                    <p>3 adults</p>
                    <IoMdArrowDropdown className="mt-1" />
                    <h3 className=''>|</h3>
                </div>
                <button className="rounded-xl bg-purple px-3 py-2 text-white ml-20">Search</button>
            </div>

        </div>
    )
}

export default Header
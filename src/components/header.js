import React from 'react'
import imma from "../images/imaaa.webp"
import { IoMdArrowDropdown } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { BsPersonFill } from "react-icons/bs"
import { CiTimer } from "react-icons/ci"

const Header = () => {
    return (
        <div className="rounded-xl mt-4 mx-4">
            <img className="w-full h-48 object-cover rounded-xl" src={imma} alt={imma} />
            <div className="lg:flex lg:mx-16 bg-white rounded-xl p-4 ">
                <div className='lg:flex lg:mx-4 gap-4'>
                    <div className="flex justify-between gap-4 py-2">
                        <CiLocationOn className="mt-1" />
                        <p className='text-base'>Where Are You Going?</p>
                        <IoMdArrowDropdown className="mt-1" />
                        <h3>|</h3>
                    </div>
                    <div className="flex justify-between gap-4 py-2">
                        <CiTimer className="mt-1" />
                        <p className='text-base'>Check-in Date</p>
                        <IoMdArrowDropdown className="mt-1 ml-6" />
                        <h3>|</h3>
                    </div>

                    <div className="flex justify-between gap-4 py-2">
                        <BsPersonFill className="mt-1" />
                        <p className='text-base'>3 adults</p>
                        <IoMdArrowDropdown className="mt-1 ml-12" />
                        <h3>|</h3>
                    </div>
                </div>
                <div className=''>
                    <button className="rounded-xl bg-purple px-3 py-2 text-white lg:ml-20">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import Sidebar from './sidebar'


const Mobile = ({ hamburgerMenu }) => {
    return (
        <div className={`${hamburgerMenu ? "flex " : "hidden"}`}>
            <Sidebar />
        </div>
    )
}

export default Mobile
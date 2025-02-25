import React from 'react'
import Search from './Search'

function Navbar() {
    return (
        <div className='h-20 w-full flex items-center justify-center sm:justify-end relative'>
            <img className='w-32 sm:block hidden absolute top-0 left-0' src="../logo.svg" />
            <Search />
        </div>
    )
}

export default Navbar
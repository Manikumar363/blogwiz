import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>

        <div className=''>
            <div className='pt-5 text-sm bg-gray-900 text-gray-500 text-center py-4 font-semibold'>
            <p className='py-1'>© 2025 Blogwiz. All rights reserved.</p>

            <p>Designed and developed with ♥ by <Link to="www.linkedin.com/in/mani-kumar-679b95215" className='font-bold text-white underline'>Mani Kumar</Link></p>
            </div>
        </div>

    </>
  )
}

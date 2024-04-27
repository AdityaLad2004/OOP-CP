import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import rapidlogotransparent from '../assets/rapidlogotransparent.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mt-[-200vh] top-0 w-full relative z-10'>
      <div className='bg-gradient-to-b from-gray-400/50 to-gray-700/50 h-[15vh] flex justify-between'>
          <Link to="/">
              <img src={rapidlogotransparent} alt="My Image" className='w-[135px]' role='button'/>
          </Link>
          {/* <div className='pt-4 m-4' role='button'> rapidlogo </div> */}
          <div className='flex p-4 gap-14 mr-16 mt-12 text-white'>
            <Link to="/complaintform">
                <div className="rounded-xl p-1 hover:bg-gray-400/50" role='button'> Add Complaint</div>
            </Link>
            <Link to="/viewcomplaint">
                <div className="rounded-xl p-1 hover:bg-gray-400/50" role='button'> View Complaint Status</div>
            </Link>
            <Link to="/about">
                <div className="rounded-xl p-1 hover:bg-gray-400/50" role='button'> About</div>
            </Link>
            <FaRegUserCircle className='text-4xl mt-[-4px] rounded-xl p-1 hover:bg-gray-400/50' role='button'/>
        </div>

      </div>
    </div>
  )
}

export default Header
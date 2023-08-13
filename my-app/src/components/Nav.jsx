import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill} from "react-icons/bs";
import { BsFillCollectionPlayFill} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
export const Nav = () => {
  return (
    <nav className='nav left-side container'>
        <div className="container nav-container login-text-wrapper">
            <ul className='nav-content '>
            <li> <AiFillHome size={30} color='black'/>Home</li>
            <li> <BsFillPeopleFill size={30} color='black'/> Community</li>
            <li> <BiSearch size={30} color='black'/> Search</li>
            <li> <BsFillCollectionPlayFill size={30} color='black'/> Courses</li>
            </ul>
        </div>
    </nav>
  )
}

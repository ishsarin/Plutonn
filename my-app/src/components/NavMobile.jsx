import React from 'react'
import img from "../media/Screenshot.png"
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill} from "react-icons/bs";
import { BsFillCollectionPlayFill} from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
export const NavMobile = () => {
  return (
    <nav className='nav-mobile-heading'>
    <div className="plane-btn">
        <IoMdPaperPlane color='red' size={40}/>
    </div>
        <div className="nav-mobile-wrapper">
            <ul className='nav-mobile-ul'>
            <li> <AiFillHome size={20} color='black'/><div>Home</div> </li>
            <li> <BsFillPeopleFill size={20} color='black'/> <div>Community</div> </li>
            <li> <BiSearch size={20} color='black'/> <div>Search</div> </li>
            <li> <BsFillCollectionPlayFill size={20} color='black'/> <div>Courses</div> </li>
            <li> <img src={img} alt="" height={22} width={22} /> <div style={{paddingTop:"3px"}}>Profile</div> </li>
            </ul>
        </div>
    </nav>
  )
}

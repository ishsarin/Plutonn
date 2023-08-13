import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import img from "../media/Screenshot.png";

export const Right = () => {
  let data = ["DSA Community", "DSA Meme", "DSA Wizards", "DSA Tech"];
  return (
    <div className="right">
      <div className="right-wrapper">
        <input
          type="search"
          placeholder="Search Joined Community"
          className="right-search" 
          size={35}
        />
        <div className="right-search-logo">
          {" "}
          <AiOutlineSearch color="red" size={20} />
        </div>
      </div>
      <div className="right-communities">
        <div className="right-communities-heading">Popular Communities</div>
        <div className="right-communities-wrapper">
          {data.map(
            (data => (
        <div className="right-community">
        <div className="center-wrapper">
          <div className="title-wrapper d-flex justify-content-md-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="title-img">
                <img src={img} alt="" height={45} width={45} className="right-communities-img"/>
              </div>
              <div className="right-title">
                <div className="right-communities-title">DSA Community</div>
                <div className="right-communities-members">163 Member</div>
              </div>
            </div>
            <div className="join right-join d-flex justify-content-md-evenly align-items-center">
            <div className='follow'><div><span style={{color:"#f45046",fontSize:"24px",fontWeight:"400"}}>+</span> Join</div></div>
            
             

            </div>
          </div>
        </div>
      </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

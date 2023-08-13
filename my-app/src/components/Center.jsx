import React, { useState } from "react";
import img from "../media/Screenshot.png";
import { AiOutlineInfoCircle} from "react-icons/ai";
import { Headings } from "./Headings";
export const Center = () => {
    const [click,setClick] = useState(false);
    const handleHamburgerClick = ()=>{

        const report = document.querySelector(".report")
        report.hidden = click;
        setClick(!click);
        

    }

  return (
    <>
      <div className="container full-center-heading">
        <div className="center-wrapper">
          <div className="title-wrapper d-flex justify-content-md-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="title-img">
                <img src={img} alt="" height={50} width={50} />
              </div>
              <div className="title">
                <div className="title-heading">DSA Community</div>
                <div className="title-members">163 Member</div>
              </div>
            </div>
            <div className="join d-flex justify-content-md-evenly align-items-center">
            <div className='follow'><div><span style={{color:"#f45046",fontSize:"18px"}}>+</span> Join</div></div>
            
              <div onClick={handleHamburgerClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                  className="title-hamburger"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>

            </div>
          </div>
        </div>
        <div className="report" hidden> <div className="report-text"> <AiOutlineInfoCircle/> info</div></div>
      </div>
        {/* <hr style={{ width: "100%", marginTop: "5px", marginBottom: "0px" }} /> */}
        <Headings/>
    </>
  );
};

import React, { useEffect } from "react";
import { useState } from "react";
import data from "../data/data.js";
import img from "../media/Screenshot.png";
import binaryTree from "../media/binaryTree.png";
import { FaRegComment } from "react-icons/fa6";

import { FaLaughBeam } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidShareAlt } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { PiHandsClappingBold } from "react-icons/pi";
import ReactReadMoreReadLess from "react-read-more-read-less";
let myLongText = `
  🌟 Greetings, Members! 🌟 

  🔥 Introducing our very first challenge!🔥 

  Submit your incredible code for this mind-boggling problem andget ready for a chance to be featured with a shoutout onCipherSchools' Instagram page! 📸🎉 
  👉🏼 Q: Given a binary tree, writean efficient algorithm to convert the binary tree into its mirror.`;
let lines;
let des;
export const Posts = () => {
  const [click, setClick] = useState(false);
  const [showcontent, setShowContent] = useState(false);
  const handleHamburgerClick = () => {
    const info = document.querySelector(".info");
    info.hidden = click;
    setClick(!click);
  };

  useEffect(() => {
    countLines();
    if (lines <= 3) {
    }
  }, []);

  const countLines = () => {
    var el = document.querySelector(".post-content");

    var divHeight = el.offsetHeight;
    var lineHeight = parseInt(el.style.lineHeight);
    lines = divHeight / lineHeight;
    // console.log(lines)
  };
  const showFullDescriptionHandler = (e) => {
    var el = document.querySelector(".post-content");
    // console.log(el.textContent)
    des = showcontent ? el.textContent : el.textContent.slice(0, 20);
    setShowContent(!showcontent);
  };

  const handleHover = () => {
    const like = document.querySelector(".actions-like");
    const like_hover = document.querySelector(".actions-like-hover");
    // like_hover.hidden = false;
    
  };
  const handleClose = () => {
    const like = document.querySelector(".actions-like");
    const like_hover = document.querySelector(".actions-like-hover");
    // like_hover.hidden = true
  };

  return (
    <div className="post">
      {data.map((data) => (
        <div className="post-wrapper">
          <div className="post-heading">
            <div className="title-wrapper d-flex justify-content-md-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="title-img">
                  <img src={img} alt="" height={40} width={40} />
                </div>
                <div className="profile-id">
                  <div className="profile-email">{data.email}</div>
                  <div className="post-name">{data.name}</div>
                </div>
              </div>
              <div className="post-follow  d-flex justify-content-md-evenly align-items-center">
                <div className="follow">
                  <div>
                    <span style={{ color: "#f45046", fontSize: "18px" }}>
                      +
                    </span>
                    Follow
                  </div>
                </div>

                <div onClick={handleHamburgerClick} className="three-dots">
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
          <div className="info" hidden>
            {" "}
            <div className="info-text">Report</div>
          </div>

          <div className="post-content" style={{ lineHeight: "22px" }}>
            {/* 🌟 Greetings, Members! 🌟 
            <br /><br />
            🔥 Introducing our very first challenge!🔥
            <br />
            <br />
            Submit your incredible code for this mind-boggling problem and
            get ready for a chance to be featured with a shoutout on
            CipherSchools' Instagram page! 📸🎉 👉🏼 Q: Given a binary tree, write
            an efficient algorithm to convert the binary tree into its mirror. */}
            <ReactReadMoreReadLess
              charLimit={180}
              readMoreText={"Read more"}
              readLessText={"Read less"}
            >
              {myLongText}
            </ReactReadMoreReadLess>
          </div>

          <div className="post-img">
            <img src={binaryTree} alt="" />
          </div>

          <div className="actions">
            <ul className="actions-like-hover" hidden>
              <li>
                <BiSolidLike size={28} color="blue" />
              </li>
              <li>
                <AiFillHeart size={28} color="red" />
              </li>
              <li>
                <PiHandsClappingBold size={28} color="green" />
              </li>
              <li>
                <FaLaughBeam size={28} color="purple" />
              </li>
            </ul>
            <div className="actions-wrapper">
              <div className="actions-comment">
                <FaRegComment size={20} />
                <span>0</span>
              </div>
              <div
                className="actions-like"
                onMouseOver={handleHover}
                onMouseOut={handleClose}
              >
                <BiSolidLike size={20} /> <span>5</span>
              </div>

              <div className="actions-share">
                <BiSolidShareAlt size={20} />
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

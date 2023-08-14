import React, { useState } from 'react'
import { Posts } from './Posts'
let val;
export const Headings = () => {

    const handleClick = (e)=>{
        const posts = document.querySelector(".headings-posts")
        const announcements = document.querySelector(".headings-announcements")
        const data_theme = document.querySelector("body").getAttribute('data-theme');
        // console.log(e.target.textContent)
        
    document.querySelector("body").setAttribute("data-heading",e.target.textContent)
        

            if(e.target.textContent==="Posts"){
                posts.style.color = "red"
                announcements.style.color = "black"
            }
            else if(e.target.textContent==="Announcements"){
                announcements.style.color = "red"
                posts.style.color = "black"
            }
        
         if(data_theme==="dark"){
            if(e.target.textContent==="Posts"){
                posts.style.color = "red"
                announcements.style.color = "white"
            }
            else if(e.target.textContent==="Announcements"){
                announcements.style.color = "red"
                posts.style.color = "white"
            }
        }

       
        val = e.target.textContent;
    }

  return (
    <>
    <div className='headings'>
        <div className='headings-wrapper d-flex'>
            <div className='headings-posts' name= "posts" onClick={handleClick} style={{color:"red"}}>Posts</div>
            <div className='headings-announcements' name="announcements" onClick={handleClick}>Announcements</div>
        </div>

        <div className=" header">
           Join DSA Community
        </div>

    </div>
    <Posts/>
    </>
  )
}
export default val;
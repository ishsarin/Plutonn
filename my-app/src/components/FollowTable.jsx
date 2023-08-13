import React from 'react'
import data from "../data/data"
// import mode from "../components/Navbar"
export const FollowTable = () => {
  return (
    <div className='col-4 left-side container'>
        <div className={"login-text-wrapper followtable"}  >
          <table>
            {
              data.map((data)=>(
            <tr className='followtable-row'>
              <td><img src={data.image} className='profile-img' height={40} width={40}/></td>
              <td>
              <div>
                <div className='profile-email'>{data.email}</div>
                <div className='profile-name'>{data.name}</div>
              </div>
              </td>
              <td className='follow'><div><span style={{color:"#f45046",fontSize:"18px"}}>+</span> Follow</div></td>
            </tr>
              ))
            }
          </table>
        </div>
    </div>
  )
}

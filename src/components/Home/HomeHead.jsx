import React from 'react'
import {HandHoldingBulb3D} from "../../assets"
import { NavLink } from "react-router-dom";

function HomeHead() {
  return (
    <div className='HomeHead_bg margin_set'>
    <div className='HomeHead'>
      <div style={{flex: 65}}>
        <h1>Hackathon Submission</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
        <NavLink to="/submit" className="NavLink">
          <button className='submitButton'>Upload Submission</button>
        </NavLink>
      </div>
      <div  style={{flex: 35, alignItems: "flex-end", justifyContent: "center"}} >
        <img src={HandHoldingBulb3D} alt="" />
      </div>
    </div>
    </div>
  )
}

export default HomeHead
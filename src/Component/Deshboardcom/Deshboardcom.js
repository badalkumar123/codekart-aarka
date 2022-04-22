import React from "react";
import "./Deshboardcom.css";
import relogo from "../../img/re 2.png";
import circle1 from "../../img/Ellipse.png";
import { IconContext } from "react-icons";
import { FaRegCalendarCheck, FaUserAlt } from "react-icons/fa";
import { Icon } from "@iconify/react";
export default function Deshboard() {
  return (
    <div>
      <div className="revenuebox"></div>
      <div className="revenueearned">Revenue Earned</div>
      <div className="amount1">70,128 ₹</div>
      <img src={circle1} className="circlelogo" alt=""></img>
      <img src={relogo} className="revelogo" alt=""></img>

      <div className="totalbox"></div>
      <div className="totaluser">Total user</div>
      <div className="amount2">300</div>
      <img src={circle1} className="circle2" alt=""></img>

      <IconContext.Provider value={{ className: "profilogo", size: 30 }}>
        <FaUserAlt />
      </IconContext.Provider>

      <div className="totalbookingbox"></div>
      <div className="totalbooking">Total booking</div>
      <div className="amount3">85</div>
      <img src={circle1} className="circle3" alt=""></img>

      <IconContext.Provider value={{ className: "callogo", size: 30 }}>
        <FaRegCalendarCheck />
      </IconContext.Provider>

      <div className="totalfacilitiesbox"></div>
      <div className="totalfacilities">Total facilities</div>
      <div className="amount4">130</div>
      <img src={circle1} className="circle4" alt=""></img>
      
        <Icon icon="emojione-monotone:stadium" className='sdicon' />

        <div className="totalsubsbox"></div>
      <div className="totalsub">Total Subscription</div>
      <div className="amount5">40</div>
      <img src={circle1} className="circle5" alt=""></img>
      
        <Icon icon="clarity:crown-line" className='crownicon' />


        <div className="cancelorderbox"></div>
      <div className="cancelorder">Cancel order</div>
      <div className="amount6">150  |  200</div>
      <img src={circle1} className="circle6" alt=""></img>
      
        <Icon icon="uil:calender" className='cal2icon' />
        <Icon icon="ic:baseline-cancel" className='cal3icon' />
      
    </div>
  );
}

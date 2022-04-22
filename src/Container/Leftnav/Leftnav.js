import React from "react";
import "./Leftnav.css";
import aarkalogo from "../../img/aarkalogo.png"
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIoPricetag, IoIosFootball, IoMdPricetag } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Leftnav() {
  return (
    <div className="leftbar">
      <div className="aarkaimg">
        <img src={aarkalogo} className="aarkalogo" alt=""></img>
      </div>
      <div className="desh">
        <IconContext.Provider value={{ className: "deshboard", size: 23 }}>
          <AiFillHome />
        </IconContext.Provider>
        <Link className="deshbuttom" to='/deshbord'>
        Deshboard </Link>
      </div>

      <div className="user">
      <IconContext.Provider value={{ className: "userlogo", size: 23 }}>
          <FaUserAlt />
        </IconContext.Provider>
      <button ><Link className="userbuttom" to='/user'>User</Link></button>

      </div>

      <div className="subadmin">
      <IconContext.Provider value={{ className: "subadminlogo", size: 23 }}>
          <FaUser />
        </IconContext.Provider>
      <button className="subadminbuttom">Sub Admin</button>
       </div>

       <div className="pricetag">
      <IconContext.Provider value={{ className: "pricetaglogo", size: 23 }}>
          <IoMdPricetag />
        </IconContext.Provider>
      <button ><Link className="pricetagbuttom" to='/price'>Price</Link></button>
       </div>

       
       
       

      
    </div>
  );
}

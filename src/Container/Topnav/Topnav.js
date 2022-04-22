import React from 'react'
import './TopNav.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { FiBell } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { IconContext } from "react-icons";


export default function Topnav() {
  return (
    <div>
        
        <div className='topnavi'>
            <div className='searchbox'>
            <IconContext.Provider value={{ className: "searchlogo", size: 30 }}><BiSearchAlt2/></IconContext.Provider>
            <input type="text" className="search" placeholder= "Search Here..."></input>
            </div>
            <div className='bell'>
            <IconContext.Provider value={{ className: "bellicon", size: 30 }}><FiBell/></IconContext.Provider>
            <div className='number12'>12</div>
            </div>
            <div className='account'>
            <IconContext.Provider value={{ className: "accountlogo", size: 35 }}><MdAccountCircle/></IconContext.Provider>
            
            </div>


        </div>
    </div>
  )
}

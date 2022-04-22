import React from 'react'
import './Userdeta.css'
import pricetag from '../../img/pricetag.png'
import { IconContext } from 'react-icons'
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { HiOutlineCake } from 'react-icons/hi'

export default function Userdeta() {
  return (
    <div>
        <div className='userbox'>
        <div className='userline'></div>
        <div className='yellowcircle'></div>
        <img src={pricetag} className='pricelogo' alt=''></img>
        <div className='saragika'>Sagarika Mohanty</div>
        <IconContext.Provider value={{ className: "mobilelogo", size: 23 }}>
          <AiOutlineMobile />
        </IconContext.Provider>
        <div className='mobileno'>Phone Number : +91 9876543214</div>
        <IconContext.Provider value={{ className: "emailid", size: 23 }}>
          <AiOutlineMail />
        </IconContext.Provider>
        <div className='emailsagarika'>Email ID : sagarika@gmail.com</div>
        <IconContext.Provider value={{ className: "cakelogo", size: 23 }}>
          <HiOutlineCake />
        </IconContext.Provider>
        <div className='birthday'>Date Of Birth : 07.10.1999</div>
        
        <div className='amountpaid'>Amount Paid</div>

        <div className='bookingslot'>BOOKED SLOT : 06.30AM - 08.30AM</div>
        <div className='date002'>DATE : 24th Dec 2020</div>
        <div className='goldmember'>SUBCRIPTION : Gold Membership</div>
        <div className='toamount'>TOTAL AMOUNT : ₹ 1300.00</div>
        <div className='goldcard1'> </div>
        <div className='goldmem'>Gold Member</div>
        <div className='buledot1'></div>
        <div className='buledot2'></div>
        <div className='buledot3'></div>
        <div className='buledot4'></div>
        <div className='buledot5'></div>
        <div className='cardtext1'>Best sports curriculum</div>
        <div className='cardtext2'>Skill assessment</div>
        <div className='cardtext3'>Personalised attention</div>
        <div className='cardtext4'>Certified coaches</div>
        <div className='cardtext5'>Get complete training & gudience</div>
        </div>
    </div>
  )
}

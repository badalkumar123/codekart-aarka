import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Deshboard from './Container/Deshboard/Deshboard'
import Leftnav from './Container/Leftnav/Leftnav'
import Price from './Container/Price/Price'
import Topnav from './Container/Topnav/Topnav'
import Users from './Container/Users/Users'

import Home from './Home'

export default function App() {
  return (
    <div>
      
         
         <BrowserRouter>
        <Deshboard/>
      <Routes>
        <Route path="/deshbord" element={<Deshboard/>}></Route>
        <Route path="/user" element={<Users/>}></Route>
        <Route path="/price" element={<Price/>}></Route>
      </Routes>

      <Topnav/>
         <Leftnav/>
    </BrowserRouter>
      
    </div>
  )
}
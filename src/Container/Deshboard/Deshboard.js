import React from "react";
import { Col, Row } from "react-bootstrap";
import Deshboardcom from "../../Component/Deshboardcom/Deshboardcom";
import TopStadium from "../../Component/TopStadium/Topstadium";
import './Deshboard.css'

export default function Deshboard() {
  return (
    <div className="page1">
       
          <Deshboardcom />
          
          <TopStadium/>
          
          

     
    </div>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deshboard from "./Container/Deshboard/Deshboard";

import Leftnav from "./Container/Leftnav/Leftnav";
import Topnav from "./Container/Topnav/Topnav";
import Users from "./Container/Users/Users";

export default function Home() {
  return (
    <div>
      <Deshboard />
      <Topnav />
      <Leftnav />
    </div>
  );
}

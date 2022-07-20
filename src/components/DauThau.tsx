import React from "react";
import { Admin } from "./CommonMenu/RightSideMenu/Admin";
import { SideBar } from "./CommonMenu/SideBar/SideBar";

import './dauThau.css';

export const DauThau = () => {
    return (
      <React.Fragment>
        <Admin />
        <SideBar />
        <h1>Haloooo</h1>
      </React.Fragment>  
    );
};
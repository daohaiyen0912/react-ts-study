import React from "react";
import { Admin } from "./CommonMenu/RightSideMenu/Admin";
import { SideBar } from "./CommonMenu/SideBar/SideBar";

import './dauThau.css';

export const DauThau = () => {
    return (
      <React.Fragment>
        <Admin />
        <SideBar />
        <h1>Click vào phần đấu thầu bên dưới để vào trang master</h1>
      </React.Fragment>  
    );
};
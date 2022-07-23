import React from "react";
import { Outlet, Link } from "react-router-dom";

import './sidebar.css';

export const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="logo-sidebar">
                <h3 className="w3-bar-item">ePurchase</h3>
            </div>
            <ul className="side-bar-menu-list">
                <li>
                    <Link to="/dau-thau">
                        <div className="sidebar-dau-thau">
                            <h3>Đấu thầu</h3>
                            <p>somthing describe</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/dau-thau/dau-thau-master">
                        <div>
                            Đấu thầu
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/dau-thau/dau-thau-info">
                        <div>
                            Thông tin cá nhân
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
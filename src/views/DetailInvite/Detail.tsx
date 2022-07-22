import React from 'react';

import { Admin } from '../../components/CommonMenu/RightSideMenu/Admin';
import { SideBar } from '../../components/CommonMenu/SideBar/SideBar';
import './detail.css';

export const Detail = () => {
    return (
        <>
            <Admin />
            <SideBar />
        </>
    );
}
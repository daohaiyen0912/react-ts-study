import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './admin.css'
import { BellOutlined } from '@ant-design/icons';


export const Admin = (props: any) => {
    return (
        <div className="menu-container">
            <div className="right-menu"></div>
            <div className="left-menu">
                <button>
                    <BellOutlined />
                </button>
                <div className="avatar-admin">
                    <img src="https://i.pinimg.com/564x/77/ad/29/77ad29085f4ead8a3ae0ec92679574ce.jpg" style={{borderRadius: "50%"}}></img>
                    <div>
                        <div className="bla">
                            <h2>Vu Tuan</h2>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './admin.css'


export const Admin = (props: any) => {
    return (
        <div className="menu-container">
            <div className="right-menu"></div>
            <div className="left-menu">
                <button>
                    <FontAwesomeIcon icon={faHeart} beat/>
                </button>
                <div className="avatar-admin">
                    <img src="https://i.pinimg.com/564x/77/ad/29/77ad29085f4ead8a3ae0ec92679574ce.jpg"></img>
                    <div>
                        <div className="bla">
                            <h3>Vu Tuan</h3>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
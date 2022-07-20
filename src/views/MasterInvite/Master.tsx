import React from "react";

import { SideBar } from "../../components/CommonMenu/SideBar/SideBar";
import { Admin } from "../../components/CommonMenu/RightSideMenu/Admin";

import './master.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Master = () => {
    return (
        <React.Fragment>
            <Admin />
            <SideBar />
    
            <div className="main-content">
                <h1>Thông báo mời thầu</h1>
            </div>
            <div className="filter">
                <div className="filter-search">
                    <input type="text" placeholder= "Nhập nội dung tìm kiếm..."/>
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFX0lEQVR4nO2af2hVZRjHv99zb9Pcdu8mTU0wf2QpakIh0V8RJSSCiU1BhGg7MynJFIWQINu0ECqzMkTU3TsQsR/LMkOESv+TiDKQzEAhp7aUydy929Rt977f/vDc3bPrmvds7myr84Fx7/M87/O+3/twznve990BAgICAgICAgIC/p9wIMmlq/SAUliaEo62xfm7p+RqWZEGrACAZBz7AcpLelGlZoWJBQyj/tpuXvA0tgurv4kAYFL6StC2EPUDquWpr0gDVpDaR2pfxL5ViLyplhWijgnaZlI66Ck3hwEVAMCDzueE0kYUexqYZnpWhHnIS64z1njHnN5X2zvqGEjyf4GgAEMtYKgJCjDUAoaa/30Bwn4POP4FFd4MY50gO+MTaEcqZQqI7VdjbPVTj69XQNTWtJv36CSotwFMcoUmkarpgk4VV2imn5p8K8DEVRoD6AiAh11u4/xlmGJZOlK2WkV+6fKtAO1deBXADMdMC9xkUhxnUhwn8S0AaSc2tfMG1vily785gOpe7wv6KBmztriimyN2upTgOqfFcwC2+iHLpytABDArY1HW/twWhMtH+DYPDM1jMHT7NlxmYFvz/uJTASgAZzKWjLl9+2u5fMIf/9ZT1NZ8k9LnLldx1Db1kSo93h9lPq4DeADQXAAguDZiq4Wj8AkA6CbWEHJNfPzm9nwxYpv3Aa3PCVgAyiktidramIjxPS+qfLsFCsP4GMBZxwwR2owOXUWHrpKqARByYucL7sWO3PwSG+sJ5v74lOu7BejdSJU8Ha74VoDG3bwuciGAcznjuzU0pC0ubNrJNndupEpjBdV0O4Tv0hZnJWIsCIU4B8DxTIjSNqzRqHx1+ToJJmt5rmA0HxW4CcBfGb+ARkI1oQ7ObdvLM7l5lsFiAIWOeba4jYtvtaOa9/D06C4uAnDeiU+ItOPpfDX5/hRo2sm2ZIxbCO3NitCelliounk/k73liGa2yzp46QvecMev7GO7oK8zNonZyJORsRsU3CfGvWq2XH72bN8nI6IAhOU6cueSW/uKLGWrVSRwccY2xOl8+x4RBTAWDgFod8zp7SkdGvuSZqNaVmmFHum8ocMAJgMAgb+TY7KT4p0YEQVI1rKZ4psu1/x0Wr9FL6jDWDoF4qlMwIgbsIMd+fY9IgoAAC1xbgeUu8hxL+TSBDck4zzgpd9+FaBkpZ6P2uYXANGMz6T0Y7RSK52Nz6CQiIVeh/gMgKMutwFQD/CJlhg/8Nqn5wJEKtMfyuhLAI/lhGaC2hO19RmqNWhL7EScx6wwl7tcrYmYtSwR48/96c9TAaK2Xia51uUSgD+RPcwAgGXRi+ad/ogZCvIvQIVGA9qcMQmcIDk1EbOmpcX7CXzb3VZcd5+tiXdX6uCQdwGiFp4EUOaYrV2G5S21bACAtjibRnVxOYBLTrygi1h0d6UODnkXQOzxX9if2ut42R13lqPfd7eXcR9+DlvyLgANOl1mr6e2BIuy33u0H7bkPweE8KvLmhe1Nc8dLqnQFAALXF272w9b8i5AYi9OAjjlmCFAR0qq9GJJlSZHbZXL0nFkr4ymwrBrUhzGeHheU0Z6xaKOAygAUCaprpeGEvla425ev0saBxVP64DWOE9Y5FIAve7bAXQCXJ2s5acDl+YPnleC12p5OGU4A9JW9DiT0y4ZzknEuOsu6ht0+rUXaK/j5UQ89AayW1RYYWtjso5n+0gbloyY3eBgERRggPmZI+7L1ybC04sNRlb38biB5enWcca64pgDuu0G/qpsF8pTIRzt7Ti7b8SIjRUglKzFgX69Kgs8awH1zXFe9DZ2QEBAQEBAQEBAwD/fjNtu1jtcIwAAAABJRU5ErkJggg==" />
                        <p>Bộ lọc</p>
                    </button>
                </div>
            </div>
            <div className="detail-filter">
                <div className="each-detail-filter">
                    <label htmlFor="ma-dau-thau">Mã đấu thầu</label>
                    <input type="text" id="ma-dau-thau"></input>
                </div>
                <div className="each-detail-filter">
                    <label htmlFor="ma-hsmt">Mã HSMT</label>
                    <input type="text" id="ma-hsmt"></input>
                </div>
                <div className="each-detail-filter">
                    <label htmlFor="ten-goi-thau">Tên gói thầu</label>
                    <input type="text" id="ten-goi-thau"></input>
                </div>
                <div className="each-detail-filter">
                    <label htmlFor="tg-dong-thau">Thời gian đóng thầu</label>
                    <input type="date" id="tg-dong-thau"></input>
                </div>
                <div className="each-detail-filter">
                    <label htmlFor="trang-thai">Trạng thái</label>
                    <input type="select" id="trang-thai"></input>
                </div>
                <div className="each-detail-filter">
                    <label htmlFor="pt-dau-thau">Phương thức đấu thầu</label>
                    <input type="select" id="pt-dau-thau"></input>
                </div>
            </div>
            <div className="table-content">
                
            </div>
        </React.Fragment>
    );
}
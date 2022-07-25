import React from 'react';
import Select from 'react-select';
import { Divider, Steps } from 'antd';
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons';


import { Admin } from '../../components/CommonMenu/RightSideMenu/Admin';
import { SideBar } from '../../components/CommonMenu/SideBar/SideBar';
import './detail.css';
import { handleInputChange } from 'react-select/dist/declarations/src/utils';
import { Link } from 'react-router-dom';

export const Detail = () => {
    const options = [
        {value: '1', label: "THÔNG TIN CHI TIẾT"},
        {value: '2', label: "TIÊU CHÍ ĐÁNH GIÁ"},
        {value: '3', label: "HỒ SƠ DỰ THẦU"},
        {value: '4', label: "LÀM RÕ HỒ SƠ MỜI THẦU"},
    ];
    const optionsOther = [
        {value: '1', label: "THÔNG BÁO MỜI THẦU"},
    ];
    const optionsHis = [
        {value: '1', label: "LỊCH SỬ"},
    ];
    const {Step} = Steps;
    console.log(options);

    const handleSend = () => {
        
    }

    const stChange = () => {

    }

    return (
        <>
            <Admin />
            <SideBar />
            <div className="main-content">
                <h1>Thông tin mời thầu</h1>
            </div>
            <div className="main-container">
                <div className="detail-content">
                    <div className="detail-content-1">
                        <div className="detail-content-1-1">
                            <Select
                                defaultValue={options[0]}
                                // components={{ Control: ControlComponent }}
                                name="select-options"
                                options={options}
                                // getOptionLabel={(option) => option.label}
                                // getOptionValue={(option) => option.value}
                                // value={selOption}
                                // onChange={(option) => onChangeRowsPerPage(option)} // this returns (option) => option.phaseText) as a string
                            />
                        </div>
                        <div className="detail-content-1-2">
                            <div>
                                <label htmlFor="DT_001">Mã đấu thầu</label>
                                <input value="DT_001" id="DT_001" onChange={stChange}></input>
                            </div>
                            <div>
                                <label htmlFor="HSMT_001">Mã HSMT</label>
                                <input value="HSMT_001" id="HSMT_001" onChange={stChange}></input>
                            </div>
                        </div>
                        <div className="detail-content-1-3">
                            <label htmlFor="mua-sam-an-uong">Tên gói thầu</label>
                            <input value="Gói thầu mua sắm laptop" type="select" id="mua-sam-an-uong" onChange={stChange}></input>
                        </div>
                        <div className="detail-content-1-4">
                            <div className="detail-content-1-4-1">
                                    <Select
                                        defaultValue={optionsOther[0]}
                                        // components={{ Control: ControlComponent }}
                                        name="select-options"
                                        options={optionsOther}
                                        // getOptionLabel={(option) => option.label}
                                        // getOptionValue={(option) => option.value}
                                        // value={selOption}
                                        // onChange={(option) => onChangeRowsPerPage(option)} // this returns (option) => option.phaseText) as a string
                                    />
                            </div>
                            <div className="detail-content-1-4-2">
                                <div>
                                    <h5>Bên mời thầu</h5>
                                    <div className="detail-ben-moi-thau">
                                        <div className="detail-ten-ben-mt">
                                            <label htmlFor="ten-ben-mt">
                                                Tên
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="ten-ben-mt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="detail-dc-ben-mt">
                                            <label htmlFor="dia-chi-ben-mt">
                                                Địa chỉ
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="dia-chi-ben-mt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="dien-thoai-ben-mt">
                                            <label htmlFor="dien-thoai-ben-mt">Điện thoại</label>
                                            <input id="dien-thoai-ben-mt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="fax-ben-mt">
                                            <label htmlFor="fax-ben-mt">Fax</label>
                                            <input id="fax-ben-mt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="detail-ms-thue-ben-mt">
                                            <label htmlFor="ms-thue-ben-mt">Mã số thuế</label>
                                            <input id="ms-thue-ben-mt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5>Địa điểm phát hành HSMT</h5>
                                    <div className="detail-dd-phat-hanh-hsmt">
                                        <div className="detail-ten-phu-trach">
                                            <label htmlFor="ten-phu-trach">
                                                Tên người phụ trách
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="ten-phu-trach" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="detail-dia-chi-pt"> 
                                            <label htmlFor="dia-chi-pt">
                                                Địa chỉ
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="dia-chi-pt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="detail-dt-pt">
                                            <label htmlFor="dt-pt">Điện thoại</label>
                                            <input id="dt-pt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="detail-fax-pt">
                                            <label htmlFor="fax-pt">Fax</label>
                                            <input id="fax-pt" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5>Thông tin mời thầu</h5>
                                    <div className="detail-tt-moi-thau">
                                        <div className="detail-tt-moi-thau-1">
                                            <div className="detail-time-phat-hanh">
                                                <label htmlFor="time-phat-hanh">
                                                    Thời gian phát hành HSMT
                                                    <span className="note-important">*</span>
                                                </label>
                                                <input id="time-phat-hanh" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                            </div>
                                            <div className="detail-time-bd-nop-hs can-margin-left">
                                                <label htmlFor="time-bd-nop-hs">
                                                    Thời gian bắt đầu nộp hồ sơ
                                                    <span className="note-important">*</span>
                                                </label>
                                                <input id="time-bd-nop-hs" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                            </div>
                                            <div className="detail-time-dong-thau can-margin-left">
                                                <label htmlFor="time-dong-thau">
                                                    Thời điểm đóng thầu
                                                    <span className="note-important">*</span>
                                                </label>
                                                <input id="time-dong-thau" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                            </div>
                                        </div>
                                        <div className="detail-tt-moi-thau-2">
                                            <div className="detail-time-mo-thau">
                                                <label htmlFor="time-mo-thau">
                                                    Thời điểm mở thầu
                                                    <span className="note-important">*</span>
                                                </label>
                                                <input id="time-mo-thau" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                            </div>
                                            <div className="detail-time-bd-cham-thau can-margin-left">
                                                <label htmlFor="time-bd-cham-thau">
                                                    Thời điểm bắt đầu chấm thầu
                                                    <span className="note-important">*</span>
                                                </label>
                                                <input id="time-bd-cham-thau" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                            </div>
                                            <div className="detail-time-kt-cham-thau can-margin-left">
                                                <label htmlFor="time-kt-cham-thau">
                                                    Thời điểm kết thúc chấm thầu
                                                    <span className="note-important">*</span>
                                                </label>
                                                <input id="time-kt-cham-thau" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thong-tin-khac">
                                    <h5>Thông tin khác</h5>
                                    <div className="detail-tt-khac">
                                        <div>
                                            <label htmlFor="ht-dau-thau">
                                                Hình thức đấu thầu
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="ht-dau-thau" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="can-margin-left">
                                            <label htmlFor="ht-nop">
                                                Hình thức nộp
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="ht-nop" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                        <div className="can-margin-left">
                                            <label htmlFor="pt-lc">
                                                Phương thức lựa chọn nhà thầu
                                                <span className="note-important">*</span>
                                            </label>
                                            <input id="pt-lc" placeholder="Hiển thị theo thông tin HSMT" onChange={stChange}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="history">
                    <div className="history-1">
                        <button>
                            LỊCH SỬ
                            <DownOutlined />
                        </button>
                    </div>
                    <div className="history-2">
                        <Steps progressDot current={4} direction="vertical">
                            <Step title="Gửi hồ sơ" description="A" />
                            <Step title="Gửi hồ sơ" description="B" />
                            <Step title="Gửi hồ sơ" description="C" />
                        </Steps>
                    </div>
                </div>
                <div className="select-content">
                    <div className="opt-select-1">
                        <button>
                            THÔNG TIN CHI TIẾT
                            <CaretDownOutlined />
                        </button>
                    </div>
                    <Divider />
                    <div className="opt-select-2">
                        <button>
                            TIÊU CHÍ ĐÁNH GIÁ
                            <CaretDownOutlined />
                        </button>
                    </div>
                    <Divider />
                    <div className="opt-select-3">
                        <button>
                            HỒ SƠ DỰ THẦU
                            <CaretDownOutlined />
                        </button>
                    </div>
                    <Divider />
                    <div className="opt-select-4">
                        <button>
                            LÀM RÕ HỒ SƠ MỜI THẦU
                            <CaretDownOutlined />
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-detail">
                <div>
                    <Steps current={0} percent={0}>
                        <Step title="Nộp hồ sơ" />
                        <Step title="Đóng thầu" />
                        <Step title="Mở thầu" />
                        <Step title="Chăm thầu" />
                        <Step title="Hoàn thành" />
                    </Steps>
                </div>
                <div className="button-remote">
                    <button className="btn-1">Làm rõ HSMT</button>
                    <button className="btn-2">
                        <Link to="/dau-thau/dau-thau-master">
                            Gửi hồ sơ
                        </Link>
                    </button>
                    <button className="btn-3">
                        <Link to="/dau-thau/dau-thau-master">
                            Đóng
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}
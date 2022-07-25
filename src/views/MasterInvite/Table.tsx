import React, { PropsWithChildren } from "react";
import {useState, useEffect} from 'react';
import { ActionMeta, InputActionMeta, SingleValue } from "react-select";
import Select, { components, ControlProps } from 'react-select';
import {Tag} from 'antd';

import {data} from "./Master";
import { Link, Route, Routes } from "react-router-dom";
import { Detail } from "../DetailInvite/Detail";
// import {selOption, onChangeRowsPerPage} from "../../services/Table";

const options = [
    { value: '4', label: '4' },
    { value: '6', label: '6' },

];

export interface option {
    value: String;
    label: String;
};

// Xác định số trang hiển thị dựa trên data và số phần tử được hiện
const calculateRange = 
    (data: {}[], rowsPerPage: number)
    :number[] => {
    const range:number[] = [];
    const num = Math.ceil(data.length/ rowsPerPage);
    let i = 1;
    for(let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

//Phân chia dữ liệu
const sliceData = (data: {}[], page: number, rowsPerPage: number) => {
    // console.log(data.slice((page-1) * rowsPerPage, page * rowsPerPage));
    return data.slice((page-1) * rowsPerPage, page * rowsPerPage);
}

const useTable = (data: {}[], page: number, rowsPerPage: number) => {
    const test1:number[] = []; 
    const test2: any[] | (() => any[]) = []; 
    const [tableRange, setTableRange] = useState(test1);
    const [slice, setSlice] = useState(test2);

    // console.log(slice);

    useEffect(() => {
        const range:number[] = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice, rowsPerPage]);

    // console.log(slice);

    return {slice, range: tableRange};
}

export const Dropdown = (props: any) => {
    const {getId} = props;
    // const {update} = props.update;
    // console.log(getId);

    // update(getId);

    const detailPath = "dau-thau-detail-" + getId as string;
    const routePath = "dau-thau/dau-thau-master/dau-thau-detail" + getId as string;
    return (
        <div className="dropdown-rmd">
            <ul>
                <Link to={detailPath} >
                    <li>Xem</li>
                </Link>
            </ul>
        </div>
    );
}

interface getId {
    getId: any;
};

function Button(props: any) {
    const [visibleRmd, setVisibleRmd] = useState(false);

    const {getId} = props;
    // const { update } = props.update;
    // console.log(getId);

    const id: string = "button-rmd-" + getId as string;

    useEffect(() => {
    }, []);

    const handleClick = (e: any) => {
        // console.log(visibleRmd);
        const newVisibleRmd = visibleRmd === true ? false : true;
        setVisibleRmd(newVisibleRmd);
        // console.log(e.target.className);
    };

    return (
        <>
            <button onClick={handleClick} className={id}>...</button>
            {visibleRmd && <Dropdown getId={getId} />}
        </>
    );
}

//Phan chia trang
const TableFooter = ({ range, setPage, page, slice, setRowsPerPage, datas}: { range: number[]; setPage: any; page: number; slice: any[]; setRowsPerPage: any; datas: {}[]}) => {
    const [selOption, setSelOption] = useState({
        value: "4",
        label: "4"
    });

    useEffect(() => {
        if(slice.length < 1 && page !== 1) {
            setPage(page-1);
        }
        switch(selOption.value) {
            case "6":
                setRowsPerPage(6);
                break;
            case "8":
                setRowsPerPage(8);
                break;
            default:
                setRowsPerPage(4);
                break;
        }
    }, [slice, page, setPage, selOption]);

    const onChangeRowsPerPage = (option: any) => {
        // switch(selOption.value) {
        //     case "6":
        //         setRowsPerPage(6);
        //         break;
        //     case "8":
        //         setRowsPerPage(8);
        //         break;
        //     default:
        //         setRowsPerPage(4);
        //         break;
        // }
        setSelOption(option);
        // console.log(option);
    }

    let testPage = page;

    return (
        <div className="table-footer">
            <div className="total">{datas.length} Kết quả</div>
            <div className="button-page">
                <button
                    onClick={() => {
                        if(testPage - 1 > 0) setPage(testPage - 1);
                    }} 
                >&laquo;</button>
                {range.map((el, index) => (
                    <button
                    key={index}
                    className={` ${
                        page === el ? 'activeButton' : 'inactiveButton'
                    }`}
                    onClick={() => {
                        testPage = el;
                        setPage(el);
                    }}
                    >
                    {el}
                    </button>
                ))}
                <button
                    onClick={() => {
                        if(testPage + 1 <= range.length) setPage(testPage + 1);
                    }} 
                >&raquo;</button>
                <div className="select-element">
                    <Select
                        defaultValue={options[0]}
                        // components={{ Control: ControlComponent }}
                        isSearchable
                        name="rowsPerPage"
                        options={options}
                        // getOptionLabel={(option) => option.label}
                        // getOptionValue={(option) => option.value}
                        value={selOption}
                        onChange={(option) => onChangeRowsPerPage(option)} // this returns (option) => option.phaseText) as a string
                    />
                    <span>Kết quả</span>
                </div>
            </div>
            {/* <div className="select-element">
                <Select
                defaultValue={options[0]}
                // components={{ Control: ControlComponent }}
                isSearchable
                name="rowsPerPage"
                options={options}
                // getOptionLabel={(option) => option.label}
                // getOptionValue={(option) => option.value}
                value={selOption}
                onChange={(option) => onChangeRowsPerPage(option)} // this returns (option) => option.phaseText) as a string
                />
                <span>Kết quả</span>
            </div> */}
        </div>
      );
};

//Table 
export interface TableProps {
    datas: data[];
    // rowsPerPage: number;
}

export const Table = (props: any) => {
    const { datas } = props;

    // update(1);
    // const {rowsPerPage} = props;
    // console.log(datas);

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const { slice, range } = useTable(datas, page, rowsPerPage);
    return (
        <>
            <TableFooter datas={datas} range={range} slice={slice} setPage={setPage} page={page} setRowsPerPage={setRowsPerPage}/>

            <table className="table">
                <thead className="tableRowHeader">
                    <tr>
                        <th className="tableHeader">Mã đấu thầu</th>
                        <th className="tableHeader">Người phụ trách</th>
                        <th className="tableHeader">Mã HSMT</th>
                        <th className="tableHeader">Gọi thầu</th>
                        <th className="tableHeader">Phương thức đấu thầu</th>
                        <th className="tableHeader">Thời gian đóng thầu</th>
                        <th className="tableHeader">&nbsp;</th>
                        <th className="tableHeader">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el: any) => (
                        <tr className="tableRowItems" key={el.id}>
                            <td className="tableCell table-item-id">
                                {el.id}
                                <p>Mã đấu thầu</p>
                            </td>
                            <td className="tableCell">
                                {el.name}
                                <p>admin@email.com</p>
                            </td>
                            <td className="tableCell table-mahsmt">
                                {el.capital}
                                <p>MS HSMT</p>
                            </td>
                            <td className="tableCell">
                                {el.language}
                                <p>Tên gói thầu</p>
                            </td>
                            <td className="tableCell">
                                st
                                <p>Phương thức đấu thầu</p>
                            </td>
                            <td className="tableCell">
                                st
                                <p>Thời gian đóng thầu</p>
                            </td>
                            <td className="tableCell">
                                <Tag color="blue">Đóng thầu</Tag>
                            </td>
                            <td className="tableCell">
                                <Button getId={el.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
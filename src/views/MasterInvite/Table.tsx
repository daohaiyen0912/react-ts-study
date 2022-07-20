import React, { PropsWithChildren } from "react";
import {useState, useEffect} from 'react';

import {data} from "./Master";


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
    console.log(data.slice((page-1) * rowsPerPage, page * rowsPerPage));
    return data.slice((page-1) * rowsPerPage, page * rowsPerPage);
}

const useTable = (data: {}[], page: number, rowsPerPage: number) => {
    const test1:number[] = []; 
    const test2: any[] | (() => any[]) = []; 
    const [tableRange, setTableRange] = useState(test1);
    const [slice, setSlice] = useState(test2);

    console.log(slice);

    useEffect(() => {
        const range:number[] = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);

    return {slice, range: tableRange};
}

//Phan chia trang
const TableFooter = ({ range, setPage, page, slice }: { range: number[]; setPage: any; page: number; slice: any[]; }) => {
    useEffect(() => {
        if(slice.length < 1 && page !== 1) {
            setPage(page-1);
        }
    }, [slice, page, setPage]);
    return (
        <div>
          {range.map((el, index) => (
            <button
              key={index}
              className={` ${
                page === el ? 'activeButton' : 'inactiveButton'
              }`}
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          ))}
        </div>
      );
};

//Table 
export interface TableProps {
    datas: data[];
    rowsPerPage: number;
}

export const Table = (props: PropsWithChildren<TableProps>) => {
    const { datas } = props;
    const {rowsPerPage} = props;
    // console.log(datas);

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(datas, page, rowsPerPage);

    console.log(slice);
    return (
        <>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />

            <table className="table">
                <thead className="tableRowHeader">
                    <tr>
                        <th className="tableHeader">Mã đấu thầu</th>
                        <th className="tableHeader">Người phụ trách</th>
                        <th className="tableHeader">Mã HSMT</th>
                        <th className="tableHeader">Gọi thầu</th>
                        <th className="tableHeader">Phương thức đấu thầu</th>
                        <th className="tableHeader">Thời gian đóng thầu</th>
                        <th className="tableHeader"></th>
                        <th className="tableHeader"></th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el: any) => (
                        <tr className="tableRowItems" key={el.id}>
                        <td className="tableCell">{el.name}</td>
                        <td className="tableCell">{el.capital}</td>
                        <td className="tableCell">{el.language}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
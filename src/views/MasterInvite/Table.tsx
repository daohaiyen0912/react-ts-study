import React from "react";
import {useState, useEffect} from 'react';

const data = [
    {
        id: 1,
        name: "Poland",
        language: "Polish",
        capital: "Warsaw",
      },
      {
        id: 2,
        name: "Bulgaria",
        language: "Bulgarian",
        capital: "Sofia",
      },
      {
        id: 3,
        name: "Hungary",
        language: "Hungarian",
        capital: "Budapest",
      },
      {
        id: 4,
        name: "Moldova",
        language: "Moldovan",
        capital: "Chișinău",
      },
      {
        id: 5,
        name: "Austria",
        language: "German",
        capital: "Vienna",
      },
      {
        id: 6,
        name: "Lithuania",
        language: "Lithuanian",
        capital: "Vilnius",
      },
];

// Xác định số trang hiển thị dựa trên data và số phần tử được hiện
const calculateRange = 
    (data: [], rowsPerPage: number)
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
const sliceData = (data: [], page: number, rowsPerPage: number) => {
    return data.slice((page-1) * rowsPerPage, page * rowsPerPage);
}

const useTable = (data: [], page: number, rowsPerPage: number) => {
    const test1:number[] = []; 
    // const test2:number[] = []; 
    const [tableRange, setTableRange] = useState(test1);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range:number[] = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);
}

export const Table = (props: any) => {
    return (
        <React.Fragment>
            
        </React.Fragment>
    );
};
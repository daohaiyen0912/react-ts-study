import { useState } from "react";

import {option} from "../views/MasterInvite/Table";

export const [selOption, setSelOption] = useState({
    value: "4",
    label: "4"
});



export const onChangeRowsPerPage = (option: any) => {
    setSelOption(option);
    // console.log(option);
}
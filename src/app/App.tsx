import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// import reactLogo from '../assets/react.svg'
import { DauThau } from '../components/DauThau';
import { Master } from '../views/MasterInvite/Master';
import '../assets/css/App.css'
import { Detail } from '../views/DetailInvite/Detail';
import { Dropdown } from '../views/MasterInvite/Table';
// import { getIDfor } from '../views/MasterInvite/Table';
// import '../assets/css/index.css'


function App(this: any) {
  const [count, setCount] = useState(0)
  // console.log(count);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="dau-thau" element={<DauThau />} />
          <Route path="dau-thau/dau-thau-master/" element={<Master update={setCount}/>}/>
          <Route path="dau-thau/dau-thau-master/*" element={<Detail getId={count}/>}/>
          {/* <Route path="dau-thau/dau-thau-detail" element={<Detail />}/> */}
        </Routes>
      </Router>

    </React.Fragment>
  )
}

export default App

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
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<DauThau />} />
          <Route path="dau-thau-master/" element={<Master />}/>
          <Route path="dau-thau-master/*" element={<Detail />}/>
          {/* <Route path="dau-thau/dau-thau-detail" element={<Detail />}/> */}
        </Routes>
      </Router>

    </React.Fragment>
  )
}

export default App

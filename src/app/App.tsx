import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import reactLogo from '../assets/react.svg'
import { DauThau } from '../components/DauThau';
import { Master } from '../views/MasterInvite/Master';
import '../assets/css/App.css'
import { Detail } from '../views/DetailInvite/Detail';
// import '../assets/css/index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="dau-thau" element={<DauThau />} />
          <Route path="dau-thau/dau-thau-master" element={<Master />}/>
          <Route path="dau-thau/dau-thau-detail" element={<Detail />}/>
        </Routes>
      </Router>

    </React.Fragment>
  )
}

export default App

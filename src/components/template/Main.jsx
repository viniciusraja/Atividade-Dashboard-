import React from 'react';

import DoughnutChart from './mainComponents/DoughnutChart' 
import AreaChart from './mainComponents/AreaChart' 
import TotalComponents from './mainComponents/TotalComponents' 
import './Main.css';



export default props =>
    <>
    <main className="content container-fluid p-sm-5 p-0">
       <div className="row col-12 p-0 m-0">

       <div className="d-flex row col-12 justify-content-center p-0">
        <TotalComponents />
       </div>
        <div className="charts row col-12 d-flex justify-content-between p-0">
              <div className="col-8 p-0">
              <AreaChart />
              </div>
              <div className=" d-flex justify-content-end col-4  p-0">
              <DoughnutChart/>
              </div>
        </div>
       </div>
    </main>        
    </>


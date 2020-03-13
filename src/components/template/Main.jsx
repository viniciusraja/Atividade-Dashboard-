import React from 'react';

import DoughnutChart from './mainComponents/DoughnutChart' 
import AreaChart from './mainComponents/AreaChart' 
import TotalComponents from './mainComponents/TotalComponents' 
import './Main.css';



export default props =>
    <>
    <main className="content row container-fluid p-5">
       <div className="d-flex col-12 justify-content-center">
        <TotalComponents />
       </div>
       {/*  <div className="charts row col-12">
              <div className="col-8 p-0">
              <AreaChart />
              </div>
              <div className="d-flex col-4 justify-content-end p-0">
              <DoughnutChart className="col-4 p-0"/>
              </div>
        </div> */}
    </main>        
    </>


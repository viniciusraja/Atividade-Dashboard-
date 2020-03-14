import React from 'react';

import TotalComponents from '../mainComponents/TotalComponents' 
import AreaChart from '../mainComponents/AreaChart' 
import DoughnutChart from '../mainComponents/DoughnutChart' 
import CostumersComponent from '../mainComponents/CostumersComponent' 
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
        <div className="CostumersContainer row col-12 p-0 mt-5">
              <CostumersComponent/>
        </div>
       </div>
    </main>        
    </>


import React from 'react';

import TotalComponents from '../mainComponents/TotalComponents' 
import AreaChart from '../mainComponents/AreaChart' 
import DoughnutChart from '../mainComponents/DoughnutChart' 
import CostumersComponent from '../mainComponents/CostumersComponent' 
import './Main.css';



export default props =>
    <>
    <main className="content container-fluid p-sm-5 p-0">

       <div className=" row p-0 m-0 justify-content-lg-between justify-content-center ">
        <TotalComponents className="col-12"/>
       </div>
        <div className="charts row lg-col justify-content-lg-between justify-content-center p-0 m-0">
              
              <AreaChart className="col-md-8" />
              
              
              <DoughnutChart className=" justify-content-end col-md-3"/>
              
        </div>
        <div className="CostumersContainer row p-0 m-0 mt-5">
              <CostumersComponent className="col-12"/>
        </div>
    </main>        
    </>


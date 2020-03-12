import React from 'react';

import DoughnutChart from './mainComponents/DoughnutChart' 
import AreaChart from './mainComponents/AreaChart' 
import './Main.css';

export default props =>
    <>
    <main className="content">
        <div className="charts d-flex">
              <div className="col-8">
              <AreaChart />
              </div>
              <div className="col-4">
              <DoughnutChart className="col-4"/>
              </div>
        </div>
    </main>        
    </>


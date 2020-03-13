import './TotalComponents.css';
import React from 'react';

import { FaStore } from 'react-icons/fa'
import { GoTag } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";

export default props =>

    <div className="totalComponent row col-12 justify-content-between  mb-5 ">
            <div className=" col-md-3 col-12 d-flex  justify-content-center p-0">
               <div className="totalCard col-12 d-flex align-items-center justify-content-between">
                <span >
                  <h1 className="totalTitle">TOTAL SALES</h1>
                  <p className="totalSubtitle text-muted">21 324</p>
                </span>
               <icon ><FaStore /></icon>
               </div> 
            </div>
            <div className=" col-md-3 col-12 d-flex  justify-content-center p-0">
              <div className="totalCard col-12 d-flex align-items-center justify-content-between">
                <span >
                  <h1 className="totalTitle">TOTAL INCOME</h1>
                  <p className="totalSubtitle text-muted">$ 211 324</p>
                </span>
                <icon ><GoTag /></icon>
              </div> 
            </div>
            <div className=" col-md-3 col-12 d-flex justify-content-center p-0">
              <div className="totalCard col-12 d-flex align-items-center justify-content-between">
                <span >
                  <h1 className="totalTitle">TOTAL SALES</h1>
                  <p className="totalSubtitle text-muted">65 2234</p>
                </span>
                <icon ><FiMonitor /></icon>
              </div>
            </div>
            
    </div>        



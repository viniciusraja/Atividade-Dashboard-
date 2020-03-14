import './TotalComponents.css';
import React from 'react';

import { FaStore } from 'react-icons/fa'
import { GoTag } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";

export default props =>

    <div className="totalComponent row col-12 justify-content-between m-0 mb-5 p-0">
            <div className=" totalCard d-flex  justify-content-center mt-5 p-5 p-md-0">
               <div className="  d-flex col-md-8 p-0 col-12  align-items-center justify-content-between ">
                <span >
                  <h1 className="totalTitle">TOTAL SALES</h1>
                  <p className="totalSubtitle text-muted">21 324</p>
                </span>
               <div className="totalIcon"><FaStore /></div>
               </div> 
            </div>
            <div className="totalCard  d-flex  justify-content-center mt-5 p-5 p-md-0">
              <div className="  d-flex  col-md-8 p-0 col-12 align-items-center justify-content-between">
                <span >
                  <h1 className="totalTitle">TOTAL INCOME</h1>
                  <p className="totalSubtitle text-muted">$ 211 324</p>
                </span>
                <div className="totalIcon"><GoTag /></div>
              </div> 
            </div>
            <div className="totalCard  d-flex justify-content-center mt-5 p-5 p-md-0">
              <div className="  d-flex  col-md-8 p-0 col-12 align-items-center justify-content-between">
                <span >
                  <h1 className="totalTitle">TOTAL SALES</h1>
                  <p className="totalSubtitle text-muted">65 2234</p>
                </span>
                <div className="totalIcon"><FiMonitor /></div>
              </div>
            </div>
            
    </div>        



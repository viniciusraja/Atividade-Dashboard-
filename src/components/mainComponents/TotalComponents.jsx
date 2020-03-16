import "./TotalComponents.css";
import React from "react";

import { FaStore } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";

export default class TotalComponents extends React.Component {
  render() {
    return (
      <div className="totalComponent row col-12 justify-content-between m-0 mb-5 p-0">
        <div
          className={
            this.openSales
              ? "opened"
              : "totalCard d-flex  justify-content-center mt-5 p-5 p-md-0"
          }
        >
          <div className="  d-flex col-md-8 p-0 col-12  align-items-center justify-content-between ">
            <span>
              <h1 className="totalTitle">TOTAL SALES</h1>
              <p className="totalSubtitle ">21 324</p>
            </span>
            <div className="totalIcon">
              <FaStore />
            </div>
          </div>
        </div>
        <div className="totalCard  d-flex  justify-content-center mt-5 p-5 p-md-0">
          <div className="  d-flex  col-md-8 p-0 col-12 align-items-center justify-content-between">
            <span>
              <h1 className="totalTitle">TOTAL INCOME</h1>
              <p className="totalSubtitle ">$ 211 324</p>
            </span>
            <div className="totalIcon">
              <GoTag />
            </div>
          </div>
        </div>
        <div className="totalCard  d-flex justify-content-center mt-5 p-5 p-md-0">
          <div className="  d-flex  col-md-8 p-0 col-12 align-items-center justify-content-between">
            <span>
              <h1 className="totalTitle">TOTAL VIEWS</h1>
              <p className="totalSubtitle ">65 2234</p>
            </span>
            <div className="totalIcon">
              <FiMonitor />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

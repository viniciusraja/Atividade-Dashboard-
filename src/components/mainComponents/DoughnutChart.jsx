import "./DoughnutChart.css";

import React, { Component } from "react";
import { Chart } from "../../../node_modules/primereact/chart";

export default class DoughnutChart extends Component {
  render() {
    const data = {
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        },
        legend: {
          display: true
        },
        cutoutPercentage: 50
      },

      labels: ["Electronics", "Furniture", "Toys"],
      datasets: [
        {
          data: [10, 6, 4],
          backgroundColor: ["#38a1b1", "#88f3e5", "#88D4BC"],
          hoverBackgroundColor: ["#168090", "#66c1c3", "#66b29a"],
          borderWidth: 10,
          borderColor: "#FFF",
          hoverBorderColor: "#FFF"
        }
      ]
    };

    return (
      <div className="doughnutChartContainer mb-5 ">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex col-12 p-0 ">
            <h4 className="doughnutTitle">TOP CATEGORIES</h4>
          </div>

          <div className="d-flex  content-section implementation pt-5 ">
            <Chart
              type="doughnut"
              data={data}
              options={data.options}
              style={{ width: 400, height: 300 }}
            />
          </div>
        </div>
      </div>
    );
  }
}

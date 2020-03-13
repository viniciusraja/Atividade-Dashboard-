import './DoughnutChart.css'

import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export default class DoughnutChart extends Component {

    render() {

        
        const data = {
         options:{
                legend: {
                    position: 'top',
                    
                },
                responsive: true,
            },
            
            labels: ['Electronics','Furniture','Toys'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    borderWidth:10,
                    borderColor:"#FFF",
                    hoverBorderColor:"#FFF",
                    

                }]
            };

        return (
            <div className="doughnutChartContainer ">
                <div className=" d-flex flex-column justify-content-center align-items-center">

                <div className="d-flex col-12 p-0 " >
                        <h4 className="doughnutTitle">TOP CATEGORIES</h4>
                </div>

                <div className="d-flex  content-section implementation pt-5 ">
                    <Chart type="doughnut" data={data}  options={data.options} style={{width:550}}/>
                </div>
                </div>

            </div>
        )
    }
}
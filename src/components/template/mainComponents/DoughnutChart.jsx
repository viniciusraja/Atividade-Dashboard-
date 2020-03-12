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
            <div className="doughnutChartContainer p-1">
                <div className="content-section introduction" >
                    <div className="feature-intro">
                        <h4 className="doughnutTitle">TOP CATEGORIES</h4>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="doughnut" data={data}  options={data.options}/>
                </div>

            </div>
        )
    }
}
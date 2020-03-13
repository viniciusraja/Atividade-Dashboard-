import './AreaChart.css'

import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export default class AreaChart extends Component {

    render() {


       
        const lineStylesData = {
            labels: ['Janeiro','Fevereiro','Março','Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {   
                    label:'Laptops',
                    data: [10, 30, 5, 40, 50, 20,60,20,40,50,60,50],
                    fill: true,
                    borderColor: '#42A5F5'
                },
                {
                    label:'Headsets',
                    data: [18, 28, 8, 58, 80, 60, 30, 53,5,45,7,50],
                    fill: true,
                    borderDash: [5, 5],
                    borderColor: '#66BB6A'
                },
                {
                    label:'Monitors',
                    data: [12, 51, 82, 63, 70, 45, 60,30,50,15,48,11],
                    fill: true,
                    borderColor: '#FFA726',
                },
                {
                    label:'Phones',
                    data: [5, 60, 30, 10, 50, 10, 35, 20,58,20,78,42],
                    fill: true,
                    borderColor: '#FFA726',
                }
            ]
        };
        const chartOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                xAxes:[{
                    display:false,
                    id: 'x-axis-1',                    
                }],
                yAxes: [{
                    type: 'linear',
                    display: false,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        }


        return (
            <div className="areaChartContainer">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h4 className="areaChartTitle">SALES PERFORMANCE</h4>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="line" data={lineStylesData} options={chartOptions} />
                </div>
            </div>
        )
    }
}
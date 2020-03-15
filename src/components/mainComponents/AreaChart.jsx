import './AreaChart.css'

import React, {Component} from 'react';
import {Chart} from '../../../node_modules/primereact/chart';

export default class AreaChart extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            Laptops:[100,200,350,100,390,820,680,1160,570,180,860,440],
            Headsets:[200,350,640,750,260,70,50,380,590,800,460,640],
            Monitors:[120,220,130,420,100,630,240,120,680,290,570,150],
            Phones:[10,20,30,40,50,560,40,20,80,90,70,50],
     };
     }

    render() {


       
        const lineStylesData = {
            labels: ['January','February','March','April', 'May', 'June','July', 'August', 'September', 'Octuber', 'November', 'December'],
            datasets: [
                {   
                    label:'Laptops',
                    data: this.state.Laptops,
                    fill: false,
                    borderColor: '#3bddf6',
                    borderRadius:'10px',
                    

                },
                {
                    label:'Headsets',
                    data: this.state.Headsets,
                    fill:false,
                    
                    borderColor: '#38a1b1',
                },
                {
                    label:'Monitors',
                    data: this.state.Monitors,
                    fill:false,
                    borderColor: '#88d4bc',
                },
                {
                    label:'Phones',
                    data: this.state.Phones,
                    fill:false,
                    borderColor: '#88f3e5',
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
            <div className="areaChartContainer d-none d-lg-block mb-5" >
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h4 className="areaChartTitle">SALES PERFORMANCE</h4>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="line" data={lineStylesData} options={chartOptions} style={{width:'868px'}}/>
                </div>
            </div>
        )
    }
}
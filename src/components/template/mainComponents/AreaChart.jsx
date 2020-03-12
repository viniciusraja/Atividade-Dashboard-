import './AreaChart.css'

import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export default class AreaChart extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#66BB6A',
                    borderColor: '#66BB6A'
                }
            ]
        };

       
        const lineStylesData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    borderColor: '#42A5F5'
                },
                {
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: true,
                    borderDash: [5, 5],
                    borderColor: '#66BB6A'
                },
                {
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#FFA726',
                    backgroundColor: '#FFCC80'
                }
            ]
        };

        return (
            <div className="areaChartContainer">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>LineChart</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="line" data={lineStylesData}  />
                </div>
            </div>
        )
    }
}
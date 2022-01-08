import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/logo.jpeg';
import {
    BarChart,
    Legend, Tooltip,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid, 
    ResponsiveContainer
} from 'recharts';

class Test1 extends Component {
    state = {
        plots: []
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/cindyiskandar/Demo-Repo/new_commit/half_hourly_data.json')
            .then(response => {
                var plots = response.data;
                plots.forEach(element => {
                    element.end_period = new Date(element.end_period)
                    element.end_period = element.end_period.toLocaleTimeString(navigator.language, {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                });
                this.setState({ plots });

            });
    }

    render() {
        return (
            <div>
                <img src={logo} alt="Logo" width="100" height="100" />
                <h1>Easter Bush Educational Solar Array Interface</h1>
                <p>The array has two strings of 12 panels each, connected to one inverter.
                The panels are tilted with an angle equal to 20 degrees and are oriented facing South.</p>
                <p>The calculated power generated by the array is:</p>
                <ResponsiveContainer width="95%" height={300}>
                <BarChart width={730} height={250} data={this.state.plots}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="end_period" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="AC_Power" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Test1;
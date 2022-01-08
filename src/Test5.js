import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
class Test5 extends Component {

    state ={
        value: null
    }

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/cindyiskandar/Demo-Repo/new_commit/carbon_data.json')
        .then(response =>  {
            var value = response.data;
            this.setState({ value });
        });
    }

    render() {
        return (
            <div>
                <p>The estimated carbon emissions saved by the array for the day are {this.state.value} gCO2.</p>
            </div>
        )
    }
}

export default Test5;




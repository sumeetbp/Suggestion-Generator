import React from 'react';
import axios from 'axios';          // To make a get request for the certain API

import './App.css';

class App extends React.Component {

    state = {                       //Global object that contains all the most important things related to that component
        advice: ''                  // Access advice in render
    };

    componentDidMount(){            //This executes exactly at the render of our component
        this.fetchAdvice();         //we require fetchAdvice method at initial of render so we call it in componentDidMount
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {           //using .then and .catch we get the response how we like
                const { advice } = response.data.slip;
                this.setState({ advice: advice });      //Update State
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        const { advice } = this.state;
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'> { advice } </h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span> Give me Advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
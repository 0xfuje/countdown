import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: '',
            endDate: '',
            timeLeft: '',
        }
    }
    componentDidMount() {
        
        this.tick = setInterval(() => {
            const currentMS = new Date().getTime();
            const endMS = new Date(2021, 8, 15, 11).getTime();
            const nCurrentDate = this.dateConverter(currentMS);
            const nEndDate = this.dateConverter(endMS);
            const nTimeLeft = this.dateConverter(endMS - currentMS);

            this.setState({ 
                currentDate: nCurrentDate,
                endDate: nEndDate,
                timeLeft: nTimeLeft
            });
        }, 990)
        
    }
    componentWillUnmount() {
        clearInterval(this.currentDate);
    }
    dateConverter(date) {
        const parsedDate = new Date(date);
        const seconds = Math.floor((parsedDate / 1000) % 60).toString().padStart(2, '0');
        const minutes = Math.floor((parsedDate / 1000 / 60) % 60).toString().padStart(2, '0');
        const hours = Math.floor((parsedDate / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
        return (`${hours}:${minutes}:${seconds}`)
    }
    render() {
        return (
            <div className='Counter'>
                <h1>{this.state.timeLeft}</h1>
            </div>
        )
    }
}

export default Counter;

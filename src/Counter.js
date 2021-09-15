import React, { Component } from 'react';
import CounterForm from './CounterForm';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: '',
            endDate: '',
            timeLeft: '',
            startIntervalID: '',
            isClockRunning: true
        }
        this.startCountdown = this.startCountdown.bind(this);
        this.pauseCountdown = this.pauseCountdown.bind(this);
        this.resumeCountdown = this.resumeCountdown.bind(this);
    }
    componentDidMount() {
        const startDate = new Date().getTime() + 60*60*1000;
        console.log(startDate);
        const startIntervalID = setInterval(() => this.tick(startDate), 1000);
        this.setState({ startIntervalID: startIntervalID });
    }
    componentWillUnmount() {
        clearInterval(this.state.startIntervalID);
    }
    tick(endMS) {
        const currentMS = new Date().getTime();
        const nCurrentDate = this.dateConverter(currentMS);
        const nEndDate = this.dateConverter(endMS);
        const nTimeLeft = this.dateConverter(endMS - currentMS);
        this.setState({ 
            currentDate: nCurrentDate,
            endDate: nEndDate,
            timeLeft: nTimeLeft
        });
    }
    dateConverter(date) {
        const parsedDate = new Date(date);
        const seconds = Math.floor((parsedDate / 1000) % 60).toString().padStart(2, '0');
        const minutes = Math.floor((parsedDate / 1000 / 60) % 60).toString().padStart(2, '0');
        const hours = Math.floor((parsedDate / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
        return (`${hours}:${minutes}:${seconds}`)
    }
    startCountdown(h, min) {
        clearInterval(this.state.startIntervalID);
        const currentMS = new Date().getTime();
        const hourToMS = h * 60 * 60 * 1000;
        const minToMS = min * 60 * 1000;
        const totalMS = currentMS + (hourToMS + minToMS);
        const startInterval = setInterval(() => this.tick(totalMS), 1000);
        this.setState({ startIntervalID: startInterval, isClockRunning: true })
    }
    pauseCountdown() {
        this.setState({ isClockRunning: false });
        clearInterval(this.state.startIntervalID);
    }
    resumeCountdown() {
        clearInterval(this.state.startIntervalID);
        const [ hour, min, sec ] = this.state.timeLeft.split(':');
        const currentMS = new Date().getTime();
        const hourToMS = hour * 60 * 60 * 1000;
        const minToMS = min * 60 * 1000;
        const secToMS = sec * 1000;
        const totalMS = currentMS + (hourToMS + minToMS + secToMS);
        const startInterval = setInterval(() => this.tick(totalMS), 1000);
        this.setState({ startIntervalID: startInterval, isClockRunning: true })
    }
    render() {
        return (
            <div className='Counter'>
                <CounterForm 
                    startCountdown={this.startCountdown} 
                    pauseCountdown={this.pauseCountdown}
                    resumeCountdown={this.resumeCountdown}
                    isClockRunning={this.state.isClockRunning}
                    timeLeft={this.state.timeLeft}
                />
                <h1>{this.state.timeLeft}</h1>
            </div>
        )
    }
}

export default Counter;

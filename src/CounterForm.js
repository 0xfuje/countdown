import React, { Component } from 'react'

class CounterForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hours: '',
            minutes: '',
            seconds: ''
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleResume = this.handleResume.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleResume(e) {
        e.preventDefault();
        this.setState({
            hours: '',
            minutes: ''
        })
        this.props.resumeCountdown();
    }
    handleStart(e) {
        e.preventDefault();
        this.props.startCountdown(this.state.hours, this.state.minutes);
        this.setState({
            hours: '',
            minutes: ''
        })
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    }
    handlePause(e) {
        e.preventDefault();
        this.props.pauseCountdown();
    }

    render() {
        console.log(this.props.isClockRunning);
        return (
            <form className='CounterForm'>
                <input name='hours' onChange={this.handleChange} className='CounterForm-hour' type="number" />
                : 
                <input name='minutes' onChange={this.handleChange} className='CounterForm-minute' type="number" />
                <button onClick={this.handleStart}>Start</button>
                {( this.props.isClockRunning
                    ? <button onClick={this.handlePause}>Pause</button>
                    : <button onClick={this.handleResume}>Resume</button>
                      )}
            </form>
        )
    }
}

export default CounterForm;

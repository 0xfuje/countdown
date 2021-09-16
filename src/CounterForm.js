import React, { Component } from 'react';
import './style/CounterForm.scss';

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
                <div className="CounterForm-inputs">
                    <input name='hours' min='0' max='9' onChange={this.handleChange} className='CounterForm-hour CounterForm-input' type="number" />
                    <span className="CounterForm-separator">:</span>
                    <input name='minutes' min='0' max='60' onChange={this.handleChange} className='CounterForm-minute CounterForm-input' type="number" />
                </div>
                <div className="CounterForm-buttons">
                    <button className='CounterForm-button' onClick={this.handleStart}>Start</button>
                    {( this.props.isClockRunning
                    ? <button className='CounterForm-button' onClick={this.handlePause}>Pause</button>
                    : <button className='CounterForm-button' onClick={this.handleResume}>Resume</button>
                    )}
                </div>
                
            </form>
        )
    }
}

export default CounterForm;

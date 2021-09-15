import React, { Component } from 'react'

class CounterForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hour: '',
             minute: ''
        }
    }
    
    render() {
        return (
            <form className='CounterForm'>
                <input name='hour' type="number" />
                <input name='minute' type="number" />
            </form>
        )
    }
}

export default CounterForm

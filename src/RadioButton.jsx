import React, { Component } from 'react'

class RadioButton extends Component {
    render() {
        return (
            
                <form action="#">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>
    </form>
        
        )
    }
}

export default RadioButton
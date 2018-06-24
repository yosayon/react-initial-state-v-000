import React from 'react'

export default class ToggleButton extends React.Component{
  constructor(){
    super();
    this.state = {
      isEnabled: false
    }
  }
  render(){
    return(
      <button className="toggle-button">
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}

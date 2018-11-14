import React , { Component } from 'react';

export default class Welcome extends Component {
  
  render () {
    // const obj = this.props.style;
    // const conbine =  Object.assign(style,obj);
    return (
      <div className='welcome' style={ this.props.style } > </div>
    )
  }
}
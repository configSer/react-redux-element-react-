import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addCount , addCountAsync , delCount } from "../../store/store";

@connect(state=>({num:state.counter}),{ addCount, delCount, addCountAsync})
class Second extends Component {
  render () {
    return (
      <div>
        <div>首页的数量是{this.props.num}</div>
      </div>
    )
  }
}

export default Second ;
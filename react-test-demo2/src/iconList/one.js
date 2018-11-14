import React , { Component } from 'react';
import { Table } from 'element-react';
import 'element-theme-default';
class One extends Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }
  
  render () {
    return (
      <div>
        <Table  />
      </div>
    )
  }
}

export default  One ;
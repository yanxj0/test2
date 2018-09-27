import React, { Component } from 'react';
import { connect } from 'dva';
import Columnchart from '../../../components/D3/columchart';

class chart extends Component{
    
    componentDidMount() {
        
    }
    render() {
        const data = this.props;
        return (
            <Columnchart data={data}/>
        );
    }
}

export default connect(({ D3 }) => ({
    D3,
  }))(chart);
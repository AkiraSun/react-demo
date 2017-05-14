'use strict';
import React, {Component,PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Hello from '../../components/Hello/Hello';
import * as actionCreate from '../../actions/index';


const HelloV = (props) => {
  const { dispatch } = props
  const HelloVProps = {
    dispatch,
    props
  }

  return (
    <div>
        <Hello { ...HelloVProps }>
        </Hello>
    </div>
  )
}

//state每次改变，mapStateToProps进行调用刷新
const mapStateToProps = state => {
  console.log('state:',state)
  return {msg:state.ch2en}
}

const mapDispatchToProps = dispatch => ({
  //传入compontes的props为新合并的actionCreate
  actionCreate: bindActionCreators(actionCreate, dispatch)

});

console.log('mapDispatchToProps',mapDispatchToProps())
export default connect(mapStateToProps, mapDispatchToProps)(HelloV);

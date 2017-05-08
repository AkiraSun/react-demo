'use strict';
import React, {Component,PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Hello from '../../components/Hello/Hello';
import * as actionCreate from '../../actions/index';


class HelloV extends Component {
  constructor(props) {
    console.log('props:',props);
    super(props);
  }
  componentDidMount(props) {
    console.log('props:',props);
  }
  componentWillMount(props) {
    console.log('props:',props);
  }

  render() {
    return (
      <div>
          <Hello actionCreate={this.props}>
          </Hello>
      </div>
    )
  }
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
// export default connect(function (state) {
//     console.log(state)
//     //这个地方是state是reducers/ch2en.js中传递过来的
//     //state.ch2en这个要根据reducers/ch2en.js定义的方法名来写不要盲目的复制
//     //msg是传递到Hello.jsx组件中的变量
//     return{
//         msg:state.ch2en
//     }
// },actionCreate)(Hello);

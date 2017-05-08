'use strict';
import React, {Component,PropTypes} from "react";

export default class Hello extends Component {
    constructor (props) {
      super(props)
    }

    // msgClickHandle = (data) => {
    //   // this.setState({
    //   //   activeKey: item.key
    //   // })
    //   console.log(this.props)
    //   const {toCH} = this.props
    //   this.props.actionCreate.actionCreate.toCH()
    // }
    render() {
        console.log('hellp',this.props);
        const {toCH,toEN} = this.props.actionCreate.actionCreate;
        console.log(toCH)
        const {msg} = this.props.actionCreate;
        return (
            <div>
                <button onClick={toCH}>翻译成中文</button>
                <p>{msg}</p>
                <button onClick={toEN}>翻译成英文</button>
            </div>
        )
    }
}

Hello.proTypes = {
    msg:PropTypes.string.isRequired,
    toCH:PropTypes.func.isRequired,
    toEN:PropTypes.func.isRequired,
}

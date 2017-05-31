'use strict';
import React, {Component,PropTypes} from "react";
import async from 'async'
import 'babel-polyfill'
import request from '../../utils/request'
export default class Hello extends Component {
    constructor (props) {
      super(props)
    }
    componentDidMount() {
      this.initData()
      this.f().then(v => console.log(v))
    }
    // async  getTitle(url) {
    //   let response = await fetch(url);
    //   let html = await response.text();
    //   return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    // }
    async  f() {
      return 'hello world';
    }
    initData() {
      const paramss = {
        "base64Data": "data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw=="
      }
      console.log(request('POST','upload/uploadBase64',paramss))
    }

    render() {
        console.log('hellp',this.props);
        const {toCH,toEN} = this.props.props.actionCreate;
        console.log(toCH)
        const {msg} = this.props.props;
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

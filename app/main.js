/**
 * Created by zeng on 2016/5/9.
 */
// let React = require('react');
// let ReactDOM = require('react-dom');
import React from 'react';
import { render } from 'react-dom';
// import  AppComponent  from './components/Tab1';
import Root from './containers/Root'
// ReactDOM.render(<AppComponent />, document.getElementById('content'));

render(
  <Root />,
  document.getElementById('content')
);

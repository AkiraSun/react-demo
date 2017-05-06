/**
 * Created by panca on 16/8/15.
 */

// var React = require('react');
import React from 'react';
import './Hello.scss';

class Hello  extends React.Component  {
  constructor () {
    super()
  }

  render () {
      return (
          <div>
              React+Webpack+ES6从环境搭建到HelloWorld
              <span>hello  hello</span>
          </div>
      );
  }
}

module.exports = Hello;

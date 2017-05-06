/**
 * Created by panca on 16/8/15.
 */

// var React = require('react');
import React from 'react';
import './Tab.scss';
import { Link } from 'react-router'

class Tab  extends React.Component  {
  constructor () {
    super()
  }

  render () {
      return (
          <div>
              xxxxxxxxxxxxxxx
              <Link to='/hello'>hello  hello</Link>
          </div>
      );
  }
}

module.exports = Tab;

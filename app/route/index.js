import React, { Component } from 'react';
import { Route, IndexRedirect } from 'react-router';

import  Hello  from '../components/Hello/Hello';
import Tab from '../components/Tab/Tab'
const routes = (
  <Route path="/" >
    <IndexRedirect to="/hello" />
    <Route >
      <Route path="/hello" component={ Hello }/>
      <Route path="/tab" component={ Tab }/>
    </Route>
  </Route>
);

export default routes

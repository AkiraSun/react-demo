import React, { Component } from 'react';
import { Route, IndexRedirect } from 'react-router';

import  Hello  from '../components/Hello/Hello';
import Tab from '../components/Tab/Tab'
import HelloV from '../containers/HelloV/index'
const routes = (
  <Route path="/" >
    <IndexRedirect to="HelloV" />
    {/* <Route component={ App }> */}
      <Route path="HelloV" component={ HelloV }/>
      <Route path="tab" component={ Tab }/>
    {/* </Route> */}
  </Route>
);

export default routes

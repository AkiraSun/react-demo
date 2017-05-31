import React, { Component } from 'react';
import { Route, IndexRedirect } from 'react-router';

import  Hello  from '../components/Hello/Hello';
import Tab from '../components/Tab/Tab'
import HelloV from '../containers/HelloV/index'
// import  App  from '../components/App';
import IndexPage from '../containers/IndexPage'
const routes = (
  <Route path="/" component={ IndexPage }>
    <IndexRedirect to="HelloV" />
    <Route path="HelloV" component={ HelloV }/>
    <Route path="Tab" component={ Tab }/>

  </Route>
);

export default routes

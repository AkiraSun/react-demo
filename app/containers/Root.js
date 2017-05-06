import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router,Route,useRouterHistory,IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
import route from '../route';

var appHistory = useRouterHistory(createHashHistory)({queryKey:false});
export default class Root extends Component {
  render() {
    if (!this.route) this.route = route;
    return (
      <Router routes={this.route} history={ appHistory }/>
      //   {/* <Route path="/" >
      //     <IndexRoute component={Tab}/>
      //     <Route path="/tab" component={ Tab }/>
      //     <Route path="/hello" component={ Hello }/>
      //   </Route>
      // </Router> */}


    );
  }
}

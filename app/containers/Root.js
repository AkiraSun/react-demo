import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router,Route,useRouterHistory,IndexRoute } from 'react-router';
import { createHashHistory } from 'history'
import route from '../route';
import store from '../store/index'

let appHistory = useRouterHistory(createHashHistory)({queryKey:false});

export default class Root extends Component {
  render() {
    if (!this.route) this.route = route;
    return (
      <Provider store={store}>
        <Router routes={this.route} history={ appHistory }/>
      </Provider>
      //   {/* <Route path="/" >
      //     <IndexRoute component={Tab}/>
      //     <Route path="/tab" component={ Tab }/>
      //     <Route path="/hello" component={ Hello }/>
      //   </Route>
      // </Router> */}


    );
  }
}

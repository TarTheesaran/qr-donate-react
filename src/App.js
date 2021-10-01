import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './Component/Home';
import About from './Component/About';
import Howto from './Component/Howto';
import Navigation from './Component/Navigation';
import Admin from './Component/Admin/Admin';
import AdminDataAdd from './Component/Admin/AdminDataAdd';
import AdminDataList from './Component/Admin/AdminDataList';
import AdminStorage from './Component/Admin/AdminStorage';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {/**
                 *  route to diffrent component 
                 */}
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/about'} component={About} />
        <Route exact={true} path={'/howto'} component={Howto} />
        <Route exact={true} path={'/admin'} component={Admin} />
        <Route exact={true} path={'/remove'} component={AdminDataList} />
        <Route exact={true} path={'/add'} component={AdminDataAdd} />
        <Route exact={true} path={'/sto'} component={AdminStorage} />
      </div>
    );
  }
}

export default App;

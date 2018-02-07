import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import MainLayout from './mainLayout'


const HomeLayout = () => (
  <div>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/" component={ MainLayout } />
    </Switch>
  </div>
)

export default HomeLayout;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectRoy from './Projects/ProjectRoy';
import ProjectZap from './Projects/ProjectZap';
import Whitepaper from './Projects/Whitepaper';
import Home from './Home/Home';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/projectzap' component={ProjectZap} />
    <Route path='/projectroy' component={ProjectRoy} />
    <Route path='/whitepaper' component={Whitepaper} />
  </Switch>
);

export default Main;

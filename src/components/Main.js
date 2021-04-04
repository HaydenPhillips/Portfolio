import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectRoy from "./ProjectRoy";
import ProjectZap from "./ProjectZap";
// import Home from "./Home/Home";
import Whitepaper from "./Whitepaper";
import Projects from "./Projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Projects} />
    {/* <Route exact path='/' component={Home} /> */}

    <Route path="/projectzap" component={ProjectZap} />
    <Route path="/projectroy" component={ProjectRoy} />
    <Route path="/whitepaper" component={Whitepaper} />
  </Switch>
);

export default Main;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Maze from './Maze';



const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/maze" component={Maze} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;
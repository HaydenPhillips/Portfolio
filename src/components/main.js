import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';
import Scrollable from './Scrollable';
import LayeredBackground from './LayeredBackground';
import ProjectRoy from './ProjectRoy'
import ProjectZap from './ProjectZap'
import Deck from './Deck'
import Home from './Home/Home'



const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projectzap' component={ProjectZap} />
        <Route path='/projectroy' component={ProjectRoy} />
        <Route path='/deck' component={Deck} />
        {/* <Route path='/home' component={Home} /> */}

        {/* <Route path="/scrollable" component={Scrollable} /> */}
        {/* <Route path="/maze" component={Maze} /> */}
        {/* <Route path="/projects" component={Projects} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/layeredbackground" component={LayeredBackground} /> */}
    </Switch>
)

export default Main;
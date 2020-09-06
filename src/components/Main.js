import React from 'react';
// import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'
// import { useTransition, animated } from 'react-spring'
import ProjectRoy from './ProjectRoy'
import ProjectZap from './ProjectZap'
import Home from './Home/Home'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projectzap' component={ProjectZap} />
        <Route path='/projectroy' component={ProjectRoy} />
    </Switch>
)

export default Main;

// const location = useLocation()

//     const transitions = useTransition(location, location => location.pathname, {
//         from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//         enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//         leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//     })
//     return transitions.map(({ item: location, props, key }) => (
//         <animated.div key={key} style={props}>
//             <Switch location={location}>
//                 <Route path="/" exact component={Home} />
//                 <Route path='/projectroy' component={ProjectRoy} />
//                 <Route path='/projectzap' component={ProjectZap} />
//                 <Route path='/deck' component={Deck} />
//             </Switch>
//         </animated.div>
//     ))
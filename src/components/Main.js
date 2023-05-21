import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProjectRoy from './pages/projectsPage/Projects/ProjectRoy'
import ProjectZap from './pages/projectsPage/Projects/ProjectZap'
import Whitepaper from './pages/projectsPage/Projects/Whitepaper'
import Pages from './pages/Pages'

const Main = () => (
	<Switch>
		<Route exact path='/' component={Pages} />
		<Route path='/projectzap' component={ProjectZap} />
		<Route path='/projectroy' component={ProjectRoy} />
		<Route path='/whitepaper' component={Whitepaper} />
	</Switch>
)

export default Main

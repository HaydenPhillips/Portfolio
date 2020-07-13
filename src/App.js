import React, { Fragment } from 'react';
import './CSS/App/App.css';
import './CSS/Sidebar/Sidebar.css';
import './CSS/Roy/ProjectRoy.css';
import './CSS/Slides/Slides.css'
import Main from './components/main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;

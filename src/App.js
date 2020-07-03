import React, { Fragment } from 'react';
import './CSS/App.css';
import './CSS/Sidebar.css';
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

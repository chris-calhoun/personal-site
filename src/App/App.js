import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </>
    );
  }
}

export default App;

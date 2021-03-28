import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;

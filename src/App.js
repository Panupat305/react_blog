import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/page/Home';
import Services from './components/page/Services';
import Products from './components/page/Products';
import SignUp from './components/page/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/services' exact component={Services} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
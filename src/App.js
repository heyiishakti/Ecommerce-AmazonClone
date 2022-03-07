import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

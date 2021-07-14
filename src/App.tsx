import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

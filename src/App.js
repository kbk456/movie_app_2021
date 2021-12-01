import React from "react";
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import About from './routers/About';
import Home from './routers/Home';
import Navigation from "./components/Navigation";
import Detail from "./routers/Detail";

function App(){
  return (
    <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/movie-detail"  component={Detail}/>
      </HashRouter>
  );
}
export default App;
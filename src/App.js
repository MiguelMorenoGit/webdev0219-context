import React, { Component } from 'react';
import './App.css';
import CounterProvider, {withCounter} from './services/CounterProvider';
import MiddleComponent from './components/MiddleComponent';
import PokemonList from './components/PokemonList';
// import {withRouter} from 'react-router-dom'


const Navbar = (props) => {
  return (
    <nav>
      <h1>{props.title}</h1>
      <ul>
        <li>Home</li>
        <li>Favoritos: {props.counter}</li>
      </ul>
    </nav>
  )
}

const NavbarWithCounter = withCounter(Navbar);

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterProvider>
          <MiddleComponent/>
          <NavbarWithCounter title="Navbar" />
          <PokemonList />
        </CounterProvider>
      </div>
    );
  }
}

export default App;

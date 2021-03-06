import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPet, getRandomPet } from './api/petfinder/api'

class App extends Component {

  async componentDidMount() {
    const id = await getRandomPet()
    const pet = await getPet(id)
    console.log(pet)
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

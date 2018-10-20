import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

// import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Test App</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
      </div>
    );
  }
}

export default App;

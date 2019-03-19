import React, { Component } from 'react';
import HeaderComponent from "./HeaderComponent"
import MemeGenerator from "./MemeGenerator"

class App extends Component {


  render() {

    /**
     * Create 2 new components - Header and MemeGenerator
     * Header will only display things
     * MemeGenerator will be calling to an API and holding on to data
     * Each should be in their own file of the same name
     */

    return (
      <div className="app">


        <HeaderComponent />
        <MemeGenerator />

      </div>
    )
  }
}

export default App;

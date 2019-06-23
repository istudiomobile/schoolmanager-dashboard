import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import Schoollist from './components/subscribedSchools/Schoollist';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <Schoollist />
        </div>
      </div>
    );
  }
}

export default App;

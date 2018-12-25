import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/main.css'

import Navbar from './components/navbar'
import Slider from './components/slider'
import Search from './components/search'
import IconBoxes from './components/icon-boxes'
import PopularPlaces from './components/popular-places'
import Follow from './components/follow'

class App extends Component {
  render() {
    return (
      <div id='home' className='scrollspy'>
        <Navbar />
        <Slider />
        <Search />
        <IconBoxes />
        <PopularPlaces />
        <Follow />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/main.css'
import M from 'materialize-css'


import Navbar from './components/navbar'
import Slider from './components/slider'
import Search from './components/search'
import IconBoxes from './components/icon-boxes'
import PopularPlaces from './components/popular-places'
import Follow from './components/follow'
import Gallery from './components/gallery'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  componentDidMount() {
    //Scroll Spy
    let ss = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(ss, {})
  }

  render() {
    return (
      <div id='home' className='scrollspy'>
        <Navbar />
        <Slider />
        <Search />
        <IconBoxes />
        <PopularPlaces />
        <Follow />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

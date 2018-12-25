import React, { Component } from 'react'
import M from 'materialize-css'

class Gallery extends Component {
  componentDidMount() {
    //Material Box Open
    let mb = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(mb, {})
  }

  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Photo</span> Gallery
          </h4>
          <div className="row">
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?beach" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?travel" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?nature" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?beach, travel" alt="" className="materialboxed responsive-img" />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?water" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?building" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?trees" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?cruise" alt="" className="materialboxed responsive-img" />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?beaches" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?traveling" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?bridge" alt="" className="materialboxed responsive-img" />
            </div>
            <div className="col s12 m3">
              <img src="https://source.unsplash.com/1600x900/?beach, travel,boat" alt="" className="materialboxed responsive-img" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
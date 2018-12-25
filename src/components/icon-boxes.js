import React, { Component } from 'react'

class IconBoxes extends Component {
  render() {
    return (
      <section className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">room</i>
                <h4>Pick Where</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perspiciatis?</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">store</i>
                <h4>Travel Shop</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perspiciatis?</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">airplanemode_active</i>
                <h4>Fly Cheap</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perspiciatis?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default IconBoxes

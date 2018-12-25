import React, { Component } from 'react'

class Follow extends Component {
  render() {
    return (
      <section className="section section-follow teal darken-2 white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Follow TravelVillie</h4>
              <p>Follow us on social media for special offers</p>
              <a href="" className="white-text">
                <i className="fab fa-facebook fa-4x"></i>
              </a>
              <a href="" className="white-text">
                <i className="fab fa-twitter fa-4x"></i>
              </a>
              <a href="" className="white-text">
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
              <a href="" className="white-text">
                <i className="fab fa-google-plus fa-4x"></i>
              </a>
              <a href="" className="white-text">
                <i className="fab fa-pinterest fa-4x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Follow

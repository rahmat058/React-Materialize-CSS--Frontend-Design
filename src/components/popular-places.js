import React, { Component } from 'react'

class PopularPlaces extends Component {
  render() {
    return (
      <section id="popular" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className='center'> <span className="teal-text">Popular</span> Places</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="img/resort1.jpg" alt="resort1"/>
                  <span className="card-title">Cancun, Mexico</span>
                </div>

                <div className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, autem. Fuga laudantium similique quod explicabo.
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="img/resort2.jpg" alt="resort2"/>
                  <span className="card-title">The Bhamas</span>
                </div>

                <div className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, autem. Fuga laudantium similique quod explicabo.
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src="img/resort3.jpg" alt="resort3"/>
                  <span className="card-title">Novo Scotia</span>
                </div>

                <div className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, autem. Fuga laudantium similique quod explicabo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PopularPlaces

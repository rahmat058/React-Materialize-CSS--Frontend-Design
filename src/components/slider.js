import React, { Component } from 'react'
import M from 'materialize-css'

class Slider extends Component {
  componentDidMount() {
    //Slider Open
    let sliderOpen = document.querySelector(".slider");
    M.Slider.init(sliderOpen, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    })
  }

  render() {
    return (
      <section className="slider">
        <ul className="slides">
          <li>
            <img src="img/resort1.jpg" />
            <div className="caption center-align">
              <h2>Take Your Dream Vacation</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident eos dicta unde debitis</h5>
            </div>
          </li>

          <li>
            <img src="img/resort2.jpg" />
            <div className="caption left-align">
              <h2>We Work With All Budgets</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus inventore neque impedit</h5>
            </div>
          </li>

          <li>
            <img src="img/resort3.jpg" />
            <div className="caption right-align">
              <h2>Group & Individual Getaways</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum molestias excepturi doloremque</h5>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default Slider

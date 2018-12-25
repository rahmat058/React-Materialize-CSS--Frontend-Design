import React, { Component } from 'react'
import M from 'materialize-css'

class Search extends Component {
  componentDidMount() {
    //AutoComplete
    let ac = document.querySelector(".autocomplete");
    M.Autocomplete.init(ac, {
      data: {
        'Aruba': null,
        'Cancun Mexico': null,
        'Hawaii': null,
        'Florida': null,
        'California': null,
        'Jamaica': null,
        'Europe': null
      }
    })
  }

  render() {
    return (
      <section id="search" className="section section-search teal darken-1 white-text center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3>Search Destinations</h3>
              <div className="input-field">
                <input type="text" className="white grey-text autocomplete" id='autocomplete-input' placeholder='Dhaka, Bangladesh'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Search

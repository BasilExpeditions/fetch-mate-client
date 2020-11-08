import React, { Component } from 'react'
import { render } from "react-dom";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._handleChange = this._handleChange.bind(this);
    this.componentDidMount =this.componentDidMount.bind(this);
  }

  _handleChange(event) {
      let value = event.target.value;
      this.setState({[event.target.name]: value
    });
  }


  componentDidMount(event) {
    console.log("something");
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log(position);
        },
        function(error){
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
  }

  render(){
    return (
      <div>
        <h1>Using geolocation Javascript API in React</h1>
        <input type="text" placeholder="Postcode" onChange={ this._handleChange }/>
        // <input type="submit" value="Search" />
        <input type="submit" value="Find near me" onSubmit ={ this.componentDidMount } />
      </div>
    );
  }
}

export default Location;

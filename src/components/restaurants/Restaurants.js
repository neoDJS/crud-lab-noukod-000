import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  renderRestos = this.props.restaurants.map(resto => <Restaurant key={resto.id} restaurant={resto} delete={this.props.delete}/>);
  render() {
    return(
      <ul>
        {this.renderRestos}
      </ul>
    );
  }
};

export default Restaurants;

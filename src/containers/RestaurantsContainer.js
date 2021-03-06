import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput saveRestaurant={this.props.addResto}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.deleteResto}/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });

const mapDispatchToProps = dispatch => ({
  addResto: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteResto: restoId => dispatch({type: "DELETE_RESTAURANT", restoId})
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

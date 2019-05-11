import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addResto}/>
        <Restaurants delete={this.props.deleteResto}  restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants });

const mapDispatchToProps = dispatch => ({
  addResto: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteResto: id => dispatch({type: "DELETE_RESTAURANT", id})
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

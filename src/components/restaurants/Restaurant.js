import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from './RestaurantInput'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleDelClick = (event) => {
    event.preventDefault();
    this.props.delete(this.props.restaurant.id);
  }

  handleUpClick = (state) => {
    this.props.update({...state, id: this.props.restaurant.id});
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button id='delete' onClick={this.handleDelClick}> X </button>
          <RestaurantInput saveRestaurant={this.handleUpClick}/>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};



const mapDispatchToProps = dispatch => ({
  update: (resto) => dispatch({ type: "UPDATE_RESTAURANT", resto })
});

export default Restaurant; //connect(null, mapDispatchToProps)(Restaurant);

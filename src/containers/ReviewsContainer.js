import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restoId={this.props.restaurant.id}/>
        <Reviews delete={this.props.deleteReview} reviews={this.props.restaurant.reviews} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: (restoId, id) => dispatch({type: "DELETE_REVIEW", restoId, id})
});

export default connect(null, mapDispatchToProps)(ReviewsContainer);

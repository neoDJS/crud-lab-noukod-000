import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId !== this.props.restaurant.id);
    return (
      <div>
        <ReviewInput saveReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews delete={this.props.deleteReview} reviews={reviews} />
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews });

const mapDispatchToProps = dispatch => ({
  addReview: (review) => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: (reviewId) => dispatch({type: "DELETE_REVIEW", reviewId})
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

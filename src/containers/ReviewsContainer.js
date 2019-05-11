import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restoId={this.props.restoId}/>
        <Reviews delete={this.props.deleteReview} reviews={this.props.restaurant.reviews} restoId={this.props.restoId}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: (restoId, text) => dispatch({ type: "ADD_REVIEW", restoId, text }),
  deleteReview: (restoId, id) => dispatch({type: "DELETE_REVIEW", restoId, id})
});

export default connect(null, mapDispatchToProps)(ReviewsContainer);

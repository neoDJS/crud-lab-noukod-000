import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = this.props.reviews.map(review => <Review review={review} restaurantId={this.props.restoId} key={review.id} delete={this.props.delete}/>)
  render() {
    return (
      <ul>
        {this.renderReviews}
      </ul>
    );
  }
};

export default Reviews;

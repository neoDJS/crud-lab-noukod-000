import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = this.props.reviews.map(review => <Review restoId={this.props.restoId} key={review.id} {...review} delete={this.props.delete}/>)
  render() {
    return (
      <ul>
        {this.renderReviews}
      </ul>
    );
  }
};

export default Reviews;

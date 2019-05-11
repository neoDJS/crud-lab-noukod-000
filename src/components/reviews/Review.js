import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.delete(this.props.review.restaurantId, this.props.review.id);
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from './ReviewInput'

class Review extends Component {

  handleDelClick = (event) => {
    event.preventDefault();
    this.props.delete(this.props.review.id);
  }

  handleUpClick = (state) => {
    this.props.update({...state, id: this.props.review.id});
  }

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button id='delete' onClick={this.handleDelClick}> X </button>
        {/*<ReviewInput saveReview={this.handleUpClick} restoId={review.restaurantId}/>*/}
      </div>
    );
  }

};



const mapDispatchToProps = dispatch => ({
  update: (review) => dispatch({ type: "UPDATE_REVIEW", review })
});

export default connect(null, mapDispatchToProps)(Review);

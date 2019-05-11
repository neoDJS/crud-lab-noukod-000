
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={ restaurants: [] }, action) {
    console.log(action);
    switch (action.type) {
      case 'ADD_RESTAURANT':

        const resto = {
          id: cuid(),
          text: action.text,
          reviews: []
        }
        return { ...state, restaurants: state.restaurants.concat(resto) };

      case 'DELETE_RESTAURANT':

        return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

      case 'ADD_REVIEW':

        const review = {
          id: cuid(),
          restaurantId: action.review.restaurantId,
          text: action.review.text
        }
        return { ...state, restaurants: state.restaurants.map(resto => {
          resto.id !== review.restaurantId ? resto : {...resto, reviews: resto.reviews.concat(review)}
         }) };

      case 'DELETE_REVIEW':

        return { ...state, restaurants: state.restaurants.map(resto => {
          resto.id !== action.restoId ? resto : {...resto, reviews: resto.reviews.filter(review => review.id !== action.id)}
         }) };

      default:
        return state;
    }

}

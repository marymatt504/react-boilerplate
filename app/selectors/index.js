import { createSelector } from 'reselect';

const getRestaurants = state => {
  console.log(state);
  return state._root.entries[0][1].restaurantList;
};

export const getBestDeal = createSelector([getRestaurants], restaurants => {
  // console.log('restaurants:', restaurants);
  if (restaurants) {
    return restaurants.sort(
      (a, b) => a.averageDishPrice - b.averageDishPrice,
    )[0];
  }
});

// LEFT OFF HERE..try to connect selector to store and use with mapstate to props in restaurant List

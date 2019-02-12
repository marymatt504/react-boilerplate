import { createSelector } from 'reselect';

const getRestaurants = state => state._root.entries[0][1].restaurantList;

export const getBestDeal = createSelector([getRestaurants], restaurants => {
  if (restaurants) {
    return restaurants.sort(
      (a, b) => a.averageDishPrice - b.averageDishPrice,
    )[0];
  }
});


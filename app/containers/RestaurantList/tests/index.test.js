// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import RestaurantList from '../index';

/**TO TEST
 * -- this is currently a connected component that is being imported, so expects a store
 * always renders title
 * renders x li elements matching # of restaurants
 * if restaurantList is undefined, renders Loading...
 * if bestDeal is undefined, renders loading...
 * else, bestDeal renders $ and a price
 * reactrouter -- on click of link goes to correct location
 * test selectors
 * on component did mount, sagas
 */

// describe('<RestaurantList />', () => {

//   it('renders Title "Best Restaurants in San Francisco"', () => {
//     const store = state._root.entries[0][1];
//     const context = 

//     const store = {
//       restaurantList: [{ averageDishPrice: 1, id: 15, name: "weiss & sons", neighborhood: "mission", url: "http://www.weis.com" }],
//       error: false
//     };
//     const wrapper = mount(<RestaurantList />, { context });
//     expect(wrapper.contains('.Title')).to.equal(true);
//     expect(wrapper.find('.Title')).to.have.lengthOf(1);
//     expect(wrapper.find('.Title'))[0].text().to.equal('Best Restaurants in San Francisco');
//   });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <RestaurantList>
  //       <div className="unique" />
  //     </RestaurantList>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

// });

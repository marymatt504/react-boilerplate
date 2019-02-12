import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBestDeal } from '../../selectors/index';

/* eslint-disable react/prefer-stateless-function */

const Title = styled.p`
  color: #78ad9e;
  font-size: 130%;
  font-weight: bold;
  margin: 2%;
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 115%;
`;

const Box = styled.div`
  border-style: solid;
  border-color: darkgrey;
  padding: 1%;
  margin: 2%;
`;

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onRestaurantsRequest();
  }

  render() {
    const { restaurantList, error, bestDeal } = this.props;
    // if want to display a UI while fetching, uncomment from here app.js and reducer.js
    // const { fetching, restaurantList, error } = this.props;

    return (
      <div>
        <Title>Best Restaurants in San Francisco</Title>
        {restaurantList ? (
          <ul>
            {restaurantList.map(restaurant => (
              <Link to={`/restaurants/${restaurant.id}`}>
                <li key={restaurant.id} id={restaurant.id}>
                  {restaurant.name || '[no name]'}
                </li>
              </Link>
            ))}
          </ul>
        ) : (
            <Subtitle>Loading...</Subtitle>
          )}

        {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {

  const { restaurantList, error } = state._root.entries[0][1];
  // const fetching = state._root.entries[0][1].fetching;
  const bestDeal = getBestDeal(state);

  return {
    restaurantList,
    // fetching,
    bestDeal,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  onRestaurantsRequest: () => dispatch({ type: 'API_CALL_REQUEST' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantList);
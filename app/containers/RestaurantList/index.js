import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
    const { fetching, restaurantList, error } = this.props;
    // WORK IN HERE RENDERING CONDITIONALLY WHEN THERE IS A RESTAURANTLIST!!
    return (
      <div>
        <Title>Best Restaurants in San Francisco</Title>
        {restaurantList ? (
          <ul>
            {restaurantList.map(restaurant => {
              return <li key={restaurant.id} id={restaurant.id}>{restaurant.name}</li>
            })}
          </ul>
        ) : (
            <Subtitle>Loading...</Subtitle>
          )}
        {/* {console.log('getting restaurant list in component UI', restaurantList)} */}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const restaurantList = state._root.entries[0][1].restaurantList;
  const fetching = state._root.entries[0][1].fetching;
  const error = state._root.entries[0][1].error;

  return {
    restaurantList,
    fetching,
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

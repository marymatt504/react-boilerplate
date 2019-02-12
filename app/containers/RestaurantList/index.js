import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

/* eslint-disable react/prefer-stateless-function */


class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // onRestaurantsRequest();
  }

  render() {

    // const { fetching, restaurantList, onRestaurantsRequest, error } = this.props;
    const { onRestaurantsRequest } = this.props;
    const { fetching, restaurantList, error } = this.props;

    console.log('this.props', this.props);
    return (
      <div onClick={onRestaurantsRequest}>
        Restaurants will be mapped here.
        {/* DO THINGS HERE WITH PROPS! AND ONCLICK, dispatch actions */}
        restaurantList: {restaurantList}
        error: {error}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const restaurantList = state._root.entries[0][1]._root.entries[0][1];
  const fetching = state._root.entries[0][1]._root.entries[1][1];
  const error = state._root.entries[0][1]._root.entries[2][1];

  // console.log('restaurantList:', state._root.entries[0][1]._root.entries[0][1]);

  // return {
  //   restaurantList: state.restaurants.restaurantList,
  //   fetching: state.restaurants.fetching,
  //   error: state.restaurants.error
  // };

  return {
    restaurantList,
    fetching,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRestaurantsRequest: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
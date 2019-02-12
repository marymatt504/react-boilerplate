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
    this.props.onRestaurantsRequest();
  }

  render() {

    // const { fetching, restaurantList, onRestaurantsRequest, error } = this.props;
    const { onRestaurantsRequest } = this.props;
    const { fetching, restaurantList, error } = this.props;

    console.log('this.props', this.props);
    return (
      <div>
        Restaurants will be mapped here.
        {/* {restaurantList[0].name} */}
        {/* DO THINGS HERE WITH PROPS! AND ONCLICK, dispatch actions */}
        {console.log('getting restaurant list in component UI', restaurantList)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const restaurantList = state._root.entries[0][1].restaurantList;
  const fetching = state._root.entries[0][1].fetching;
  const error = state._root.entries[0][1].error;

  // console.log('restaurantList line 42:', state._root.entries[0][1]._root.entries[0][1]);
  console.log(state);

  // return {
  //   restaurantList: state.restaurantList,
  //   fetching: state.fetching,
  //   error: state.error
  // };

  console.log('restaurantList line 51 RestaurantList', restaurantList);

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
import React from 'react';
import styled from 'styled-components';

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

/**
 * could get details on restaurant profile from the store
 * though, if possible come to this page from elsewhere than RestaurantList
 * need to make sure store is updated with latest restaurantList beforehand
 */

export default function RestaurantProfile({ match }) {
  return (
    <Box>
      <Title>Will display info for store here</Title>
      <Subtitle>Restaurant id: {match.params.id}</Subtitle>
    </Box>
  );
}

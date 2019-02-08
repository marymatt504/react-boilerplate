import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  border-bottom-style: solid;
  border-color: darkgrey;
  width: 100%;
  background: lightgrey;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 110%;
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavButton>Add a Restaurant</NavButton>
      <NavButton>See all Restaurants</NavButton>
    </NavContainer>
  );
}

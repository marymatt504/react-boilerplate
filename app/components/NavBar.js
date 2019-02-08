import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export default function NavBar() {
  return (
    <NavContainer>
      <Link to="/">
        <NavButton>Add a Restaurant</NavButton>
      </Link>
      <Link to="/restaurants">
        <NavButton>See all Restaurants</NavButton>
      </Link>
    </NavContainer>
  );
}

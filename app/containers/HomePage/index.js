/*
 * HomePage
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import styled from 'styled-components';
// import messages from './messages';

const InputField = styled.input`
  border-style: solid;
  border-color: black;
  margin-left: 0.5em;
`;

const FieldDiv = styled.div`
  margin-bottom: 0.2%;
`;

const Title = styled.p`
  color: #78ad9e;
  font-size: 130%;
  font-weight: bold;
  margin: 2%;
`;
Title.displayName = 'Title';

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 115%;
`;

const SignUpForm = styled.form`
  border-style: solid;
  border-color: darkgrey;
  padding: 1%;
  margin: 2%;
`;
SignUpForm.displayName = 'SignUpForm';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      neighborhood: '',
      url: '',
      averageDishPrice: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInput() {
    this.setState({
      name: '',
      neighborhood: '',
      url: '',
      averageDishPrice: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const submission = {
      name: this.state.name.toLowerCase(),
      neighborhood: this.state.neighborhood.toLowerCase(),
      url: `http://www.${this.state.url}`,
      averageDishPrice: this.state.averageDishPrice,
    };
    axios
      .post('/restaurants', submission)
      .then(() => {
        alert('restaurant saved');
        this.clearInput();
      })
      .catch(error => {
        console.log(error);
        alert('restaurant already in database');
        this.clearInput();
      });
  }

  render() {
    return (
      <div>
        <Title>Restaurant Recommendations in San Francisco</Title>

        <SignUpForm onSubmit={this.handleSubmit}>
          <Subtitle>Add a Restaurant</Subtitle>
          <label>
            <FieldDiv>
              {`Restaurant Name: `}
              <InputField
                required
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FieldDiv>
          </label>
          <label>
            <FieldDiv>
              {`Neighborhood: `}
              <InputField
                required
                name="neighborhood"
                type="text"
                value={this.state.neighborhood}
                onChange={this.handleChange}
              />
            </FieldDiv>
          </label>
          <label>
            <FieldDiv>
              {`Website: http://www.`}
              <InputField
                required
                name="url"
                type="text"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </FieldDiv>
          </label>
          <label>
            <FieldDiv>
              {`Average Dish Price: $`}
              <InputField
                required
                name="averageDishPrice"
                type="number"
                min="0.00"
                step="1"
                value={this.state.averageDishPrice}
                onChange={this.handleChange}
              />
            </FieldDiv>
          </label>
          <InputField
            type="submit"
            className="registerButton"
            id="registerButton"
            value="Register"
          />
        </SignUpForm>
      </div>
    );
  }
}

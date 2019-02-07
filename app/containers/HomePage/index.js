/*
 * HomePage
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import styled from 'styled-components';
import messages from './messages';

const InputField = styled.input`
  border-style: solid;
  border-color: black;
`;

const FieldDiv = styled.div`
  margin-bottom: 0.2%;
`;

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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const submission = {
      name: this.state.name.toLowerCase(),
      neighborhood: this.state.neighborhood.toLowerCase(),
      url: this.state.url,
      averageDishPrice: this.state.averageDishPrice,
    };

    axios
      .post('/restaurants', submission)
      .then(() => {
        console.log('saved');
        // HOW DO WE CHANGE VIEW HERE WITH REACT ROUTER??
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Restaurant Recommendations in San Francisco</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Add a Restaurant...</h2>
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
              {`Website: `}
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
              {`Average Dish Price: `}
              <InputField
                required
                name="averageDishPrice"
                type="number"
                value={this.state.averageDishPrice}
                onChange={this.handleChange}
              />
            </FieldDiv>
          </label>
          <InputField
            type="submit"
            className="formComponent"
            value="Register"
          />
        </form>
      </div>
    );
  }
}

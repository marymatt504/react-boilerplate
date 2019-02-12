import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../index';

// on click of submit!

describe('<HomePage />', () => {

  it('has a Title styled component', () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.exists('Title')).toBe(true);
  });

  it('has a SignUpForm styled component', () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.exists('SignUpForm')).toBe(true);
  });

  it('has initial state properties of name, neighborhood, url and averageDishPrice with values of empty string', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.state().name).toHaveLength(0);
    expect(wrapper.state().neighborhood).toHaveLength(0);
    expect(wrapper.state().url).toHaveLength(0);
    expect(wrapper.state().averageDishPrice).toHaveLength(0);
  });

  // it('calls "handleSubmit()" on register button click', () => {
  //   const wrapper = mount(<HomePage />);
  //   const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
  //   wrapper.update();
  //   // console.log('wrapper.find.regiserButton', wrapper.find('.registerbutton'));
  //   wrapper.find('form').simulate('submit');
  //   expect(spy).toHaveBeenCalled();
  // });

});

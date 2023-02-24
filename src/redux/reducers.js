import { combineReducers } from 'redux';

const cars = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, action.value];
    case 'REMOVE_CAR':
      let newState = [...state];
      newState.splice(action.value, 1);
      return newState;

    default:
      return state;
  }
};

const hello = (state = null) => state;
const poop = (state = null) => state;
const user = (state = null) => state;
const cats = (state = []) => state;
const dogs = (state = []) => state;
const dreams = (state = []) => state;

export default combineReducers({ hello, cars, user, poop, cats, dogs, dreams });

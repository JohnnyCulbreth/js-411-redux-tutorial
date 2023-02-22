import { combineReducers } from 'redux';

const hello = (state = null) => state;
const poop = (state = null) => state;
const cars = (state = []) => state;
const user = (state = null) => state;
const cats = (state = []) => state;
const dogs = (state = []) => state;
const dreams = (state = []) => state;

export default combineReducers({ hello, cars, user, poop, cats, dogs, dreams });

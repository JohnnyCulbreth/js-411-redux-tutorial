import React from 'react';

const ProfileComponent = (props) => {
  return (
    <div>
      <h1>Out Profile Dumb Component</h1>
      <h1>{props.hello}</h1>
      <h1>{props.poop}</h1>
      <h1>{props.user || 'undefined'}</h1>
      {props.cars.map((car, index) => {
        return <h2 key={index}>{car}</h2>;
      })}
      {props.cats.map((cat, index) => {
        return <h2 key={index}>{cat}</h2>;
      })}
      {props.dogs.map((dog, index) => {
        return <h2 key={index}>{dog}</h2>;
      })}
      {props.dreams.map((dream, index) => {
        return <h2 key={index}>{dream}</h2>;
      })}
    </div>
  );
};

export default ProfileComponent;

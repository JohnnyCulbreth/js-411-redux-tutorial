export const addCar = () => {
  return {
    type: 'ADD_CAR',
    value: 'Ford',
  };
};

export const removeCar = (index) => {
  return {
    type: 'REMOVE_CAR',
    value: index,
  };
};

import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import { removeCar, addCar } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    hello: state.hello,
    poop: state.poop,
    user: state.user,
    cars: state.cars,
    cats: state.cats,
    dogs: state.dogs,
    dreams: state.dreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
    removeCar: (index) => dispatch(removeCar(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

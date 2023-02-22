import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';

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

export default connect(mapStateToProps)(ProfileComponent);

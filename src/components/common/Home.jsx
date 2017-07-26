import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Locations from '../location/LocationList';
import LocationCreateForm from '../location/LocationCreateForm';
import LocationEditForm from '../location/LocationEditForm';


const Home = ({ isCreateMode, isUpdateMode }) => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-5 form-layout">
        {
          isCreateMode ? <LocationCreateForm /> : <LocationEditForm />
        }
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7">
        {
          isUpdateMode ? 'Google Map Area' : null
        }
      </div>
    </div>
    <div>
      <Locations />
    </div>
  </div>
);


Home.propTypes = {
  isCreateMode: PropTypes.bool.isRequired,
  isUpdateMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isCreateMode: state.location.isCreateMode,
  isUpdateMode: state.location.isUpdateMode,
});

export default connect(
  mapStateToProps,
)(Home);

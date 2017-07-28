import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader, Divider } from 'semantic-ui-react';
import Locations from '../location/LocationList';
import LocationCreateForm from '../location/LocationCreateForm';
import LocationEditForm from '../location/LocationEditForm';
import './HomeStyle.css';


const Home = ({ isCreateMode, isUpdateMode, isFetching }) => (
  <div className="ui container huge">
    <div className="ui two column centered grid stackable home-container">
      <div className="six wide column">
        {
          isCreateMode ? <LocationCreateForm /> : <LocationEditForm />
        }
      </div>
      <div className="ten wide column">
        {
          isUpdateMode ? 'Google Map Area' : null
        }
      </div>
    </div>
    <Divider />
    <div>
      {
        isFetching ? <Loader active inline="centered" /> : <Locations />
      }
    </div>
  </div>
);


Home.propTypes = {
  isCreateMode: PropTypes.bool.isRequired,
  isUpdateMode: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isCreateMode: state.location.isCreateMode,
  isUpdateMode: state.location.isUpdateMode,
  isFetching: state.location.isFetching,
});

export default connect(
  mapStateToProps,
)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader, Divider, Button, Icon } from 'semantic-ui-react';

import { updateLocationOnMap, openCreateForm } from '../../actions/location';
import _exportLocations from '../../api/exportLocations';

import Locations from '../location/LocationList';
import LocationCreateForm from '../location/LocationCreateForm';
import LocationEditForm from '../location/LocationEditForm';
import ReactGoogleMap from '../location/ReactGoogleMap';

import './HomeStyle.css';


const Home = ({ isCreateMode, isUpdateMode, isFetching, _openCreateForm, defaultMarker, locationUpdated, onMarkerDragEnd }) => (
  <div className="ui container huge">
    <Button
      className="no-border-radius"
      primary
      size="large"
      icon
      disabled={isCreateMode}
      onClick={_openCreateForm}
    ><Icon name="add" /> Location</Button>
    <Button
      className="no-border-radius"
      primary
      size="large"
      icon
      disabled={false}
      loading={false}
      onClick={_exportLocations}
    ><Icon name="download" /> Locations</Button>

    <Divider />

    <div className="ui two column centered grid stackable home-container">
      <div className="six wide column">
        {
          isCreateMode ? <LocationCreateForm /> :
            (
              isUpdateMode ? <LocationEditForm /> :
                null
            )
        }
      </div>
      <div className="ten wide column min-height-map">
        {
          isUpdateMode ?
            <ReactGoogleMap marker={locationUpdated} currentPosition={locationUpdated.position} onMarkerDragEnd={onMarkerDragEnd} /> :
            <ReactGoogleMap marker={defaultMarker} currentPosition={defaultMarker.position} />
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
  defaultMarker: {
    position: {
      lat: state.geolocation.latitude || 0,
      lng: state.geolocation.longitude || 0,
    },
    draggable: false,
    key: 'YOU ARE HERE',
    defaultAnimation: 2,
  },
  locationUpdated: {
    position: {
      lat: state.location.itemUpdate.latitude || 0,
      lng: state.location.itemUpdate.longitude || 0,
    },
    draggable: true,
    key: state.location.itemUpdate.street,
    defaultAnimation: 2,
    street: state.location.itemUpdate.street,
    city: state.location.itemUpdate.city,
    country: state.location.itemUpdate.country,
    district: state.location.itemUpdate.district,
    id: state.location.itemUpdate.id,
    ward: state.location.itemUpdate.ward,
  },
});

const mapDispatchToProps = dispatch => ({
  onMarkerDragEnd: (location) => {
    dispatch(updateLocationOnMap(location));
  },
  _openCreateForm: () => {
    dispatch(openCreateForm());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

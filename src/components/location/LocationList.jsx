import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { deleteLocation, updateFormModeToEdit } from '../../actions/location';
import Location from './Location';

const LocationList = ({ locations, onDelete, onMoveDataToEditForm }) => (
  <Card.Group className="centered grid ">
    {
      locations.map(location => <Location location={location} onDelete={onDelete} moveDataToEditForm={onMoveDataToEditForm} />)
    }
  </Card.Group>
);

LocationList.propTypes = {
  locations: PropTypes.array.isRequired,
  onMoveDataToEditForm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  locations: state.location.items,
});

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => {
    dispatch(deleteLocation(id));
  },
  onMoveDataToEditForm: (location) => {
    dispatch(updateFormModeToEdit(location));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationList);

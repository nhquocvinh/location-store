import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MDSpinner from 'react-md-spinner';
import { deleteLocation, updateFormModeToEdit } from '../../actions/location';
import Location from './Location';

const LocationList = ({ locations, isFetching, onDelete, onMoveDataToEditForm }) => (
  <div className="card-columns">
    {
      isFetching ? <div><MDSpinner /></div> :
        locations.map(location => <Location location={location} onDelete={onDelete} moveDataToEditForm={onMoveDataToEditForm} />)
    }
  </div>
);

LocationList.propTypes = {
  locations: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onMoveDataToEditForm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  locations: state.location.items,
  isFetching: state.location.isFetching,
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

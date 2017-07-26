import PropTypes from 'prop-types';
import React from 'react';
import './style.css';


export default class Location extends React.PureComponent {
  render() {
    const { location, onDelete, moveDataToEditForm } = this.props;

    return (
      <div className="card">
        <div className="card-header bg-inverse text-white lead"><strong>{location.country}</strong></div>
        <div className="card-block">
          <h6 className="card-subtitle mb-2 lead">{location.city}</h6>
          <div className="card-text">{location.street}</div>
          <div className="card-text">{location.ward} - {location.district}</div>
          <div className="card-btn-group">
            <a role="button" className="btn btn-info" onClick={() => moveDataToEditForm(location)}><strong>Update</strong></a>
            &nbsp;
            <a role="button" className="btn btn-danger" onClick={() => onDelete(location.id)}>Remove</a>
          </div>
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  location: PropTypes.object.isRequired,
  moveDataToEditForm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from './LocationFormValidate';
import { saveLocation } from '../../actions/location';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={touched && error ? 'form-group has-danger' : 'form-group'}>
    <label className="form-control-label">
      {label}
    </label>
    <input className={touched && error ? 'form-control form-control-danger' : 'form-control'} {...input} type={type} />
    {touched &&
      error &&
      <div className="form-control-feedback">
        {error}
      </div>}
  </div>
);

let LocationCreateForm = (props) => {
  const { handleSubmit, pristine, submitting, values, reset, initialValues } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Field name="street" type="text" component={renderField} label="Street Name" />
      <Field name="country" type="text" component={renderField} label="Country" />
      <Field name="city" type="text" component={renderField} label="City" />
      <Field name="district" type="text" component={renderField} label="District" />
      <Field name="ward" type="text" component={renderField} label="Ward" />

      <Field name="id" type="hidden" component="input" />
      <Field name="longitude" type="hidden" component="input" />
      <Field name="latitude" type="hidden" component="input" />

      <div className="text-center">
        <button
          type="submit"
          className={pristine || submitting ? 'btn btn-info disabled' : 'btn btn-info'}
          disabled={pristine || submitting}
        ><strong>Save this location</strong>
        </button>
      </div>
    </form>
  );
};

LocationCreateForm = reduxForm({
  form: 'locationCreate',
  enableReinitialize: true,
  validate,
})(LocationCreateForm);

const mapStateToProps = state => ({
  initialValues: {
    longitude: state.geolocation.position.longitude,
    latitude: state.geolocation.position.latitude,
    street: null,
    country: null,
    city: null,
    district: null,
    ward: null,
    id: null,
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (location) => {
    dispatch(saveLocation(location));
  },
});

LocationCreateForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationCreateForm);

export default LocationCreateForm;

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import validate from './LocationFormValidate';
import { saveLocation } from '../../actions/location';
import './LocationStyle.css';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div className={touched && error ? 'error field' : 'field'}>
      <label>
        {label}
      </label>
      <div className="ui input">
        <input {...input} type={type} />
      </div>
    </div>
    {touched &&
      error &&
      <div className="ui error message">
        <div className="content">
          <p>{error}</p>
        </div>
      </div>}
  </div>
);

let LocationCreateForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className="ui error form" onSubmit={handleSubmit}>

      <Field name="street" type="text" component={renderField} label="Street Name" />
      <Field name="country" type="text" component={renderField} label="Country" />
      <Field name="city" type="text" component={renderField} label="City" />
      <Field name="district" type="text" component={renderField} label="District" />
      <Field name="ward" type="text" component={renderField} label="Ward" />

      <Field name="id" type="hidden" component="input" />
      <Field name="longitude" type="hidden" component="input" />
      <Field name="latitude" type="hidden" component="input" />

      <div className="location-submit-btn">
        <button
          type="submit"
          center
          aligned
          className={pristine || submitting ? 'ui teal red button disabled' : 'ui red large button'}
          disabled={pristine || submitting}
        >{pristine || submitting ? <Icon name="dont" /> : null}
          <strong> Save Location</strong>
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
    longitude: state.geolocation.longitude,
    latitude: state.geolocation.latitude,
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

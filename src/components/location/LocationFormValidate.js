const validate = (values) => {
  const errors = {};

  if (!values.street) {
    errors.street = 'please input your location';
  }

  if (!values.city && !values.district) {
    errors.district = 'the district is mandatory if the city is blank';
  }

  if (!values.city && !values.ward) {
    errors.ward = 'the ward is mandatory if the city is blank';
  }

  return errors;
};

export default validate;

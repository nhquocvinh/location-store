import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'semantic-ui-react';


export default class Location extends React.PureComponent {
  render() {
    const { location, onDelete, moveDataToEditForm } = this.props;

    return (
      <Card>
        <Card.Content>
          <Card.Header>{location.country}</Card.Header>
          <Card.Meta>{location.city}</Card.Meta>
          <Card.Description>{`${location.street}, ${location.ward} - ${location.district}`}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button primary color="green" onClick={() => moveDataToEditForm(location)}>Update</Button>
            <Button secondary color="red" onClick={() => onDelete(location.id)}>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

Location.propTypes = {
  location: PropTypes.object.isRequired,
  moveDataToEditForm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

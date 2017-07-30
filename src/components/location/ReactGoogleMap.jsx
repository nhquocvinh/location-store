import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import { Loader } from 'semantic-ui-react';
import _ from 'lodash';

const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDQ5OaHpgRdhI4Wcl7EZoL3HuZBXMZAkRo';


const GettingStartedGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={16}
        defaultCenter={{ lat: props.currentPosition.lat, lng: props.currentPosition.lng }}
        onClick={props.onMapClick}
      >
        <Marker
          {...props.marker}
          onDragEnd={e => props.onMarkerDragEnd(e)}
        />
      </GoogleMap>
    ),
  ),
);

const ReactGoogleMap = ({ marker, currentPosition, onMarkerDragEnd }) => (
  <GettingStartedGoogleMap
    googleMapURL={googleMapURL}
    loadingElement={
      <div style={{ height: '100%' }}>
        <Loader active inline="centered" />
      </div>
    }
    containerElement={
      <div style={{ height: '100%' }} />
    }
    mapElement={
      <div style={{ height: '100%' }} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    marker={marker}
    onMarkerDragEnd={e => onMarkerDragEnd({
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
      country: marker.country,
      city: marker.city,
      ward: marker.ward,
      id: marker.id,
      street: marker.street,
      district: marker.district,
    })}
    currentPosition={currentPosition}
  />
);

export default ReactGoogleMap;


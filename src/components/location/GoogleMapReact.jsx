import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const CurrentLocation = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.currentPosition}
        defaultZoom={this.props.zoom}
      >
        
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;

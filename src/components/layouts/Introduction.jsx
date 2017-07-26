import React from 'react';
import ExportCsv from '../../api/csv';


export default class Introduction extends React.Component {
  render() {
    return (
      <div className="banner banner-wallpaper">
        <div className="jumbotron text-center banner-content">
          <div className="banner-content-details">
            <h1 className="display-3">hey guys,</h1>
            <p className="lead">this application provides you a way to marking and sharing location with others.</p>
            <hr className="my-4" />
            <p className="lead">
              <a className="btn btn-primary" href="https://github.com/nhquocvinh/location-store" role="button">Source Code</a>&nbsp;&nbsp;&nbsp;
              <a className="btn btn-primary" type="button" onClick={ExportCsv} role="button">Export Locations</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

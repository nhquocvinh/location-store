import React from 'react';
import { Link } from 'react-router-dom';


export default class Introduction extends React.Component {
  render() {
    return (
      <ul className="list-inline header-container">
        <li className="list-inline-item header-name">
          <Link exact to="/">{'Location Store'}</Link>
        </li>
        <ul className="list-inline-item header-nav float-right">
          <li className="list-inline-item active">
            <Link exact to="/home">Home</Link>
          </li>
          <li className="list-inline-item nav-layout">
            <Link exact to="/about">About</Link>
          </li>
        </ul>
      </ul>
    );
  }
}

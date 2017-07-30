import React from 'react';
import { Header } from 'semantic-ui-react';

const customStyle = {
  'margin-top': 40,
};

const Footer = () => (
  <div className="row" style={customStyle}>
    <Header as="h3" className="ui secondary inverted red segment center aligned no-border-radius">&copy; {new Date().getFullYear()} Vinh Nguyen</Header>
  </div>
);

export default Footer;

import React from 'react';


export default class Content extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    const customeStyle = {
      color: '#fafafa',
      fontSize: '20px',
    };

    return (
      <footer className="footer">
        <div className="container">
          <span style={customeStyle}>&copy; {currentYear} Vinh Nguyen</span>
        </div>
      </footer>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';


export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState(() => ({ activeItem: name }));
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui container-fluid">
        <Menu stackable pointing secondary size="large">
          <Menu.Item>
            <Header as="h1" color="red">Location Store</Header>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <Link exact to="/home">Home</Link>
            </Menu.Item>

            <Menu.Item
              name="about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              <Link exact to="/about">About</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

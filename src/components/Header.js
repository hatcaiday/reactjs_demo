import React from 'react';
import UserForm from './bodies/UserForm';

class Header extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>
            Header
          </th>
          <th>
            <button onClick={this.props.handleAddUserClick}>
              Add User
            </button>
          </th>
        </tr>
      </thead>
    )
  }
}

export default Header;

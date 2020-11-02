import React from 'react';
import UserForm from './bodies/UserForm';
import UserList from './bodies/UserList';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    const users = this.state.users.slice();

    users.push(user);
    this.setState({
      users: users
    });

    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  render() {
    const listUsers = JSON.parse(localStorage.getItem('users'));

    return (
      <tbody>
        <tr>
          <td className="custom-td">
            <h5>List User</h5>
            <UserList users={listUsers} />
          </td>
          <td className="custom-td">
            {!this.props.isAddUser &&
              <h5>Detail</h5>
            }
            {this.props.isAddUser &&
              <UserForm addUser={this.addUser} />
            }
          </td>
        </tr>
      </tbody>
    )
  }
}

export default Body;

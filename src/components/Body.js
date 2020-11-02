import React from 'react';
import UserForm from './bodies/UserForm';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    this.setState({
      users: this.state.users.push(user)
    });

    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  render() {
    return (
      <tbody>
        <tr>
          <td className="custom-td">
            <h5>List User</h5>
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

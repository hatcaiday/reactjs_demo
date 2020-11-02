import React from 'react';

class UserList extends React.Component {
  render() {
    return(
      <table className="table">
        <thead>
          <tr>
            <th>#Index</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((user, index) =>
            <tr key={index}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
            )}
        </tbody>
      </table>
    )
  }

}

export default UserList;

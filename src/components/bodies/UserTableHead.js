import React from 'react';

class UserTableHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
    )
  }
}

export default UserTableHead;

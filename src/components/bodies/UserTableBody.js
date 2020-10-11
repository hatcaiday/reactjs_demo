import React from 'react';
import UserTableRow from './UserTableRow';

class UserTableBody extends React.Component {
  render() {
    console.log(this.props.isEdit);
    return (
      <tbody>
        {this.props.users.map((user, i) => (
          <UserTableRow user={user}
            key={i}
            isEdit={this.props.isEdit}
            focusUserId={this.props.focusUserId}
            handleFocus={this.props.handleFocus}
            editUser={this.props.editUser}
            handleEditClick={this.props.handleEditClick}
            isDelete={this.props.isDelete}
            handleDeleteClick={this.props.handleDeleteClick}
          />
        )
        )}
      </tbody>
    )
  }
}

export default UserTableBody;

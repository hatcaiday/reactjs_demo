import React from 'react';
import UserTableHead from './UserTableHead';
import UserTableBody from './UserTableBody';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFocus = (focusUserId) => {
    this.props.changeBodyState('focusUserId', focusUserId);
  }

  handleEditClick = (id) => {
    this.props.changeBodyState('isEdit', true)
  }


  render() {
    return (
      <div>
        <div>
          <h3>List User</h3>
        </div>
        <table className="table table-bordered">
          <UserTableHead />
          <UserTableBody
            users={this.props.users}
            isEdit={this.props.isEdit}
            focusUserId={this.props.focusUserId}
            handleFocus={this.handleFocus}
            handleEditClick={this.handleEditClick}
            isDelete={this.props.isDelete}
            deleteUser={this.props.deleteUser}
          />
        </table>
      </div>
    )
  }
}

export default UserList;

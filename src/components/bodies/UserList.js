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

  handleDeleteClick = (id) => {
    debugger
    this.props.changeBodyState('isDelete', true)
  }

  editUser = () => {
    this.props.changeBodyStateFocusUser('isEdit', true);
  }

  render() {
    // console.log(this.props)
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
            editUser={this.editUser}
            handleEditClick={this.handleEditClick}
            isDelete={this.props.isDelete}
            handleDeleteClick={this.handleDeleteClick}
          />
        </table>
      </div>
    )
  }
}

export default UserList;

import React from 'react';
import UserList from './bodies/UserList';
import UserForm from './bodies/UserForm';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {id: 1, name: "User1", email: "user1@example.com"},
        {id: 2, name: "User2", email: "user2@example.com"}
      ],
      isEdit: false,
      focusUserId: null,
      isDelete: false
    }
  }

  changeBodyState = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  changeBodyStateFocusUser = (focusUser) => {
    const {users} = this.state;

    if (focusUser.id === this.state.focusUserId) {
      const user_index = users.findIndex(user => user.id === focusUser.id)
      users.splice(user_index, 1);

      this.setState({users: users});
    }
  }

  changeBodyStateDeleteUser = (focusUser) => {
    debugger
    const {users} = this.state;

    if (focusUser.id === this.state.focusUserId) {
      const user_index = users.findIndex(user => user.id === focusUser.id)
      users[user_index].name = focusUser.name;
      users[user_index].email = focusUser.email;
      this.setState({users: users});
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm border">
          <UserList
            users={this.state.users}
            focusUserId={this.state.focusUserId}
            changeBodyState={this.changeBodyState}
            changeBodyStateFocusUser={this.changeBodyStateFocusUser}
            changeBodyStateDeleteUser={this.changeBodyStateDeleteUser}
            isEdit={this.state.isEdit}
            isDelete={this.state.isDelete}
          />
        </div>

        <div className="col-sm border">
          {
            this.state.isEdit &&
            <UserForm
              user={this.state.isEdit ? this.state.users[this.state.focusUserId - 1] : null}
              changeBodyStateFocusUser={this.changeBodyStateFocusUser}
            />
          }
        </div>
      </div>
    )
  }
}

export default Body;

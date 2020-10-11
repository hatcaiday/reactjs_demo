import React from 'react';
import UserForm from './UserForm';

class UserTableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.user.id,
      name: props.user.name,
      email: props.user.email
    }
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.user !== prevProps.user) {
  //     this.setState({
  //       name: this.props.user.name,
  //       email: this.props.user.email
  //     })
  //   }
  // }

  render() {
    // console.log(this.props.isDelete)
    const {
      focusUserId, isEdit, isDelete
      } = this.props

    return (
      <tr onMouseEnter={() => this.props.handleFocus(this.props.user.id)}
        onMouseLeave={() => this.props.handleFocus(this.props.user.id)}>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>
          {
            !isEdit && this.props.user.id === focusUserId ?
              <button onClick={this.props.handleEditClick}>Edit</button> : ''
          }
        </td>
        <td>
          {
            !isDelete && this.props.user.id === focusUserId ?
            <button onClick={this.handleDeleteClick}>Delete</button> : ''
          }
        </td>
      </tr>
    )
  }
}

export default UserTableRow;

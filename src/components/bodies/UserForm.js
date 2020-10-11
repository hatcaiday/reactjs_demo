import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.user.id,
      name: props.user.name,
      email: props.user.email
    }
  }

  onClickSave = () => {
    const currentUser = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email
    }
    this.props.editUser(currentUser);
  }

  handleChange = (event) => {
    const input = event.target;

    this.setState({[input.name]: input.value})
  }

  render() {
    console.log(this.props.user)
    if (!this.props.user) return null;

    return (
      <form>
        <div className="form-group">
          <label >Name</label>
          <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input name="email" className="form-control" value={this.state.email} onChange={this.handleChange}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.props.editUser}>Cancel</button>
        <button type="submit" className="btn btn-primary" onClick={this.onClickSave}>Save</button>
      </form>
    )
  }
}

export default UserForm;

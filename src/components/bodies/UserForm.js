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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        name: this.props.user.name,
        email: this.props.user.email
      })
    }
  }

  onClickSave = () => {
    const currentUser = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email
    }
    this.props.changeBodyStateFocusUser(currentUser);
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    if (!this.props.user) return null;

    return (
      <form>
        <div className="form-group">
          <label >Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName}></input>
        </div>
        <div className="form-group">
          <label >Name</label>
          <input className="form-control" value={this.state.email} onChange={this.handleChangeEmail}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.props.changeBodyStateFocusUser}>Cancel</button>
        <button type="submit" className="btn btn-primary" onClick={this.onClickSave}>Save</button>
      </form>
    )
  }
}

export default UserForm;

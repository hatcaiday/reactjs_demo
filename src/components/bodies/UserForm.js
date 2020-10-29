import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })

  }

  handleSubmit(event) {
    const user = {name: this.state.name, email: this.state.email}
    this.props.addUser(user);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export default UserForm;

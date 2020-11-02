import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddUser: false
    }

    this.handleAddUserClick = this.handleAddUserClick.bind(this);
  }

  handleAddUserClick() {
    this.setState({
      isAddUser: true
    })
  }

  render() {
    return (
      <div className="App">
        <table className="table table-bordered">
          <Header
            handleAddUserClick={this.handleAddUserClick}
          />
          <Body isAddUser={this.state.isAddUser}/>
        </table>
      </div>
    )
  }
}

export default App;

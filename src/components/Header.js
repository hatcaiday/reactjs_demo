import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm border">
          Header
        </div>

        <div className="col-sm border">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    )
  }
}

export default Header;

import React, { Component } from "react";

class Header extends Component {
  state = {
    active: 'active',
    keywords: "",
  };

  inputChange(event) {
    const value = event.target.value === '' ? 'active' : 'not-active';
    this.setState({
      active: value,
      keywords: event.target.value
    });
  }

  render() {
    return (
      <header className={this.state.active}>
        <div className="logo" onClick={this.hello}>
          Logo
        </div>
        <input onChange={(event) => this.inputChange(event)} />

      </header>
    );
  }
}

export default Header;

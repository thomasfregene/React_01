import React, { Component } from "react";

class Header extends Component {
  state = {
    keywords: "",
  };

  inputChange(event) {
    this.setState({
      keywords: event.target.value,
    });
  }

  render() {
    return (
      <header>
        <div className="logo" onClick={this.hello}>
          Logo
        </div>
        <input onChange={(event) => this.inputChange(event)} />

      </header>
    );
  }
}

export default Header;

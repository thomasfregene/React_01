import React, { Component } from "react";

class Header extends Component {
  // state = {
  //   active: 'active',
  //   keywords: "",
  // };

  // inputChange(event) {
  //   const value = event.target.value === '' ? 'active' : 'not-active';
  //   this.setState({
  //     active: value,
  //     keywords: event.target.value
  //   });
  // }

  render() {
    console.log(this.props.keywords)
    return (
      <header>
        <div className="logo">
          Logo
        </div>
        <input onChange={this.props.keywords} />

      </header>
    );
  }
}

export default Header;

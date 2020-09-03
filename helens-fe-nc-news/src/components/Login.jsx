import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleLoginSubmit}>
          <label htmlFor="users">Login</label>

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;

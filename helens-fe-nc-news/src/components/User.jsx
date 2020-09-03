import React, { Component } from "react";
import UserProfile from "./UserProfile";
import AllArticles from "./AllArticles";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";

class User extends Component {
  state = {
    user: {},
    isLoading: true,
    err: null,
  };

  render() {
    const { username } = this.props;
    const { user, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler />;
    return (
      <div>
        <UserProfile user={user} />
        <AllArticles author={username} />
      </div>
    );
  }
}

export default User;

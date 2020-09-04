import React, { Component } from "react";
import UserProfile from "./UserProfile";
import AllArticles from "./AllArticles";
import Loader from "./Loader";
import ErrorHandler from "./ErrorHandler";
import Nav from "./Nav";
import * as api from "../utils/api";

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
        <Nav />
        <UserProfile user={user} />
        <AllArticles author={username} />
      </div>
    );
  }

  componentDidMount() {
    this.getUser()
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
      });
  }

  getUser() {
    const { username } = this.props;
    return api.getUserByUsername(username);
  }
}
export default User;

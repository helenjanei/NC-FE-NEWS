import React, { Component } from "react";

import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";
import Loader from "./Loader";

class CommentAdder extends Component {
  state = {
    body: "",
    err: "",
    isLoading: true,
  };

  handleInputChange = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { username } = this.props;

    const { body } = this.state;

    const { article_id } = this.props;

    api
      .postComment(article_id, username, body)
      .then((postedComment) => {
        this.props.addCommentToState(postedComment);
        this.setState({ body: "" });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const { body, err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;
    return (
      <form onSubmit={this.handleSubmitForm} className="comment-adder">
        <textarea
          className="comment-box"
          onChange={this.handleInputChange}
          value={body}
          rows="10"
          cols="40"
          type="text"
          placeholder="type comment here"
          required
        />

        <button className="submit-comment">Submit Comment</button>
      </form>
    );
  }
}

export default CommentAdder;

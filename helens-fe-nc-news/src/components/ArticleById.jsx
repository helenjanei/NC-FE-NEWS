import React, { Component } from "react";
import Loader from "./Loader";
import CommentsList from "./CommentsList";
import VoteHandler from "./VoteHandler";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";
import Nav from "./Nav";
import "../App.css";

class ArticleById extends Component {
  state = {
    articleById: {},
    isLoading: true,
    err: "",
  };

  render() {
    const {
      article_id,
      title,
      author,
      body,
      topic,
      votes,
      comment_count,
      created_at,
    } = this.state.articleById;

    const { err, isLoading } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrorHandler msg={err} />;

    return (
      <div>
        <Nav />
        <div className="article-wrapper">
          <div className="article">
            <article className="article-by-id">
              <h2 className="topic-header">
                {" "}
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </h2>
              <h2 className="title">{title}</h2>
              <p>
                by {author} {new Date(created_at).toLocaleString()}
              </p>
              <p>{body}</p>
              <VoteHandler votes={votes} article_id={article_id} />{" "}
              <p> ⚘ {comment_count} comments</p>
              <CommentsList
                article_id={this.props.article_id}
                username={this.props.username}
              />
            </article>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    const article_id = this.props.article_id;
    api
      .getArticleById(article_id)
      .then((articleById) => {
        this.setState({ articleById, isLoading: false, err: "" });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };
}

export default ArticleById;

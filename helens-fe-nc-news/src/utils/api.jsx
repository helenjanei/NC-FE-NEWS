import axios from "axios";

const baseURL = "https://helen-be-nc-news.herokuapp.com/api";

export const getArticleById = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    })
    .catch((err) => {
      this.setState({ err: err.response.data.msg, isLoading: false });
    });
};

export const getArticles = (topic, sort_by) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
      },
    })
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVote = (article_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, {
      inc_votes: inc_votes,
    })
    .then(({ data: { patchedArticle } }) => {
      return patchedArticle;
    });
};

export const patchCommentVote = (comment_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/comments/${comment_id}`, {
      inc_votes: inc_votes,
    })
    .then(({ data: { patchedComment } }) => {
      return patchedComment;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteCommentByCommentId = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticlesByTopic = (topic) => {
  return axios
    .get(`${baseURL}/articles/${topic}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getUserByUsername = (username) => {
  return axios.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

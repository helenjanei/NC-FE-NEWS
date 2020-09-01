import axios from "axios";

const baseURL = "https://helen-be-nc-news.herokuapp.com/api";

export const getArticleById = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { articleById } }) => {
      return articleById;
    });
};

export const getArticles = (topic, sort_by) => {
  console.log("---> api");
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        sort_by: sort_by,
      },
    })
    .then(({ data: { articles } }) => {
      console.log(articles);
      return articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

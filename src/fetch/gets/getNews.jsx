import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getNews = async (page) => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines", {
    params: {
      country: "us",
      apiKey: API_KEY,
      pageSize: 4,
      page: page,
    },
  });

  return response.data.articles;
};

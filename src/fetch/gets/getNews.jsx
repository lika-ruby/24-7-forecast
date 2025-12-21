const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getNews = async (page) => {
  const pageSize = 4;

  const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=${pageSize}&page=${page}&token=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.articles || [];
};

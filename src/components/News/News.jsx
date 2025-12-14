import { getNews } from "../../fetch/gets/getNews.jsx";
import { Container } from "../Container/Container.jsx";
import { New } from "../New/New.jsx";
import { NewsS, Title, List, Button } from "./News.js";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const News = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getNews(page).then((data) => {
      const newsWithId = data.map((item) => ({ ...item, id: nanoid() }));

      setNews((prev) => {
        const filtered = newsWithId.filter(
          (newItem) => !prev.some((oldItem) => oldItem.url === newItem.url)
        );
        return [...prev, ...filtered];
      });
    });
  }, [page]);

  const addPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <NewsS>
      <Container>
        <Title>Attention! Breaking News</Title>
        <List>
          {console.log(news)}
          {news.map((n) => (
            <New
              key={n.id}
              id={n.id}
              name={n.title}
              img={n.urlToImage}
              url={n.url}
            />
          ))}
        </List>
        <Button onClick={addPage}>See more</Button>
      </Container>
    </NewsS>
  );
};

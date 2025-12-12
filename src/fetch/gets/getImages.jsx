import axios from "axios";

export const getImages = async () => {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: "49689044-b50b4b2a27f84104cd981c364",
      q: "nature",
      image_type: "photo",
      per_page: 20,
    },
  });

  return response.data.hits.map((item) => item.largeImageURL);
};

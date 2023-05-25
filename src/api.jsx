import axios from "axios";

export const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Kg5DFP702Xh_GEhzv3ipwUecCZHzImrcfQG1y29pYbM",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

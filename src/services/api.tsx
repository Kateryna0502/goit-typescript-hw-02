import axios from "axios";

const requestPhotos = async (query, pageNumber) => {
    const params = {
    query: query,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };
  const { data } = await axios.get("https://api.unsplash.com/search/photos?client_id=lD1P932jYFcxUcvysE1bhjA5NVgfVCLU2ML6haokAUE",
  
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );
  // console.log (data)
  return data;
  
};



export default requestPhotos;
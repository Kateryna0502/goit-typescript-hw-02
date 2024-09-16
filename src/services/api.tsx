import axios from "axios";

interface Data {
  id: number;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
};

interface RequestPhotos {
  results: Data[];
  total_pages: number;
  per_page: number;
};

const requestPhotos = async (query: string, pageNumber: number): Promise<RequestPhotos> => {
    const params = {
    query: query,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };
  const { data } = await axios.get<RequestPhotos>("https://api.unsplash.com/search/photos?client_id=lD1P932jYFcxUcvysE1bhjA5NVgfVCLU2ML6haokAUE",
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
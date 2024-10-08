import axios from "axios";

export interface Photos {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt: string;
  likes: number;
  description?: string;
};

export interface RequestPhotos {
  results: Photos[];
  total_pages: number;
  total: number;
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
  console.log (data)
  return data;
  
};



export default requestPhotos;
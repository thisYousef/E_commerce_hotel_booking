import { useEffect, useState } from 'react';

const useUnsplashImages = (query, perPage, page, orientation) => {
  const [imagesApi, setImagesApi] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_UNSPLASH_API_URL;
  const apiKey = process.env.REACT_APP_UNSPLASH_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      let fullUrl = `${apiUrl}?query=${query}&page=${page}&per_page=${perPage}&orientation=${orientation}&client_id=${apiKey}`
      try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setImagesApi(jsonData.results);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch Unsplash data:", error);
        throw new Error("Failed to fetch data");
      }
    };
    fetchImages();
  }, [query, perPage, page, orientation]);

  return { imagesApi, error };
};
export default useUnsplashImages
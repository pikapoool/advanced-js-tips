import { useState } from "react";

export const useFetch = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cachedData = localstorage.getItem(URL);

    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [URL]);

  useEffect(() => {
    localstorage.setItem(URL, JSON.stringify(data));
  }, [data]);

  return data;
};
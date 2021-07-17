import { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch some data
  useEffect(() => {
    let isRendered = false;

    (async () => {
      try {
        const response = await axios.get(url);
        if (!isRendered) {
          unstable_batchedUpdates(() => {
            setData(response.data);
            setIsLoading(false);
            setError(null);
          });
        }
      } catch (error) {
        setIsLoading(true);
        setError(error.message);
      }
    })();

    return () => {
      isRendered = true;
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

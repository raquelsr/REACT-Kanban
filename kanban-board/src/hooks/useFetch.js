import { useState, useEffect } from 'react';

export const useFetch = (fetchRequestList, ...params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      Promise.all(fetchRequestList.map((request) => request(...params)))
        .then((responses) => {
          const error = responses.some((res) => !res.ok);
          if (error) throw new Error('Request has failed.');
          Promise.all(responses.map((response) => response.json())).then(
            (data) => {
              setData(data);
              setIsLoading(false);
            }
          );
        })
        .catch((e) => {
          setIsLoading(false);
          setError(true);
          console.error(e);
        });
    }
    fetchData();
  }, []);

  const updateData = (data) => setData(data);

  return { isLoading, data, updateData, error };
};

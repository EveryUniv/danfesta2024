import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const useGet = (path: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    await api
      .get(path, config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    data,
    isLoading,
    error,
    fetch,
  };
};

// const usePost = (path: string, body: any, config: AxiosRequestConfig) => {
//   axios.post();
// };

export { useGet };

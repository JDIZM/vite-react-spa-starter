import { Photo } from "@/types/photos";
import { useState } from "react";

export const useFetchPhotosApi = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

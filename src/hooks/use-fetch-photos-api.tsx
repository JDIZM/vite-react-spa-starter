import { useState } from "react";

// TODO fetch data with redux, api hook or something else?
// https://www.robinwieruch.de/react-hooks-fetch-data
export const useFetchPhotosApi = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  // when to useCallback?
  // https://www.w3schools.com/react/react_usecallback.asp#:~:text=One%20reason%20to%20use%20useCallback,in%20the%20React.memo%20section.

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

  // useEffect(() => {
  //   // console.log("useEffect ran, userid is: ", userId);
  //   fetchData(`https://jsonplaceholder.typicode.com/photos`);
  // }, []);

  return { data, isLoading, error, fetchData };
};

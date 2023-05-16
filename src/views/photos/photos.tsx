import Layout from "@/layout/base-layout/base-layout";
import cx from "classnames";
import { RootState } from "@/store";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchPhotos } from "@/store/slices/photos";
import { useFetchPhotosApi } from "@/hooks/use-fetch-photos-api";
import { Photo } from "@/types/photos";
import "./photos.scss";

// TODO fetch data with redux, api hook or something else?
// TODO add search params to url
export const PhotosView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, error, isLoading, fetchData } = useFetchPhotosApi();

  const [photo, setPhoto] = React.useState<Photo | null>(null);

  // const fetchDataApi = useCallback(async () => {
  //   console.log("fetching events");
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  //   const data = await response.json();
  //   console.log("data", data);
  //   return data;
  // }, []);

  // useEffect(() => {
  //   const getEvents = async () => {
  //     const result = await fetchEvents();
  //     console.log("result", result);
  //   };
  //   getEvents();
  // }, [fetchEvents]);

  // const events = useSelector((state: RootState) => state.events);
  // const dispatch = useDispatch();

  // console.log("events", events);
  // const a = fetchEvents([{ id: "1" }, { id: "2" }]);

  // dispatch(a);

  useEffect(() => {
    if (query) {
      fetchData(`https://jsonplaceholder.typicode.com/photos?id=${query}`);
      return;
    }
    fetchData("https://jsonplaceholder.typicode.com/photos");
  }, [query]);

  useEffect(() => {
    setPhoto(data[0]);
  }, [data, query]);

  return (
    <Layout layout="default" className={cx("photos")}>
      <div className="container">
        {isLoading && <p>Loading...</p>}
        {photo && (
          <>
            <header>
              <h1>{photo.title}</h1>
            </header>
            <section>
              <img src={photo.url} alt="a test" />
              <p>
                <strong>Album ID:</strong> {photo.albumId}
              </p>
              <p>
                <strong>ID:</strong> {photo.id}
              </p>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

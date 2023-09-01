import Layout from "@/layout/base-layout/base-layout";
import cx from "classnames";
import { RootState } from "@/store";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setPhotos } from "@/store/slices/photos";
import { useFetchPhotosApi } from "@/hooks/use-fetch-photos-api";
import { Photo } from "@/types/photos";
import "./photos.scss";

export const PhotosView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data, error, isLoading, fetchData } = useFetchPhotosApi();

  const [photo, setPhoto] = useState<Photo | null>(null);

  const photos = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      fetchData("https://jsonplaceholder.typicode.com/photos");
      return;
    }

    fetchData(`https://jsonplaceholder.typicode.com/photos?id=${query}`);
  }, [query]);

  useEffect(() => {
    dispatch(setPhotos(data));
  }, [data]);

  useEffect(() => {
    setPhoto(photos.data[0]);
  }, [photos, query]);

  return (
    <Layout layout="default" className={cx("photos")}>
      <div className="container">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
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

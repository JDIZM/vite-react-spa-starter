import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "@/types/photos";

export interface PhotosState {
  data: Photo[];
}

const initialState: PhotosState = {
  data: []
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.data = action.payload;
    }
  }
});
console.log("photosSlice", photosSlice);

export const { setPhotos } = photosSlice.actions;

export default photosSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geolocation: { lat: 20.29167348662807, lng: 85.81323274707682 },
};

const geolocationSlice = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    saveGeoCode: (state, action) => {
      return { ...state, geolocation: action.payload };
    },
  },
});

export const { saveGeoCode } = geolocationSlice.actions;
export default geolocationSlice;

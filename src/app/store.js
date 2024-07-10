import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search/searchSlice";
import geolocationSlice from "../features/geolocation/geolocationSlice";
import darkModeSlice from "../features/theme/themeSlice";
import { weatherApi } from "../services/WeatherApi"; 

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    geolocation: geolocationSlice.reducer,
    darkMode: darkModeSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

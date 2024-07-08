import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { saveGeoCode } from "./features/geolocation/geolocationSlice";
import { useDispatch } from "react-redux";
import { saveLocation } from "./features/search/searchSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(saveGeoCode({ lat: latitude, lng: longitude }));
            const Location = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await Location.json();
            console.log(data);
            dispatch(
              saveLocation(data.address.city + " , " + data.address.country)
            );
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };
    fetchGeoLocation();
  }, []);

  return (
    <div className="container mx-auto px-1  md:px-[10vw] ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

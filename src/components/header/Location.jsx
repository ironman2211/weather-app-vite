import { MapPinIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

function Location() {
  const selectedLocation = useSelector((state) => state.search.location);

  return (
    <>
      {selectedLocation && (
        <div className="flex justify-center md:flex-row flex-col gap-1  items-center p-3">
          <MapPinIcon className="h-6 flex-none" />
          <div className="text-[.6rem] sm:text-sm text-center  ">
            {selectedLocation}
          </div>
        </div>
      )}
    </>
  );
}
export default Location;

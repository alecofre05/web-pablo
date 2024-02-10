import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const API_KEY = 'AIzaSyAr-3dfyTZkcQjvb-h_CYn5LyZlXDxvwTQ';

const MyMap = () => {
  const [center, setCenter] = useState({
    lat: -34.605655670166016,
    lng: -58.37629318237305,
  });
  const zoom = 17;

  return (
    <div style={{ height: "400px", width: "500px", margin: 0, padding: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          const marker = new maps.Marker({
            position: center,
            map: map,
            title: "My location",
          });
        }}
      />
    </div>
  );
};

export default MyMap;

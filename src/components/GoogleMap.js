import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const options = {
  zoomControl: true,
  mapTypeControl: true,
  streetViewControl: true,
  fullscreenControl: true,
  disableDefaultUI: false,
};

const MyMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDmRSwUuy78V5PzpJ6XHokpyxcintUNcWc">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={8}
        center={{ lat: 18.509774764920593, lng: 73.830403261376 }}
        options={options}
      />
    </LoadScript>
  );
};

export default MyMap();

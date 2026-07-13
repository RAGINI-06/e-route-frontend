import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import { useEffect } from "react";

function MapFix({ route }) {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize(); // fixes blank map issue
    }, 200);
  }, []);

  useEffect(() => {
    if (route && route.length > 0) {
      map.fitBounds(route);
    }
  }, [route]);

  return null;
}

export default function MapView({ route = [] }) {
  const defaultPos = [12.9716, 77.5946];

  return (
    <MapContainer
      center={defaultPos}
      zoom={6}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {route.length > 0 && (
        <>
          <Polyline positions={route} color="green" />
          <Marker position={route[0]} />
          <Marker position={route[route.length - 1]} />
        </>
      )} 

      <MapFix route={route} />
    </MapContainer>
  );
}
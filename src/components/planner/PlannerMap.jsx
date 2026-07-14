import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";

function FitBounds({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (!coordinates || coordinates.length === 0) return;

    map.fitBounds(coordinates, {
      padding: [50, 50],
    });
  }, [coordinates, map]);

  return null;
}

function PlannerMap({ routeData }) {
  const coordinates = routeData?.coordinates || [];

  const source =
    coordinates.length > 0 ? coordinates[0] : [20.5937, 78.9629];

  const destination =
    coordinates.length > 0
      ? coordinates[coordinates.length - 1]
      : [20.5937, 78.9629];

  return (
    <div className="
bg-white
border
border-slate-200
rounded-xl
overflow-hidden
shadow-sm
h-[320px]
sm:h-[420px]
lg:h-[520px]
xl:h-[650px]
">

      <MapContainer
        center={source}
        zoom={6}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Source */}
        {coordinates.length > 0 && (
          <Marker position={source} />
        )}

        {/* Destination */}
        {coordinates.length > 0 && (
          <Marker position={destination} />
        )}

        {/* Route */}
        {coordinates.length > 0 && (
          <Polyline
            positions={coordinates}
            pathOptions={{
              color: "#16a34a",
              weight: 6,
            }}
          />
        )}

        <FitBounds coordinates={coordinates} />

      </MapContainer>

    </div>
  );
}

export default PlannerMap;
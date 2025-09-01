import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import MarkerPopup from "./MarkerPopup";
import { useEffect, useRef } from "react";
import { getMarkerIcon } from "../utils/icons";


// const getMarkerIcon = (mag) => {
//   let color = "green";
//   if (mag >= 4 && mag < 6) color = "orange";
//   if (mag >= 6) color = "red";

//   return L.divIcon({
//     className: "custom-icon",
//     html: `<div style="background-color:${color};width:12px;height:12px;border-radius:50%;border:2px solid white"></div>`,
//   });
// };

// Fly to selected earthquake
function FlyToEq({ selectedEq }) {
  const map = useMap();

  useEffect(() => {
    if (selectedEq) {
      const [lng, lat] = selectedEq.geometry.coordinates;
      map.flyTo([lat, lng], 6, { duration: 2 });
    }
  }, [selectedEq, map]);

  return null;
}

// ✅ New component for marker (hooks allowed here)
function EarthquakeMarker({ eq, selectedEq }) {
  const markerRef = useRef(null);

  useEffect(() => {
    if (selectedEq && selectedEq.id === eq.id && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [selectedEq, eq.id]);

  return (
    <Marker
      ref={markerRef}
      position={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
      icon={getMarkerIcon(eq.properties.mag)}
    >
      <Popup>
        <MarkerPopup eq={eq} />
      </Popup>
    </Marker>
  );
}

function MapView({ earthquakes, selectedEq }) {
  return (
    <div className="flex-1 h-2/3 md:h-full">
      <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <FlyToEq selectedEq={selectedEq} />

        {earthquakes.map((eq) => (
          <EarthquakeMarker key={eq.id} eq={eq} selectedEq={selectedEq} />
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;

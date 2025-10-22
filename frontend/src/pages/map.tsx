import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons (important for Leaflet + Webpack)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Map props
interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
  markerLabel?: string;
}

// Helper: Automatically move map when lat/lng changes
function ChangeView({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], zoom);
  }, [lat, lng, zoom, map]);
  return null;
}

// Main map component
const Map: React.FC<MapProps> = ({
  lat,
  lng,
  zoom = 13,
  markerLabel = "You are here!",
}) => {
  return (
    <div className="flex h-screen w-full">
      {/* Left half (empty or for future content) */}
      <div className="w-1/2 bg-gray-50 flex items-center justify-center text-gray-500">
        <p>review side</p>
      </div>

      {/* Right half with map */}
      <div className="w-1/2">
        <MapContainer
          center={[lat, lng]}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeView lat={lat} lng={lng} zoom={zoom} />
          <Marker position={[lat, lng]}>
            <Popup>{markerLabel}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

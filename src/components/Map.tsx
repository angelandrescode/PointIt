import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useLocation } from "../hooks/useLocation";
import { createRoot } from "react-dom/client";
import { UserLocationMarker } from "./UserLocationMarker";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { location, isLoading, isError } = useLocation();

  useEffect(() => {
    if (!mapRef.current) return;
    if (!location) return;

    // Create a custom marker element, in order to put it in the map.
    const el = document.createElement("div");
    const root = createRoot(el);
    root.render(<UserLocationMarker />);

    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: [location.coords.longitude, location.coords.latitude],
      zoom: 18,
    });

    new mapboxgl.Marker(el)

      .setLngLat([location.coords.longitude, location.coords.latitude])

      .addTo(map);

    return () => map.remove();
  }, [location]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Error getting location</h1>;
  }

  return <div ref={mapRef} className="w-full h-screen" />;
}

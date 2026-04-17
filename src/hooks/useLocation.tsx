import { useEffect, useState } from "react";

export function useLocation(): {
  location: GeolocationPosition | null;
  isLoading: boolean;
  isError: boolean;
} {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
      setIsLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => {
        localStorage.setItem("location", JSON.stringify(p));
        setLocation(p);
        setIsLoading(false);
      },
      (_) => {
        setIsError(true);
        setIsLoading(false);
      },
    );
  }, []);
  return { location, isLoading, isError };
}

import { useEffect, useState } from "react";

export default function useEarthquakes(timeRange) {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEarthquakes = () => {
    setLoading(true);
    setError(null);

    fetch(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timeRange}.geojson`
    )
      .then((res) => res.json())
      .then((data) => {
        setEarthquakes(data.features);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load earthquake data. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEarthquakes();
  }, [timeRange]);

  return { earthquakes, loading, error, fetchEarthquakes };
}

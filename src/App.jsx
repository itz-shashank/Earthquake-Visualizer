import { useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";
import useEarthquakes from "./hooks/useEarthquakes";

function App() {
  // Filters
  const [magnitude, setMagnitude] = useState(0);
  const [timeRange, setTimeRange] = useState("all_day");

  // Selected earthquake (for zoom + popup)
  const [selectedEq, setSelectedEq] = useState(null);

  // Custom hook for data fetching
  const { earthquakes, loading, error, fetchEarthquakes } =
    useEarthquakes(timeRange);

  // Magnitude filter applied here
  const filteredEarthquakes = earthquakes.filter(
    (eq) => eq.properties.mag >= magnitude
  );

  // Stable callback to avoid re-renders in child components
  const handleSelectEq = useCallback((eq) => {
    setSelectedEq(eq);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar
        earthquakes={filteredEarthquakes}
        loading={loading}
        error={error}
        onRetry={fetchEarthquakes}
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        onSelectEq={handleSelectEq}
        selectedEq={selectedEq}
      />
      <MapView earthquakes={filteredEarthquakes} selectedEq={selectedEq} />
    </div>
  );
}

export default App;

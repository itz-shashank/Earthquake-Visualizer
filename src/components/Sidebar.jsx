import EarthquakeList from "./EarthquakeList";
import Filters from "./Filters";
import LoadingSpinner from "./LoadingSpinner";

function Sidebar({
  earthquakes,
  loading,
  error,
  onRetry,
  magnitude,
  setMagnitude,
  timeRange,
  setTimeRange,
  onSelectEq,
  selectedEq,
}) {
  return (
    <div className="md:w-80 w-full h-1/3 md:h-full bg-gradient-to-b from-blue-50 to-white shadow-lg p-4 overflow-y-auto border-r">
      <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
        🌍 Earthquake Visualizer
      </h1>

      <div className="border-b border-gray-300 mb-4"></div>

      {/* Filters Section */}
      <Filters
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />

      {loading && <LoadingSpinner />}
      {error && (
        <div className="text-center">
          <p className="text-red-500 mb-2">{error}</p>
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <EarthquakeList
          earthquakes={earthquakes}
          onSelectEq={onSelectEq}
          selectedEq={selectedEq}
        />
      )}
    </div>
  );
}

export default Sidebar;

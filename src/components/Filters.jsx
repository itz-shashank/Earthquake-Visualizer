function Filters({ magnitude, setMagnitude, timeRange, setTimeRange }) {
  return (
    <div className="mb-6 bg-blue-50 p-3 rounded-lg shadow-inner">
      {/* Magnitude Filter */}
      <label className="block font-semibold mb-1 text-blue-700">
        Minimum Magnitude
      </label>
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={magnitude}
        onChange={(e) => setMagnitude(parseFloat(e.target.value))}
        className="w-full accent-blue-600"
      />
      <p className="text-sm text-blue-600 mb-4">≥ {magnitude}</p>

      {/* Time Range Filter */}
      <label className="block font-semibold mb-1 text-blue-700">
        Time Range
      </label>
      <select
        value={timeRange}
        onChange={(e) => setTimeRange(e.target.value)}
        className="w-full border rounded p-2 bg-white shadow-sm focus:ring focus:ring-blue-300"
      >
        <option value="all_day">Last 24 Hours</option>
        <option value="all_week">Last 7 Days</option>
        <option value="all_month">Last 30 Days</option>
      </select>
    </div>
  );
}

export default Filters;

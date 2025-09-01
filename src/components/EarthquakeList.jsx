import { memo } from "react";

function EarthquakeList({ earthquakes, onSelectEq, selectedEq }) {
  const getBadgeColor = (mag) => {
    if (mag >= 6) return "bg-red-600";
    if (mag >= 4) return "bg-orange-500";
    return "bg-green-500";
  };

  return (
    <ul className="space-y-3">
      {earthquakes.map((eq) => {
        const isActive = selectedEq && selectedEq.id === eq.id;
        const magColor = getBadgeColor(eq.properties.mag);

        return (
          <li
            key={eq.id}
            onClick={() => onSelectEq(eq)}
            className={`p-3 rounded-lg shadow-md border cursor-pointer transition 
              ${
                isActive
                  ? "bg-blue-600 text-white border-blue-700"
                  : "bg-white hover:bg-blue-100 border-gray-200"
              }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold truncate">{eq.properties.place}</p>
              <span
                className={`text-xs text-white px-2 py-1 rounded ${magColor}`}
              >
                {eq.properties.mag.toFixed(1)}
              </span>
            </div>
            <p
              className={`text-xs mt-1 ${
                isActive ? "text-blue-200" : "text-gray-500"
              }`}
            >
              {new Date(eq.properties.time).toLocaleString()}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(EarthquakeList);

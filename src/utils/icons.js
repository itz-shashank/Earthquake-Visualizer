import L from "leaflet";

export const getMarkerIcon = (mag) => {
  let color = "green";
  if (mag >= 4 && mag < 6) color = "orange";
  if (mag >= 6) color = "red";

  return L.divIcon({
    className: "custom-icon",
    html: `<div style="background-color:${color};
                  width:14px;height:14px;
                  border-radius:50%;
                  border:2px solid white"></div>`,
  });
};

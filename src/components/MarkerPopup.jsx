function MarkerPopup({ eq }) {
  return (
    <div>
      <strong>{eq.properties.place}</strong>
      <br />
      Magnitude: {eq.properties.mag}
      <br />
      Time: {new Date(eq.properties.time).toLocaleString()}
      <br />
      <a
        href={eq.properties.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 underline"
      >
        More Info
      </a>
    </div>
  );
}

export default MarkerPopup;

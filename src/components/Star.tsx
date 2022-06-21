const Star: React.FC<{ rating: number }> = ({ rating }) => {
  const ratingWidth = (Math.round((rating / 1) * 24 * 100) / 100).toString();
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <svg id="svgelem" height="24" width={ratingWidth}>
          <polygon
            points="12.5,1.25 5,22.5 23.75,7.5 1.25,7.5 20,22.5"
            fill="yellow"
          />
        </svg>
      </div>
      <div className="top-0 left-0">
        <svg id="svgelem" height="24" width="24">
          <polygon
            points="12.5,1.25 5,22.5 23.75,7.5 1.25,7.5 20,22.5"
            fill="grey"
          />
        </svg>
        <div></div>
      </div>
    </div>
  );
};

export default Star;

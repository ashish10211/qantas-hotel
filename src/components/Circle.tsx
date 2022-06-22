const Circle: React.FC<{ rating: number }> = ({ rating }) => {
  const ratingWidth = (Math.round((rating / 1) * 24 * 100) / 100).toString();
  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <svg id="svgelem" height="24" width="24">
          <circle cx="24" cy="24" r="24" fill="yellow" />
        </svg>
      </div>
      <div className="top-0 left-0">
        <svg id="svgelem" height="24" width="24">
          <circle cx="24" cy="24" r="24" fill="grey" />
        </svg>
        <div></div>
      </div>
    </div>
  );
};

export default Circle;

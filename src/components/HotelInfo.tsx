import Rating from "./Rating";
const HotelInfo = () => {
  return (
    <div className="px-5 flex flex-col">
      <div className="flex flex-row">
        <span className="font-bold text-xl">Sample hotel data</span>
        <div className="pl-5 flex flex-row">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
      <span className="font-light"> hotel address</span>
      <span className="font-medium mt-4 mb-11 text-red-500 underline">
        Room type
      </span>
      <span className="font-medium text-green-600">Free cancellation</span>
    </div>
  );
};

export default HotelInfo;

import qantas from "../public/images/qantas-logo.png";
import Image from "next/image";
import HotelInfo from "./HotelInfo";
import Prices from "./Prices";
import Rating from "./Rating";

const Hotel = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/3">
        <Image src={qantas} alt="Qantas Logo" />
      </div>
      <div className="flex place-content-between flex-row my-5 w-full">
        <div className="flex-1">
          <HotelInfo />
        </div>
        <div className="w-1/6">
          <Prices />
        </div>
      </div>
    </div>
  );
};

export default Hotel;

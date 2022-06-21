import { HotelData } from "./Hotel";
import Rating from "./Rating";

type HotelInfoProps = Pick<
  HotelData,
  | "hotelName"
  | "amount"
  | "hotelAddress"
  | "isFreeCancellation"
  | "roomType"
  | "isStar"
>;
const HotelInfo: React.FC<HotelInfoProps> = ({
  hotelName,
  amount,
  hotelAddress,
  isFreeCancellation,
  roomType,
  isStar,
}) => {
  return (
    <div className="px-5 flex flex-col">
      <div className="flex flex-row">
        <span className="font-bold text-xl">{hotelName}</span>
        <div className="pl-5 flex flex-row">
          <Rating amount={amount} isStar={isStar} />
        </div>
      </div>
      {hotelAddress.map((address) => {
        return (
          <p className="font-light" key={address}>
            {address}
          </p>
        );
      })}
      <span className="font-medium mt-4 mb-11 text-red-500 underline">
        {roomType}
      </span>
      {isFreeCancellation ? (
        <span className="font-medium text-green-600">Free cancellation</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default HotelInfo;

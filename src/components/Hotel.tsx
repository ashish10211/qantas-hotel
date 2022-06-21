import HotelInfo from "./HotelInfo";
import Prices from "./Prices";

export type HotelData = {
  hotelName: string;
  amount: number;
  hotelAddress: string[];
  roomType: string;
  isFreeCancellation?: boolean;
  isStar: boolean;
  price: number;
  save?: number;
  url: string;
  priceCurrency: string;
  savingCurrency?: string;
};
const Hotel: React.FC<HotelData> = ({
  hotelName,
  amount,
  hotelAddress,
  isFreeCancellation,
  roomType,
  isStar,
  price,
  save,
  url,
  savingCurrency,
  priceCurrency,
}) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/3">
        <img src={url} width="300" height="330" />
      </div>
      <div className="flex place-content-between flex-row my-5 w-full">
        <div className="flex-1">
          <HotelInfo
            hotelName={hotelName}
            amount={amount}
            hotelAddress={hotelAddress}
            isFreeCancellation={isFreeCancellation}
            roomType={roomType}
            isStar={isStar}
          />
        </div>
        <div className="w-1/6">
          <Prices
            price={price}
            save={save}
            savingCurrency={savingCurrency}
            priceCurrency={priceCurrency}
          />
        </div>
      </div>
    </div>
  );
};

export default Hotel;

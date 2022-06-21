import Hotel from "./Hotel";
import { getHotels, HotelData } from "../api/getHotels";
import { useState, useEffect } from "react";

const ContentContainer: React.FC<{ hotels: HotelData[] }> = ({ hotels }) => {
  const [hotelDetail, setHotel] = useState<HotelData[]>(hotels);
  const [error, setError] = useState<boolean>(false);

  const sortFn = (asc: boolean) => {
    if (asc) {
      setHotel((h) =>
        [...h].sort(
          (a, b) =>
            Number(a.offer.displayPrice.amount) -
            Number(b.offer.displayPrice.amount)
        )
      );
    } else {
      setHotel((h) =>
        [...h].sort(
          (a, b) =>
            Number(b.offer.displayPrice.amount) -
            Number(a.offer.displayPrice.amount)
        )
      );
    }
  };

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className="flex place-content-between my-5">
        <span>{hotelDetail.length} hotels in sydney</span>
        <Dropdown sortFn={sortFn} />
      </div>
      {hotelDetail.map((hotel) => {
        return (
          <div key={hotel.id}>
            <hr />
            <Hotel
              hotelName={hotel.property.title}
              amount={hotel.property.rating.ratingValue}
              hotelAddress={hotel.property.address}
              roomType={hotel.offer.name}
              isStar={hotel.property.rating.ratingType === "starfo"}
              price={hotel.offer.displayPrice.amount}
              save={hotel.offer.savings?.amount}
              url={hotel.property.previewImage.url}
              isFreeCancellation={
                hotel.offer.cancellationOption.cancellationType ===
                "FREE_CANCELLATION"
              }
              priceCurrency={hotel.offer.displayPrice.currency}
              savingCurrency={hotel.offer.savings?.currency}
            />
            <hr />
          </div>
        );
      })}
    </>
  );
};

const Dropdown: React.FC<{ sortFn: (asc: boolean) => void }> = ({ sortFn }) => {
  return (
    <div>
      <span className="font-bold px-4">Sort by</span>
      <select
        className="bg px-1 border-4"
        name="selectList"
        id="selectList"
        onChange={(e) => {
          if (e.target.value === "low-high") {
            sortFn(true);
          } else {
            sortFn(false);
          }
        }}
      >
          <option value="high-low">Price high-low</option> {" "}
        <option value="low-high">Price low-high</option>
      </select>
    </div>
  );
};

export default ContentContainer;

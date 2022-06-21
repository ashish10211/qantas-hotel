import React from "react";
import Star from "./Star";

const Rating: React.FC<{ amount: number; isStar: boolean }> = ({
  amount,
  isStar,
}) => {
  const ratingNumber = makeStarArray(amount);
  return (
    <div className="flex flex-row">
      {ratingNumber.map((item, i) => {
        return <Star key={i} rating={item} />;
      })}
    </div>
  );
};

const makeStarArray = (amount: number) => {
  const array = Array(5).fill(0);
  const lowerBoundAmount = Math.floor(amount);
  for (let i = 0; i < lowerBoundAmount; i++) {
    array[i] = 1;
  }
  const amountRemainder = amount % lowerBoundAmount;
  if (amountRemainder !== 0) {
    array[lowerBoundAmount] = Math.round(amountRemainder * 100) / 100;
  }
  return array;
};

export default Rating;

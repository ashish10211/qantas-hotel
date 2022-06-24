import { render, fireEvent, screen } from "@testing-library/react";
import { HotelData } from "../../api/getHotels";
import ContentContainer from "../ContentContainer";

let hotelsTestData: HotelData[] = [
  {
    id: "cxd650nuyo",
    property: {
      title: "Courtyard by Marriott Sydney-North Ryde",
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "self",
      },
    },
    offer: {
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 329.0,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
    },
  },
  {
    id: "cxd650nuyoaa",
    property: {
      title: "Courtyard by Marriott Sydney-North Ryde",
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        url: "https://unsplash.it/145/125/?random",
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "self",
      },
    },
    offer: {
      name: "Deluxe Balcony Room",
      displayPrice: {
        amount: 400.0,
        currency: "AUD",
      },
      savings: {
        amount: 30.0,
        currency: "AUD",
      },
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
    },
  },
];

describe("Container unit test cases", () => {
  it("check price is in ascending order", () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render(
      <ContentContainer hotels={hotelsTestData} />
    );
    const sortDropDown = getByTestId("data-test-sort-dropdown");
    const lowHighOption = getByTestId("data-test-low-high-option");
    expect(queryByTestId("data-test-sort-dropdown")).not.toBeNull();
    fireEvent.click(sortDropDown);
    expect(queryByTestId("data-test-low-high-option")).not.toBeNull();
    fireEvent.click(lowHighOption);

    const hotelsPrices = getAllByTestId("data-price-currency");
    const responseValues = hotelsPrices.map((priceCell) => priceCell.innerHTML);
    expect(responseValues).toEqual(["$329", "$400"]);
  });
});

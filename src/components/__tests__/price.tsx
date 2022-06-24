import { render, screen } from "@testing-library/react";
import Prices from "../Prices";

describe("Price unit test cases", () => {
  it("display price successfully", () => {
    const { getByTestId, queryByTestId } = render(
      <Prices price={500} priceCurrency="AUD" />
    );
    expect(getByTestId("data-price-currency").innerHTML).toEqual("$500");
    expect(queryByTestId("data-save-amount")).toBeNull();
  });

  it("display price successfully", () => {
    const { getByTestId } = render(
      <Prices
        price={500}
        priceCurrency="AUD"
        save={400}
        savingCurrency={"AUD"}
      />
    );
    expect(getByTestId("data-price-currency").innerHTML).toEqual("$500");
    expect(getByTestId("data-save-amount").innerHTML).toEqual("Save $400");
  });
});

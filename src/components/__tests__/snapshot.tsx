import { render } from "@testing-library/react";
import Circle from "../Circle";
import Header from "../Header";
import Hotel from "../Hotel";
import Prices from "../Prices";
import Star from "../Star";

describe("Snapshots", () => {
  it("renders Circle", () => {
    const { container } = render(<Circle rating={3} />);
    expect(container).toMatchSnapshot();
  });

  it("renders Header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("renders Hotel", () => {
    const { container } = render(
      <Hotel
        amount={100}
        hotelAddress={["1442 north rd", "clayton"]}
        hotelName="Hotel Name"
        isStar={true}
        price={500}
        priceCurrency={"AUD"}
        roomType="MEMBER"
        url="http://url"
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders Prices", () => {
    const { container } = render(<Prices price={500} priceCurrency="AUD" />);
    expect(container).toMatchSnapshot();
  });
  it("renders Star", () => {
    const { container } = render(<Star rating={5} />);
    expect(container).toMatchSnapshot();
  });
});

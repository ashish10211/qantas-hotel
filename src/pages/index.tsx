import type { NextPage, GetStaticProps } from "next";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import { getHotels, HotelData } from "../api/getHotels";

const Home: NextPage<{ hotels: HotelData[] }> = ({ hotels }) => {
  return (
    <div className="flex-col mx-5 mt-5 px-5 py-5">
      <Header />
      <ContentContainer hotels={hotels} />
    </div>
  );
};

export function getStaticProps() {
  const hotel = getHotels();
  console.log("hotel", hotel);
  return {
    props: { hotels: hotel.results },
  };
}

export default Home;

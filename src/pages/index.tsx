import type { NextPage } from "next";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";

const Home: NextPage = () => {
  return (
    <div className="flex-col mx-5 mt-5 px-5 py-5">
      <Header />
      <ContentContainer />
    </div>
  );
};

export default Home;

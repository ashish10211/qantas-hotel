import type { NextPage } from "next";
import Header from "../components/Header";
import Hotels from "../components/Hotels";

const Home: NextPage = () => {
  return (
    <div className="flex-col mx-5 mt-5 px-5 py-5">
      <Header />
      <Hotels />
    </div>
  );
};

export default Home;

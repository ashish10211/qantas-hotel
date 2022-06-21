import qantas from "../public/images/qantas-logo.png";
import Image from "next/image";

const Hotel = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/3">
        <Image src={qantas} alt="Qantas Logo" />
      </div>
      <div className="flex place-content-between flex-row my-5 w-full">
        <div className="flex-1">data</div>
        <div className="w-1/6">prices</div>
      </div>
    </div>
  );
};

export default Hotel;

import qantas from "../public/images/qantas-logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex flex-row w-full px-1">
      <div className="w-1/3">
        <Image src={qantas} alt="Qantas Logo" />
      </div>
    </div>
  );
};
export default Header;

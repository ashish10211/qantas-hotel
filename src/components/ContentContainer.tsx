import Hotel from "./Hotel";
const ContentContainer = () => {
  return (
    <>
      <div className="flex place-content-between my-5">
        <span>5 hotels in sydney</span>
        <Dropdown />
      </div>
      <hr />
      <Hotel />
    </>
  );
};

const Dropdown = () => {
  return (
    <div className="border-4">
      <span className="font-bold px-1">Sort by</span>
      <select className="bg px-1" name="selectList" id="selectList">
          <option value="option 1">Price high-low</option> {" "}
        <option value="option 2">Price low-high</option>
      </select>
    </div>
  );
};

export default ContentContainer;

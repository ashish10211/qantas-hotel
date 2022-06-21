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
      <hr />
    </>
  );
};

const Dropdown = () => {
  return (
    <div>
      <span className="font-bold px-4">Sort by</span>
      <select className="bg px-1 border-4" name="selectList" id="selectList">
          <option value="option 1">Price high-low</option> {" "}
        <option value="option 2">Price low-high</option>
      </select>
    </div>
  );
};

export default ContentContainer;

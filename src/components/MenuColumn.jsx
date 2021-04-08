import "../styles/MenuColumn.scss";
import MenuRow from "./MenuRow";

const MenuColumn = () => {
  return (
    <div className="menuColumn">
      <MenuRow endpoint="/" text="Main" />
      <MenuRow endpoint="/about" text="About" />
      {/* <MenuRow endpoint="/help" text="Help"/> */}
      {/* <MenuRow endpoint="/upload" text="Upload Content"/> */}
      {/* <MenuRow endpoint="/test" text="Test 404 Page"/> */}
    </div>
  );
};

export default MenuColumn;

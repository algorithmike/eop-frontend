import { Link } from "react-router-dom";
import "../styles/MenuRow.scss";

const MenuRow = ({ endpoint, text }) => {
  return (
    <Link to={endpoint} className="menuRow">
      <div className="menuRow__title">{text}</div>
    </Link>
  );
};

export default MenuRow;

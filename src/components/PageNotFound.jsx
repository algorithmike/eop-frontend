import { Link } from "react-router-dom";
import "../styles/PageNotFound.scss";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

const PageNotFound = () => (
  <div className="pageNotFound">
    <h1>Nothing To See Here</h1>
    <Link to="/">
      <KeyboardReturnIcon className="icon" />
    </Link>
  </div>
);

export default PageNotFound;

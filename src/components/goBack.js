import { Link } from "react-router-dom";
import chevronLeft from "../assets/shared/icon-arrow-left.svg";

const GoBack = ({ url, addFeedBackLink }) => {
  return (
    <div className="pf-go-back">
      <Link to={url} className="pf-go-back-link">
        <img src={chevronLeft} alt="Chevron left" />
        <span> Go back</span>
      </Link>

      {addFeedBackLink && <Link to={"/edit-feedback/"} />}
    </div>
  );
};

export default GoBack;

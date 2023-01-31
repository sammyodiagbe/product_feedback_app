import { Link, useLocation } from "react-router-dom";
import chevronLeft from "../assets/shared/icon-arrow-left.svg";

const GoBack = ({ addFeedBackLink, data, backUrl }) => {
  const location = useLocation();

  return (
    <div className="pf-go-back">
      <Link to={backUrl} className="pf-go-back-link">
        <img src={chevronLeft} alt="Chevron left" />
        <span> Go back</span>
      </Link>

      {addFeedBackLink && (
        <Link
          className="pf-add-feedback"
          to={`/edit-feedback/${data.id}`}
          state={{ feedback: data }}
        >
          Edit Feedback
        </Link>
      )}
    </div>
  );
};

export default GoBack;

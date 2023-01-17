import { Link } from "react-router-dom";
import chevronLeft from "../assets/shared/icon-arrow-left.svg";

const GoBack = ({ url, addFeedBackLink, data }) => {
  return (
    <div className="pf-go-back">
      <Link to={url} className="pf-go-back-link">
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

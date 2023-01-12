import noSuggestionImage from "../assets/suggestions/illustration-empty.svg";
import { Link } from "react-router-dom";

const NoSuggestion = () => {
  return (
    <div className="pf-no-feedback">
      <img src={noSuggestionImage} alt="No data , list empty" />
      <h1>There is no feedback yet.</h1>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to imrove our app
      </p>
      <Link>+ Add Feedback</Link>
    </div>
  );
};

export default NoSuggestion;

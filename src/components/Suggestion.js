import commentIcon from "../assets/shared/icon-comments.svg";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";

const Suggestion = ({ data }) => {
  const context = useContext(dataContext);
  const { category, comments, title, description, upvotes, id } = data;

  const upvoteSuggestion = (event) => {
    event.preventDefault();

    context.upvoteSuggestion(id);
  };
  return (
    <div className="pf-suggestion">
      <button className="pf-upvote-button" onClick={upvoteSuggestion}>
        <img className="pf-arrow-button" src={arrowUp} />
        <span className="pf-upvote">{upvotes}</span>
      </button>
      <Link to={`/feedback/${id}`} style={{ color: "#555" }}>
        <div className="pf-details-container">
          <h2>{title}</h2>
          <p>{description}</p>
          <span className="pf-category">{category}</span>
        </div>
      </Link>
      <span className="pf-comments">
        <img src={commentIcon} className="pf-comment-icon" />
        {comments ? comments.length : 0}
      </span>
    </div>
  );
};

export default Suggestion;

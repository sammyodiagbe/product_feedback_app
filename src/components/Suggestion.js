import commentIcon from "../assets/shared/icon-comments.svg";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import { Link } from "react-router-dom";

const Suggestion = ({ data }) => {
  const { category, comments, title, description, upvotes, id } = data;
  return (
    <Link to={`/feedback/${id}`} style={{ color: "#555" }}>
      <div className="pf-suggestion">
        <button className="pf-upvote-button">
          <img className="pf-arrow-button" src={arrowUp} />
          <span className="pf-upvote">{upvotes}</span>
        </button>
        <div className="pf-details-container">
          <h2>{title}</h2>
          <p>{description}</p>
          <span className="pf-category">{category}</span>
        </div>
        <span className="pf-comments">
          <img src={commentIcon} className="pf-comment-icon" />
          {comments ? comments.length : 0}
        </span>
      </div>
    </Link>
  );
};

export default Suggestion;

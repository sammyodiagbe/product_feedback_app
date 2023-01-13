import commentIcon from "../assets/shared/icon-comments.svg";
import arrowUp from "../assets/shared/icon-arrow-up.svg";

const Suggestion = ({ data }) => {
  console.log(data);
  const { category, comments, title, description, upvotes } = data;
  return (
    <div className="pf-suggestion">
      <div className="pf-details-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="pf-category">{category}</span>
      </div>
      <button className="pf-upvote-button">
        <img className="pf-arrow-button" src={arrowUp} />
        <span className="pf-upvote">{upvotes}</span>
      </button>
      <span className="pf-comments">
        <img src={commentIcon} className="pf-comment-icon" />
        {comments ? comments.length : 0}
      </span>
    </div>
  );
};

export default Suggestion;

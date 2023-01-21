import upArrowIcon from "../assets/shared/icon-arrow-up.svg";
import commentIcon from "../assets/shared/icon-comments.svg";

const RoadmapContainer = ({ type, data }) => {
  const { title, upvotes, category, comments, description } = data;

  const classname =
    type === "Planned"
      ? "pf-orange"
      : type === "In Progress"
      ? "pf-purple"
      : "pf-blue";
  return (
    <div className={`pf-roadmap ${classname}`}>
      <div className="pf-r">
        <span className={`pf-color ${classname}`}></span>{" "}
        <span className="pf-type"> {type}</span>
      </div>
      <div className="pf-content-content">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
        <span className="category">{category}</span>
        <div className="pf-upvote-category">
          <button className="pf-upvote">
            <img src={upArrowIcon} alt="upvote icon" /> {upvotes}
          </button>
          <button className="pf-comments">
            <img src={commentIcon} alt="comments icon" />{" "}
            {comments ? comments.length : 0}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapContainer;

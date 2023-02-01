import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../components/goBack";
import { dataContext } from "../context/dataContext";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import commentIcon from "../assets/shared/icon-comments.svg";
import Comment from "../components/comment";

const FeedBackDetails = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState({});
  const [userComment, setUserComment] = useState("");
  const [totalCharacterLeft, setTotalCharacterLeft] = useState(250);
  const context = useContext(dataContext);

  useEffect(() => {
    const feedback = context.getFeedback(id);

    setFeedback(feedback);
    // setFeedback(context.getFeedback(id));
    // console.log(feedback);
  }, []);

  const { title, description, upvotes, comments, category } = feedback;

  const commentStructure = comments ? (
    comments.map((comment, index) => {
      return <Comment data={comment} key={index} />;
    })
  ) : (
    <h1>No comments for this feedback</h1>
  );

  const addCommentToFeedback = (event) => {
    event.preventDefault();

    if (userComment === "" || userComment == null) {
      return;
    }
    const commentData = {
      userComment,
    };

    context.addComment(id, commentData);
  };
  return (
    <div className="feedback-container-content">
      <GoBack url={"/"} addFeedBackLink={true} id={id} data={feedback} />
      <main className="pf-main-container pf-move-in">
        <div className="pf-feedback-details">
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
        <div className="pf-comment-container">
          <div className="pf-total-comments">
            <h1>{comments ? comments.length : "No"} Comments</h1>
          </div>
          <div className="pf-comments">{commentStructure}</div>
        </div>

        <div className="pf-comment-box">
          <form onSubmit={addCommentToFeedback}>
            <label htmlFor="add-comment">Add Comment</label>
            <textarea
              maxLength={250}
              name="add-comment"
              id="add-comment"
              value={userComment}
              onChange={(event) => {
                const {
                  target: { value },
                } = event;
                const maxLength = 250;

                setUserComment(value);
                setTotalCharacterLeft(maxLength - value.length);
              }}
              placeholder="Add your comment"
            ></textarea>
            <div className="total-value">
              <p>{totalCharacterLeft} characters left</p>
              <button className="post-comment">Post Comment</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FeedBackDetails;

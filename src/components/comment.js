import { useContext, useState } from "react";
import { dataContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Reply from "./reply";

const Comment = ({ data }) => {
  const { id, user, content, replies, replyingTo } = data;
  const context = useContext(dataContext);
  const { id: postId } = useParams();

  const [userToReplyTo, setUserToReplyTo] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");

  const { username, name, image } = user;
  const url = "." + image;

  const setReplyReciever = (event) => {
    const { target } = event;
    const { username } = target.dataset;
    setUserToReplyTo(username);
    if (!showReplyBox) {
      setShowReplyBox(true);
    }
  };

  const replyToUser = (event) => {
    //  IF THE REPLY BOX IS OPEN then
    event.preventDefault();
    if (replyMessage !== "") {
      setReplyMessage("");
    }

    // we are replying to the user of this comment on this post as the logged on user
    context.replyToUser(postId, id, replyMessage, userToReplyTo);
  };

  const repliesStructure = replies
    ? replies.length
      ? replies.map((reply, index) => {
          return (
            <Reply
              data={reply}
              key={index}
              setReplyReciever={setReplyReciever}
              userToReplyTo={userToReplyTo}
              showReplyBox={showReplyBox}
              setShowReplyBox={setShowReplyBox}
              id={id}
            />
          );
        })
      : null
    : null;
  return (
    <div className="pf-comment-container">
      <div className="pf-comment">
        {/* <div className="pf-comment-head"> */}
        <img src={url} alt="user profile picture" className="user-image" />
        <div className="pf-name">
          <h3>{name}</h3>
          <p>@{username}</p>
        </div>
        <button
          className="reply-toggle"
          onClick={setReplyReciever}
          data-username={username}
        >
          reply
        </button>
        <p className="content">
          {replyingTo && <b className="replying-to">@{replyingTo} </b>}
          {content}
        </p>
      </div>

      <div className="pf-replies">
        {repliesStructure && (
          <div className="pf-replies">{repliesStructure}</div>
        )}
      </div>
      {showReplyBox && (
        <div className="reply-container">
          <form onSubmit={replyToUser}>
            <textarea
              maxLength={250}
              className="reply-box"
              value={replyMessage}
              onChange={(event) => setReplyMessage(event.target.value)}
            ></textarea>
            <button className="reply-btn">Post reply</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Comment;

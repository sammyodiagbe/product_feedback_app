import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../context/dataContext";

const Reply = ({ data, setReplyReciever, userToReplyTo, showReplyBox, id }) => {
  // const { name, username, replyingTo}
  const { content, replyingTo, user } = data;
  const { name, image, username } = user;
  const url = "." + image;
  const [replyMessage, setReplyMessage] = useState("");

  const context = useContext(dataContext);
  const { id: postId } = useParams();

  const replyToUser = (event) => {
    //  IF THE REPLY BOX IS OPEN then
    event.preventDefault();
    if (replyMessage !== "") {
      setReplyMessage("");
    }

    // we are replying to the user of this comment on this post as the logged on user
    context.replyToUser(postId, id, replyMessage, userToReplyTo);
  };

  return (
    <>
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
    </>
  );
};

export default Reply;

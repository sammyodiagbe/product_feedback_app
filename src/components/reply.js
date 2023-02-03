const Reply = ({ data, setReplyReciever }) => {
  // const { name, username, replyingTo}
  const { content, replyingTo, user } = data;
  const { name, image, username } = user;
  const url = "." + image;

  return (
    <>
      <div className="pf-reply">
        {/* <div className="pf-comment-head"> */}
        <div className="pf-comment-head">
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
        </div>
        <p className="content">
          {replyingTo && <b className="replying-to">@{replyingTo} </b>}
          {content}
        </p>
      </div>
    </>
  );
};

export default Reply;

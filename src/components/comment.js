const Comment = ({ data }) => {
  const { id, user, content, replies, replyingTo } = data;

  const { username, name, image } = user;
  const url = "." + image;

  const repliesStructure = replies
    ? replies.length
      ? replies.map((reply, index) => {
          return <Comment data={reply} key={index} />;
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
        <button className="reply-toggle">reply</button>
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
    </div>
  );
};

export default Comment;

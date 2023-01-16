const Comment = ({ url, username, id, name, content }) => {
  return (
    <div className="pf-comment">
      <div className="pf-comment-head">
        <img src={url} alt="user profile picture" />
        <div className="pf-name">
          <h3>{name}</h3>
          <p>@{username}</p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;

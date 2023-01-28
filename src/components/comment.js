const Comment = ({ data }) => {
  const { id, user, content, replies } = data;
  const { username, name, image } = user;
  const url = "." + image;
  return (
    <div className="pf-comment">
      {/* <div className="pf-comment-head"> */}
      <img src={url} alt="user profile picture" className="user-image" />
      <div className="pf-name">
        <h3>{name}</h3>
        <p>@{username}</p>
      </div>
      <button className="reply-toggle">reply</button>
      <p className="content">{content}</p>
    </div>
  );
};

export default Comment;

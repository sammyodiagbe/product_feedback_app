const Comment = ({ url, username, id, name, content }) => {
  const imagesrc = require("../assets/user-images/image-suzanne.jpg");
  return (
    <div className="pf-comment">
      <div className="pf-comment-head">
        <img src={imagesrc} alt="user profile picture" />
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

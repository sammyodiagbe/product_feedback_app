import GoBack from "../components/goBack";
import { useState, useEffect, useContext } from "react";
import editIconButton from "../assets/shared/icon-edit-feedback.svg";
import { Router, useLocation, useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../context/dataContext";
import { notificationContext } from "../context/notificationContext";

const EditFeedback = () => {
  let { id } = useParams();
  const location = useLocation();
  const alertContext = useContext(notificationContext);
  const context = useContext(dataContext);
  const { feedback } = location.state;

  // console.log("Finding nemo ", f);

  // useEffect(() => {
  //   const feedback = context.getFeedback(id);
  //   setFeedback(feedback);
  //   // setFeedback(context.getFeedback(id));
  //   // console.log(feedback);
  // }, []);

  const { title, category: oldCategory, description } = feedback;
  const navigate = useNavigate();

  console.log(title, oldCategory, description);
  const [category, setCategory] = useState(oldCategory);
  const [feedbackTitle, setFeedbackTitle] = useState(title);
  const [feedbackDetails, setFeebackDetails] = useState(description);
  const [feedbackTitleError, setFeedbackTitleError] = useState(false);
  const [feedbackDetailsError, setFeedbackDetailsError] = useState(false);

  const editFeedback = (event) => {
    event.preventDefault();

    if (feedbackTitle === "" || feedbackDetails === "") {
      setFeedbackDetailsError(feedbackDetails === "");
      setFeedbackTitleError(feedbackTitleError === "");
      return;
    }

    setFeedbackDetailsError(false);
    setFeedbackTitleError(false);

    id = parseInt(id);
    context.editFeedback({
      category,
      feedbackDetails,
      feedbackTitle,
      id,
    });
    alertContext.setNotificationMessage("Successfully updated feedback");
    navigate(`/feedback/${id}`, {
      state: { feedback },
    });
  };

  const deleteFeedback = () => {
    context.deleteFeedback(id);
    alertContext.setNotificationMessage("Successfully deleted feedback");
    navigate("/");
  };

  return (
    <div className="pf-f-container">
      <GoBack backUrl={`/feedback/${feedback.id}`} />
      <div className="pf-main-container">
        <div className="pf-form-container">
          <img src={editIconButton} className="pf-f-icon" />
          <h1 className="pf-form-title">Editing '{title}'</h1>
          <form onSubmit={editFeedback}>
            <div className="pf-input-field">
              <b>Feedback Title</b>
              <p>Add a short, descriptive headline.</p>
              <input
                type="text"
                className="pf-input-field"
                value={feedbackTitle}
                onChange={(event) => setFeedbackTitle(event.target.value)}
              />
              {feedbackTitleError && (
                <span
                  style={{ display: "block", padding: ".2em 0", color: "red" }}
                >
                  Can't be empty
                </span>
              )}
            </div>
            <div className="pf-input-field">
              <b>Category</b>
              <p>Choose a category for your feedback.</p>
              <select
                defaultValue={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option>Feature</option>
                <option>Enhancement</option>
                <option>Bug</option>
                <option>UI</option>
                <option>UX</option>
              </select>
            </div>
            <div className="pf-input-field">
              <b>Feedback Detail</b>
              <p>
                Include any specific comments on what should be improved, added
                etc.
              </p>
              <textarea
                type="text"
                className="pf-input-field"
                value={feedbackDetails}
                onChange={(event) => setFeebackDetails(event.target.value)}
              ></textarea>
              {feedbackDetailsError && (
                <span
                  style={{ display: "block", padding: ".2em 0", color: "red" }}
                >
                  Can't be empty
                </span>
              )}
            </div>
          </form>
          <div className="pf-action-container">
            <button className="pf-btn pf-create-account" onClick={editFeedback}>
              Edit Feedback
            </button>
            <button className="pf-btn pf-cancel">Cancel</button>
            <button className="pf-btn pf-delete" onClick={deleteFeedback}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;

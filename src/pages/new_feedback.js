import { useContext, useEffect, useState } from "react";
import GoBack from "../components/goBack";
import "../styles/feedback.css";

import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";
import { dataContext } from "../context/dataContext";
import { notificationContext } from "../context/notificationContext";
import { useLocation, useNavigate } from "react-router-dom";

const NewFeedback = () => {
  const context = useContext(dataContext);
  const alertContext = useContext(notificationContext);
  const navigate = useNavigate();
  const { prev_url } = useLocation().state || {};
  const [category, setCategory] = useState("Feature");
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackDetails, setFeebackDetails] = useState("");
  const [feedbackTitleError, setFeedbackTitleError] = useState(false);
  const [feedbackDetailsError, setFeedbackDetailsError] = useState(false);

  useEffect(() => {
    window.document.title = "Create new Feedback";
  }, []);

  const createNewFeedback = (event) => {
    event.preventDefault();
    if (feedbackTitle === "" || feedbackDetails === "") {
      setFeedbackDetailsError(feedbackDetails === "");
      setFeedbackTitleError(feedbackTitleError === "");
      return;
    }

    setFeedbackDetailsError(false);
    setFeedbackTitleError(false);

    // go ahead and create the suggesstion
    const data = { category, feedbackTitle, feedbackDetails };
    context.createNewSuggestion(data);
    navigate("/");
    alertContext.setNotificationMessage("Feedback created successfully");
  };

  return (
    <div className="pf-f-container">
      <GoBack addFeedBackLink={false} backUrl={prev_url} />
      <div className="pf-main-container">
        <div className="pf-form-container">
          <img src={newFeedbackIcon} className="pf-f-icon" />
          <h1 className="pf-form-title">Create New Feedback</h1>
          <form onSubmit={createNewFeedback}>
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
            <div className="pf-action-container">
              <button className="pf-btn pf-create-account">Add Feedback</button>
              <button
                className="pf-btn pf-cancel"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;

import { useState } from "react";
import GoBack from "../components/goBack";
import "../styles/feedback.css";

import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";

const NewFeedback = () => {
  const [category, setCategory] = useState("Feature");
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackDetails, setFeebackDetails] = useState("");
  return (
    <>
      <GoBack url={"hello/hello"} addFeedBackLink={true} />
      <div className="pf-main-container">
        <div className="pf-form-container">
          <img src={newFeedbackIcon} className="pf-f-icon" />
          <h1 className="pf-form-title">Create New Feedback</h1>
          <form>
            <div className="pf-input-field">
              <b>Feedback Title</b>
              <p>Add a short, descriptive headline.</p>
              <input
                type="text"
                className="pf-input-field"
                value={feedbackTitle}
                onChange={(target) => setFeedbackTitle(target.value)}
              />
            </div>
            <div className="pf-input-field">
              <b>Category</b>
              <p>Choose a category for your feedback.</p>
              <select
                defaultValue={category}
                onChange={(target) => setCategory(target.value)}
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
                onChange={(target) => setFeebackDetails(target.value)}
              ></textarea>
            </div>
            <div className="pf-action-container">
              <button className="pf-btn pf-create-account">Add Feedback</button>
              <button className="pf-btn pf-cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewFeedback;

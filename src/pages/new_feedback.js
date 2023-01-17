import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import GoBack from "../components/goBack";

const NewFeedback = () => {
  const [category, setCategory] = useState("Feature");
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackDetails, setFeebackDetails] = useState("");
  return (
    <>
      <GoBack url={"hello/hello"} />
      <div className="pf-main-container">
        <div className="pf-form-container">
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
              ></select>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default NewFeedback;

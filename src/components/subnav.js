import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dropDown from "../assets/shared/icon-arrow-down.svg";
import dropUp from "../assets/shared/icon-arrow-up.svg";
import { dataContext } from "../context/dataContext";
import checkMark from "../assets/shared/icon-check.svg";
import backArrow from "../assets/shared/icon-arrow-left.svg";
import suggestionIcon from "../assets/suggestions/icon-suggestions.svg";

function customDropDown(value, open, toggleFilter, suggesstionsLength) {
  return (
    <button className="pf-custom-drop-down" onClick={toggleFilter}>
      <div className="pf-total-suggesstions">
        <img src={suggestionIcon} alt="Suggestion Icon" />
        <b className="pf-text">{suggesstionsLength} Suggestions</b>
      </div>
      <span className="a">Sort by :</span>
      <span className="pf-value">{value}</span>
      <img src={open ? dropUp : dropDown} alt="drop icon" />
    </button>
  );
}

const SubNav = ({ hideDrop, showBackLink }) => {
  const context = useContext(dataContext);
  const { state, pathname } = useLocation();
  const { prev_url } = state || {};

  console.log(pathname);
  const {
    sortByMostUpvotes,
    sortByLeastUpvotes,
    sortByMostComments,
    sortByLeastComments,
    suggestions,
  } = context;
  const [openFilter, toggleFilter] = useState(false);
  const [value, setValue] = useState("Most Upvotes");
  const [activeId, setActiveId] = useState(1);

  const toggle = () => {
    toggleFilter(!openFilter);
  };

  const sortByMostUpvotesF = () => {
    sortByMostUpvotes();
    setActiveId(1);
    toggleFilter(false);
    setValue("Most Upvotes");
  };

  const sortByLeastUpvotesF = () => {
    console.log("sorting by least upvotes");
    sortByLeastUpvotes();
    setActiveId(2);
    toggleFilter(false);
    setValue("Least Upvotes");
  };

  const sortByMostCommentsF = () => {
    sortByMostComments();
    setActiveId(3);
    toggleFilter(false);
    setValue("Most Comments");
  };

  const sortByLeastCommentsF = () => {
    sortByLeastComments();
    setActiveId(4);
    toggleFilter(false);
    setValue("Least Comments");
  };
  return (
    <div className={`pf-sub-nav ${hideDrop && "hide"}`}>
      {/* bulb logo and suggestions total */}
      {/* <div className="pf-sort-by">
        <p>Sort by : </p>
        
      </div> */}
      {showBackLink && (
        <div className="go-back">
          <Link to={prev_url || "/"}>
            <img src={backArrow} alt="back arrow" /> Go back
          </Link>

          <h3>Roadmap</h3>
        </div>
      )}
      {customDropDown(value, openFilter, toggle, suggestions.length)}
      <Link
        className="pf-add-feedback"
        to="/new-feedback"
        state={{ prev_url: "/roadmap" }}
      >
        + Add Feedback
      </Link>
      {openFilter && (
        <div className="pf-drop-down">
          <button className="pf-drop-down-item" onClick={sortByMostUpvotesF}>
            <span>Most Upvotes</span>
            {activeId == 1 && <img src={checkMark} alt="check mark" />}
          </button>
          <button className="pf-drop-down-item" onClick={sortByLeastUpvotesF}>
            <span>Least Upvotes</span>
            {activeId == 2 && <img src={checkMark} alt="check mark" />}
          </button>
          <button className="pf-drop-down-item" onClick={sortByMostCommentsF}>
            <span>Most Comments</span>
            {activeId == 3 && <img src={checkMark} alt="check mark" />}
          </button>
          <button className="pf-drop-down-item" onClick={sortByLeastCommentsF}>
            <span>Least Comments</span>
            {activeId == 4 && <img src={checkMark} alt="check mark" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default SubNav;

import { useState } from "react";
import { Link } from "react-router-dom";
import dropDown from "../assets/shared/icon-arrow-down.svg";
import dropUp from "../assets/shared/icon-arrow-up.svg";

function customDropDown(value, open, toggleFilter) {
  return (
    <button className="pf-custom-drop-down">
      <span className="a">Sort by :</span>
      <span className="pf-value">{value}</span>
      <img src={open ? dropUp : dropDown} alt="drop icon" />
    </button>
  );
}

const SubNav = () => {
  const [openFilter, toggleFilter] = useState(false);
  const [value, setValue] = useState("Most comments");

  return (
    <div className="pf-sub-nav">
      {/* bulb logo and suggestions total */}
      {/* <div className="pf-sort-by">
        <p>Sort by : </p>
        
      </div> */}
      {customDropDown(value, openFilter, toggleFilter)}
      <Link className="pf-add-feedback">+ Add Feedback</Link>
      <div className="pf-drop-down">
        <button className="pf-drop-down-item">Most Upvotes</button>
        <button className="pf-drop-down-item">Least Upvotes</button>
        <button className="pf-drop-down-item">Most Comments</button>
        <button className="pf-drop-down-item">Least Comments</button>
      </div>
    </div>
  );
};

export default SubNav;

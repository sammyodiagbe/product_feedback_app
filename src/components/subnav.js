import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import dropDown from "../assets/shared/icon-arrow-down.svg";
import dropUp from "../assets/shared/icon-arrow-up.svg";
import { dataContext } from "../context/dataContext";
import checkMark from "../assets/shared/icon-check.svg";

function customDropDown(value, open, toggleFilter) {
  return (
    <button className="pf-custom-drop-down" onClick={toggleFilter}>
      <span className="a">Sort by :</span>
      <span className="pf-value">{value}</span>
      <img src={open ? dropUp : dropDown} alt="drop icon" />
    </button>
  );
}

const SubNav = () => {
  const context = useContext(dataContext);
  const [openFilter, toggleFilter] = useState(false);
  const [value, setValue] = useState("Most comments");
  const [activeId, setActiveId] = useState(1);

  const toggle = () => {
    toggleFilter(!openFilter);
  };

  const sortByMostUpvotes = () => {
    setActiveId(1);
  };

  const sortByLeastUpvotes = () => {
    setActiveId(2);
  };

  const sortByMostComments = () => {
    setActiveId(3);
  };

  const sortByLeastComments = () => {
    setActiveId(4);
  };
  return (
    <div className="pf-sub-nav">
      {/* bulb logo and suggestions total */}
      {/* <div className="pf-sort-by">
        <p>Sort by : </p>
        
      </div> */}
      {customDropDown(value, openFilter, toggle)}
      <Link className="pf-add-feedback">+ Add Feedback</Link>
      {openFilter && (
        <div className="pf-drop-down">
          <button className="pf-drop-down-item" onClick={sortByMostUpvotes}>
            <span>Most Upvotes</span>
            {activeId == 1 && <img src={checkMark} alt="check mark" />}
          </button>
          <button className="pf-drop-down-item" onClick={sortByLeastUpvotes}>
            <span>Least Upvotes</span>
            {activeId == 2 && <img src={checkMark} alt="check mark" />}
          </button>
          <button className="pf-drop-down-item" onClick={sortByMostComments}>
            <span>Most Comments</span>
            {activeId == 3 && <img src={checkMark} alt="check mark" />}
          </button>
          <button className="pf-drop-down-item" onClick={sortByLeastComments}>
            <span>Least Comments</span>
            {activeId == 4 && <img src={checkMark} alt="check mark" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default SubNav;

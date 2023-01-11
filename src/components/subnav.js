import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <div className="pf-sub-nav">
      {/* bulb logo and suggestions total */}
      <div className="pf-sort-by">
        <p>Sort by : </p>
        <select defaultValue={"Most Upvotes"}>
          <option>Most Upvotes</option>
          <option>Least Upvotes</option>
          <option>Most Comments</option>
          <option>Least Comments</option>
        </select>
      </div>
      <Link className="pf-add-feedback">+ Add Feedback</Link>
    </div>
  );
};

export default SubNav;

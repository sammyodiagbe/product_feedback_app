import { useContext } from "react";
import SubNav from "../components/subnav";
import { dataContext } from "../context/dataContext";

const RoadMap = () => {
  const context = useContext(dataContext);
  const { plans, inProgress, live } = context;

  const toggleClass = (event) => {
    const { target } = event;
    const { id } = target.dataset;
  };

  return (
    <>
      <SubNav hideDrop={true} showBackLink={true} />
      {/* road map tracker */}
      <div className="pf-roadmap-nav"></div>
      <div className="pf-content">
        {/* sliding them out shoudl be alot easier if we make the container 3 * the size of the screen then we are able to move them accordingly show the 
        current element we want to show on the screen */}
      </div>
    </>
  );
};

export default RoadMap;

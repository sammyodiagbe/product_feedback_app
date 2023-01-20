import { useContext } from "react";
import SubNav from "../components/subnav";
import { dataContext } from "../context/dataContext";

const RoadMap = () => {
  const context = useContext(dataContext);
  console.log(context);
  const { plans, inProgress, liveData } = context;

  const renderplans = plans.map((plan, index) => null);

  const toggleClass = (event) => {
    const { target } = event;
    const { id } = target.dataset;
  };

  return (
    <>
      <SubNav hideDrop={true} showBackLink={true} />
      {/* road map tracker */}
      <div className="pf-roadmap-nav">
        <div className="pf-nav-top">
          <button className="pf-switch">Planned({plans.length})</button>
          <button className="pf-switch">
            In-Progress({inProgress.length})
          </button>
          <button className="pf-switch">Live({liveData.length})</button>
        </div>
      </div>
      <div className="pf-content">
        {/* sliding them out shoudl be alot easier if we make the container 3 * the size of the screen then we are able to move them accordingly show the 
        current element we want to show on the screen */}
        <div className="pf-planned-container"></div>
        <div className="pf-inprogress-container"></div>
        <div className="pf-live-container"></div>
      </div>
    </>
  );
};

export default RoadMap;

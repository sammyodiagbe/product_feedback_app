import { useContext, useState } from "react";
import RoadmapContainer from "../components/roadmapContainer";
import SubNav from "../components/subnav";
import { dataContext } from "../context/dataContext";

const RoadMap = () => {
  const context = useContext(dataContext);
  console.log(context);
  const { plans, inProgress, liveData } = context;
  const [activeState, setActiveState] = useState("Planned");
  const [movementClass, setMovementClass] = useState("Planned");

  const renderplans = plans.map((plan, index) => {
    return <RoadmapContainer data={plan} type="Planned" key={index} />;
  });

  const renderInProgress = plans.map((inprogress, index) => {
    return (
      <RoadmapContainer data={inprogress} type="In Progress" key={index} />
    );
  });

  const renderLive = plans.map((live, index) => {
    return <RoadmapContainer data={live} type="Live" key={index} />;
  });

  const changeActiveViewState = (event) => {
    const { target } = event;
    const { name } = target.dataset;
    setActiveState(name);
    setMovementClass(name);
  };

  const messages = {
    "In-Progress": "Features currently being developed",
    Live: "Released Features",
    Planned: "Ideas prioritized for research.",
  };

  const length =
    activeState === "Planned"
      ? renderplans.length
      : activeState === "In-Progress"
      ? renderInProgress.length
      : renderLive.length;

  return (
    <>
      <SubNav hideDrop={true} showBackLink={true} />
      {/* road map tracker */}
      <div className="pf-roadmap-nav">
        <div className="pf-nav-top">
          <button
            className="pf-switch"
            data-name="Planned"
            onClick={changeActiveViewState}
          >
            Planned ({plans.length})
          </button>
          <button
            className="pf-switch"
            data-name="In-Progress"
            onClick={changeActiveViewState}
          >
            In-Progress ({inProgress.length})
          </button>
          <button
            className="pf-switch"
            data-name="Live"
            onClick={changeActiveViewState}
          >
            Live ({liveData.length})
          </button>
        </div>
      </div>
      <div className="pf-state-details">
        <h1>{`${activeState} (${length})`}</h1>
        <p>{`${messages[activeState]}`}</p>
      </div>
      <div className={`pf-content ${movementClass}`}>
        {/* sliding them out shoudl be alot easier if we make the container 3 * the size of the screen then we are able to move them accordingly show the 
        current element we want to show on the screen */}
        <div className="pf-r-container">{renderplans}</div>
        <div className="pf-r-container">{renderInProgress}</div>
        <div className="pf-r-container">{renderLive}</div>
      </div>
    </>
  );
};

export default RoadMap;

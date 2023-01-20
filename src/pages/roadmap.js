import SubNav from "../components/subnav";

const RoadMap = () => {
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

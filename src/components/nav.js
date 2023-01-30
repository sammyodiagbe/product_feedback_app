import { useContext, useState } from "react";
import hamBurgerImage from "../assets/shared/mobile/icon-hamburger.svg";
import closeImage from "../assets/shared/mobile/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { dataContext } from "../context/dataContext";

const Nav = (showNavigation) => {
  const data = useContext(dataContext);
  const { pathname } = useLocation();

  const { plans, liveData, inProgress } = data;
  const [showSidebar, toggleSidebar] = useState(false);

  const filterSuggestionList = (event) => {
    const { target } = event;
    const { featureName } = target.dataset;

    data.filterSuggestionList(featureName);
  };
  return showNavigation ? (
    <nav className="pf-navigation">
      <div className="pf-navigation-title-container">
        <div className="pf-nav-left">
          <h3>Frontend Mentor</h3>
          <b>Feedback Board</b>
        </div>

        <div className="pf-navigation-trigger-container">
          {!showSidebar ? (
            <button
              className="pf-navigation-trigger"
              onClick={() => toggleSidebar(true)}
            >
              <img src={hamBurgerImage} alt="navigation trigger hamburger" />
            </button>
          ) : (
            <button
              className="pf-navigation-trigger"
              onClick={() => toggleSidebar(false)}
            >
              <img src={closeImage} alt="navigation trigger hamburger" />
            </button>
          )}
        </div>
      </div>
      <div className={`pf-filter-container ${showSidebar && "open"}`}>
        <div className={`pf-filter-roadmap-container `}>
          <div className="pf-filter">
            <button
              onClick={filterSuggestionList}
              className="active"
              data-feature-name={"All"}
            >
              All
            </button>
            <button onClick={filterSuggestionList} data-feature-name="ui">
              UI
            </button>
            <button onClick={filterSuggestionList} data-feature-name="ux">
              UX
            </button>
            <button
              onClick={filterSuggestionList}
              data-feature-name="enhancement"
            >
              Enhancement
            </button>
            <button onClick={filterSuggestionList} data-feature-name="bug">
              Bug
            </button>
            <button onClick={filterSuggestionList} data-feature-name="feature">
              Feature
            </button>
          </div>
          <div className="pf-roadmap">
            <div className="pf-roadmap-head">
              <h1>Roadmap</h1>
              <Link to="/roadmap" state={{ prev_url: pathname }}>
                View
              </Link>
            </div>
            <div className="pf-roadmap-types">
              <div className="pf-roadmap-type">
                <div className="pf-type-left">
                  <span className="indicator orange"></span>
                  <p className="planned">Planned</p>
                </div>
                <b>{plans.length}</b>
              </div>
              <div className="pf-roadmap-type">
                <div className="pf-type-left">
                  <span className="indicator purple"></span>
                  <p className="planned">In-Progress</p>
                </div>
                <b>{inProgress.length}</b>
              </div>
              <div className="pf-roadmap-type">
                <div className="pf-type-left">
                  <span className="indicator blue"></span>
                  <p className="planned">Live</p>
                </div>
                <b>{liveData.length}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Nav;

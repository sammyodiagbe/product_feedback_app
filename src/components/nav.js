import { useContext, useState } from "react";
import hamBurgerImage from "../assets/shared/mobile/icon-hamburger.svg";
import closeImage from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";
import { dataContext } from "../context/dataContext";

const Nav = (showNavigation) => {
  const data = useContext(dataContext);

  const { plans, liveData, inProgress } = data;
  const [showSidebar, toggleSidebar] = useState(false);
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
            <Link className="active">All</Link>
            <Link>UI</Link>
            <Link>UX</Link>
            <Link>Enhancement</Link>
            <Link>Bug</Link>
            <Link>Feature</Link>
          </div>
          <div className="pf-roadmap">
            <div className="pf-roadmap-head">
              <h1>Roadmap</h1>
              <Link>View</Link>
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

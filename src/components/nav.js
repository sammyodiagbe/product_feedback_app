const Nav = (showNavigation) => {
  return showNavigation ? (
    <nav className="pf-navigation">
      <div className="pf-navigation-title-container">
        <h3>Frontend Mentor</h3>
        <h4>Feedback Board</h4>
      </div>
    </nav>
  ) : null;
};

export default Nav;

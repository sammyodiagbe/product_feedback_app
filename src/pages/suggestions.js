import { useContext } from "react";
import Nav from "../components/nav";
import SubNav from "../components/subnav";
import { dataContext } from "../context/dataContext";
import NoSuggestion from "../components/no_suggestion";
import Suggestion from "../components/Suggestion";

const Suggestions = () => {
  const data = useContext(dataContext);
  const { suggestions } = data;
  const SuggestionStructure = suggestions.length ? (
    suggestions.map((suggestion, index) => {
      return <Suggestion data={suggestion} key={index} />;
    })
  ) : (
    <NoSuggestion />
  );
  return (
    <div className="container">
      <Nav />

      <main className="pf-main-container">
        <SubNav />
        <div className="pf-vertical-list">{SuggestionStructure}</div>
      </main>
    </div>
  );
};

export default Suggestions;

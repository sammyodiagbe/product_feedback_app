import { createContext, useState } from "react";
import data from "../data.json";

const currentUser = data.currentUser;
const requestsData = data.productRequests;
const suggestion = [];
const planned = [];
const inprogress = [];
const live = [];

for (let request of requestsData) {
  const { status } = request;
  if (status === "suggestion") {
    suggestion.push(request);
  } else if (status === "planned") {
    planned.push(request);
  } else if (status === "in-progress") {
    inprogress.push(request);
  } else if (status === "live") {
    live.push(request);
  }
}
export const dataContext = createContext({});

const DataContextProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState(suggestion);
  const [plans, setPlanned] = useState(planned);
  const [inProgress, setInProgress] = useState(inprogress);
  const [liveData, setLive] = useState(live);
  const [user, setCurrentUser] = useState(currentUser);
  const [roadMap, setRoadMap] = useState([...planned, ...inProgress, ...live]);

  const sortByMostUpvotes = () => {
    let newSuggesstions = [...suggestions];
    newSuggesstions = newSuggesstions.sort(
      (value1, value2) => value2.upvotes - value1.upvotes
    );
    setSuggestions(newSuggesstions);
  };

  const sortByLeastUpvotes = () => {
    let newSuggesstions = [...suggestions];
    newSuggesstions = newSuggesstions.sort(
      (value1, value2) => value1.upvotes - value2.upvotes
    );
    setSuggestions(newSuggesstions);
  };
  const sortByMostComments = () => {
    let newSuggesstions = [...suggestions];
    newSuggesstions = newSuggesstions.sort((value1, value2) => {
      const a = value1.comments ? value1.comments.length : 0;
      const b = value2.comments ? value2.comments.length : 0;

      console.log(b, " ---- ", a);

      return b - a;
    });
    setSuggestions(newSuggesstions);
  };

  const sortByLeastComments = () => {
    let newSuggesstions = [...suggestions];
    newSuggesstions = newSuggesstions.sort((value1, value2) => {
      const a = value1.comments ? value1.comments.length : 0;
      const b = value2.comments ? value2.comments.length : 0;

      return a - b;
    });
    setSuggestions(newSuggesstions);
  };

  const getFeedback = (id) => {
    for (const feedback of suggestions) {
      if (feedback.id === parseInt(id)) {
        return feedback;
      }
    }
    return null;
  };

  return (
    <dataContext.Provider
      value={{
        plans,
        inProgress,
        liveData,
        user,
        roadMap,
        suggestions,
        sortByMostUpvotes,
        sortByLeastUpvotes,
        sortByMostComments,
        sortByLeastComments,
        getFeedback,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;

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

  return (
    <dataContext.Provider
      value={{ plans, inProgress, liveData, user, roadMap, suggestions }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;

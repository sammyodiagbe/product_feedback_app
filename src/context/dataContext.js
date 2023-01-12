import { createContext } from "react";
import data from "../data.json";

const currentUser = data.currentUser;
const requestsData = data.productRequests;
const suggestion = [];
const planned = [];
const inProgress = [];
const live = [];

for (let request of requestsData) {
  const { status } = request;
  if (status === "suggestion") {
    suggestion.push(request);
  } else if (status === "planned") {
    planned.push(request);
  } else if (status === "in-progress") {
    inProgress.push(request);
  } else if (status === "live") {
    live.push(request);
  }
}

const dataContext = createContext({
  suggestions: suggestion,
  planned: planned,
  inProgress: inProgress,
  live: live,
  currentUser: currentUser,
  roadMap: [...planned, ...inProgress, ...live],
});

export default dataContext;

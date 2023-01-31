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
  const [roadMap, setRoadMap] = useState([
    ...plans,
    ...inProgress,
    ...liveData,
  ]);

  const [tempSuggesstionHolder, setTempSuggesstionHolder] =
    useState(suggestion);

  const createNewSuggestion = (data) => {
    const { category, filterTitle, filterDetails } = data;
    const newFeedback = {
      id: suggestions.length,
      category,
      title: filterTitle,
      description: filterDetails,
      status: "suggestion",
      comments: [],
      upvotes: 0,
    };

    // best bet is to try to sort the list of suggestion by id first

    suggestions.push(newFeedback);
  };

  const editFeedback = (newData) => {
    const { feedbackTitle, feedbackDetails, category, id } = newData;

    console.log(id);
    const feedback = suggestions.find(
      (suggestion, index) => suggestion.id === id
    );

    feedback.title = feedbackTitle;
    feedback.description = feedbackDetails;
    feedback.category = category;

    let arr = [...suggestions];
    arr[id - 1] = feedback;

    setSuggestions(arr);
  };

  const filterSuggestionList = (featureName) => {
    if (featureName == "All") {
      setSuggestions(tempSuggesstionHolder);
      return;
    }
    let temp = [...tempSuggesstionHolder];
    setTempSuggesstionHolder(temp);
    temp = temp.filter(
      (suggesstion, index) => suggesstion.category == featureName
    );
    setSuggestions(temp);
  };

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
        filterSuggestionList,
        createNewSuggestion,
        editFeedback,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;

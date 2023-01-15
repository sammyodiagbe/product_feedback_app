import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GoBack from "../components/goBack";
import { dataContext } from "../context/dataContext";

const FeedBackDetails = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState();
  const context = useContext(dataContext);

  useEffect(() => {
    const feedback = context.getFeedback(id);

    console.log(feedback);
    // setFeedback(context.getFeedback(id));
    // console.log(feedback);
  }, []);

  return (
    <>
      <GoBack url={"/"} addFeedBackLink={true} />
      <main className="pf-main-container">
        <div className="pf-feedback-details"></div>
        <div className="pf-comment-container">
          <div className="pf-total-comments"></div>
          <div className="pf-comments"></div>
        </div>
      </main>
    </>
  );
};

export default FeedBackDetails;

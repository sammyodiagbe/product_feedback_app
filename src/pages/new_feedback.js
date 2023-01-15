import { useLocation, useSearchParams } from "react-router-dom";
import GoBack from "../components/goBack";

const NewFeedback = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <GoBack url={"hello/hello"} />
    </>
  );
};

export default NewFeedback;

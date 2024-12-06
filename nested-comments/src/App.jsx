import NestedComments from "./Components/NestedComments";
import commentsData from "./Data/comments.json";

const App = () => {
  return (
    <>
      <h3>Comments Data</h3>
      <NestedComments commentsData={commentsData} />
    </>
  );
};

export default App;

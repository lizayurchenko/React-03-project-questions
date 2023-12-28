import questions from "./data";
import { useState } from "react";
import Questions from "./Questions";
const App = () => {
  const [questionsList, setQuestionsList] = useState(questions);
  const [activeId, setActiveId] = useState(0);

  const toggleId = (id) => {
    setActiveId((currId) => (currId === id ? null : id));
  };

  return (
    <main>
      <Questions
        questionsList={questionsList}
        activeId={activeId}
        toggleId={toggleId}
      />
    </main>
  );
};
export default App;

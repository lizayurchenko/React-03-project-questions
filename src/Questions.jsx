import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questionsList, activeId, toggleId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questionsList.map((question) => {
        return (
          <div>
            <SingleQuestion
              {...question}
              key={question.id}
              activeId={activeId}
              toggleId={toggleId}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Questions;

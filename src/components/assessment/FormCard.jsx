import React from 'react';

const FormCard = ({ jobRole, questions }) => {
  return (
    <div>
      <h3>{jobRole}</h3>
      <p>Number of Questions: {questions.length}</p>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question.questionText}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormCard;

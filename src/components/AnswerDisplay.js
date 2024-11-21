import React from 'react';

function AnswerDisplay({ answer }) {
  return (
    <div className="answer">
      <p>Answer: {answer}</p>
    </div>
  );
}

export default AnswerDisplay;
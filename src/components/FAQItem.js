import React from 'react';
import "../styles/FAQ.css"

const FAQItem = ({ question, answer }) => {
  return (
    <div className='question-answer'>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default FAQItem;
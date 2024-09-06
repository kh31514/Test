import React from 'react';
import FAQItem from './FAQItem';
import "../styles/FAQ.css"

const FAQ = ({ president, presEmail }) => {
  console.log("President:", president);
  console.log("President Email:", presEmail);
  return (
    <div className='FAQ-container'>
      <h2>Frequently Asked Questions</h2>
      <div>
        <FAQItem
          question="Do I need any experience to join?"
          answer="No, no experience required! We welcome complete beginners and pros alike."
        />
        <FAQItem
          question="How much does registration cost?"
          answer="Cornell student registration is free! (costs covered by student activity fund)."
        />
        <FAQItem
          question="How do I get to practice?"
          answer={`Practice is not accessible by TCAT :( Please reach out to president, ${president}, at ${presEmail} for carpool information.`}
        />
        <FAQItem
          question="What should I bring to practice?"
          answer="Please bring a water bottle. All other gear (paddles, life jackets, and seat pads) provided. Wear shoes and clothes you don't mind getting wet."
        />
      </div>
    </div>
  );
};

export default FAQ;
import React from 'react';
import '../styles/TextSection.css';

const TextSection = ({ title, body, bkgrnd, imgPos, imgSrc, imgSize }) => {
  return (
    <div className={`container ${imgPos} ${bkgrnd}`}>
      <img src={imgSrc} className={imgSize}></img>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default TextSection;
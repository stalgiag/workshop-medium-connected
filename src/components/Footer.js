import React from 'react';
import { courseName, logoCredit, marqueeTextCredit } from '../utilities/globals';

export default function Footer(props) {
  return (
    <>
      <div id="footer">
        <p>Image: {logoCredit}</p>
        <p>scrolling Text: {marqueeTextCredit}</p>
      </div>
      <p id='class-title'>{courseName}</p>
    </>
  );
}
  
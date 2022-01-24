import React from 'react';
import { googleDocsSyllabusEmbedLink } from '../utilities/globals';

export default function Doc(props) {
  return (
    <div className="iframe-container">
      <div className="iframe-center-container">
        <iframe title="syllabus" className="doc" id="syllabus" src={googleDocsSyllabusEmbedLink}></iframe>
      </div>
    </div>
  )
}
  
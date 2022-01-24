import React from 'react';
import { tabs } from '../utilities/globals';
import Markdown from '../components/Markdown'
import Doc from './Doc';


export default function Body(props) {

  const section = props.section;
  
  const getCorrectSection = function () {
    switch (section) {
    case tabs.SCHEDULE:
    case tabs.RESOURCES:
      return (<Markdown category={section} />);
    case tabs.SYLLABUS:
      return ( <Doc />);
    default:
      throw new Error('A body section was generated without using one of the relevant globals');
    }
  }
  return (
    <div id="body-container">
      <div className="body-center-content">
        {getCorrectSection()}
      </div>
    </div>
  );
}
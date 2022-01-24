import Marquee3k from 'marquee3000';
import React from 'react';
import { marqueeText } from '../utilities/globals';

class Marquee extends React.Component {
  componentDidMount () {
    Marquee3k.init();
    Marquee3k.refreshAll();
  }

  render() {
    return (
      <div id='marquee-container'>
        <div className="marquee3k"
          data-speed="0.5"
        >
          <h2>{marqueeText}</h2>
        </div>
      </div>
    );
  }
}

export default Marquee;
import React from 'react';
import { tabs } from '../utilities/globals';

export default function Nav(props) {
  return (
    <nav>
      <ul>
        {Object.keys(tabs).map((key, index) => {
          return (<li key ={key} id={props.activeTab===key?'active-nav-tab':''} onClick={(e) => props.onChange(key)}>{tabs[key]}</li>);
        })}
      </ul>
    </nav>
  );
}

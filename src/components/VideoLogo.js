import React from 'react';

import MyVideo from '../../static/myvideofile.mp4'

export default function Logo() {
  return (
    <div id="logo-container">
    <video autoPlay loop muted>
        <source src={MyVideo} type="video/mp4" />
    </video>
    </div>
  )
}

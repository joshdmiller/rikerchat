import React from 'react';

import './styles.css';

export default ({
  msg = '',
  name = '',
  us = false,
  them = false,
  avatar,
}) => (
  <div className={`message message--${us || ! them ? 'us' : 'them'}`}>
    <img className='message__avatar' src={avatar} alt={name} />

    <div className='message__text'>
      { msg }
    </div>
  </div>
);


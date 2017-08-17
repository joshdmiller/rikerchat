import React from 'react';

import './styles.css';

import Message from 'components/message';

export default () => (
  <div className="message-list">
    <Message
      us
      msg="I suppose that's true."
      name='You'
      avatar='http://assets.rikerchat.joshdavidmiller.com/troi.jpg'
    />
    <Message
      them
      msg='Besides, you look good in a dress.'
      name='Imzadi'
      avatar='http://assets.rikerchat.joshdavidmiller.com/riker.jpg'
    />
  </div>
);


import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';

const state = {
  recipient: {
    name: 'William T. Riker',
    billet: 'First Office, USS Enterprise',
    avatar: 'http://assets.rikerchat.joshdavidmiller.com/riker.jpg',
    cover: 'http://assets.rikerchat.joshdavidmiller.com/enterprise-d.jpg',
  },

  messages: [
    {
      id: 1234,
      name: 'You',
      avatar: 'http://assets.rikerchat.joshdavidmiller.com/troi.jpg',
      text: "I suppose that's true.",
      self: true,
    },
    {
      id: 5678,
      name: 'Imzadi',
      avatar: 'http://assets.rikerchat.joshdavidmiller.com/riker.jpg',
      text: 'Besides, you look good in a dress.',
      self: false,
    },
  ],
};

ReactDOM.render(
  <App
    recipient={state.recipient}
    messages={state.messages}
  />
  , document.getElementById( 'app' )
);


import React from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';

import App from 'components/app';

const state = {
  recipient: {
    name: 'William T. Riker',
    billet: 'First Office, USS Enterprise',
    avatar: 'http://assets.rikerchat.joshdavidmiller.com/riker.jpg',
    cover: 'http://assets.rikerchat.joshdavidmiller.com/enterprise-d.jpg',
  },

  compose: {
    message: '',
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

const onComposeChange = v => {
  state.compose.message = v;

  render( state );
};

const onSendMessage = () => {
  state.messages.push({
    id: shortid.generate(),
    name: 'You',
    avatar: 'http://assets.rikerchat.joshdavidmiller.com/troi.jpg',
    self: true,
    text: state.compose.message,
  });

  state.compose.message = '';

  render( state );
};

const render = state => ReactDOM.render(
  <App
    recipient={state.recipient}
    messages={state.messages}
    draftMessage={state.compose.message}
    onComposeChange={onComposeChange}
    onSendMessage={onSendMessage}
  />
  , document.getElementById( 'app' )
);

render( state );


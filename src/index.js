import React from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';
import { fromJS, Map } from 'immutable';

import App from 'components/app';
import { createStore } from './store';

const initialState = fromJS({
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
});

const reducer = ( state, action ) => {
  switch ( action.type ) {
    case 'SET_COMPOSE_MESSAGE':
      return state.setIn( [ 'compose', 'message' ], action.payload );

    case 'ADD_MESSAGE':
      return state
        .set( 'messages', state.get( 'messages' ).push( action.payload ) )
        .setIn([ 'compose', 'message' ], '' )
        ;

    default:
      return state;
  }
};

const store = createStore( reducer, initialState );

const onComposeChange = store.actionFactory( payload => ({
  type: 'SET_COMPOSE_MESSAGE',
  payload,
}));

const onSendMessage = store.actionFactory( state => ({
  type: 'ADD_MESSAGE',

  payload: fromJS({
    id: shortid.generate(),
    name: 'You',
    avatar: 'http://assets.rikerchat.joshdavidmiller.com/troi.jpg',
    self: true,
    text: state.getIn([ 'compose', 'message' ]),
  }),
}));

const render = state => ReactDOM.render(
  <App
    recipient={state.get( 'recipient' )}
    messages={state.get( 'messages' )}
    draftMessage={state.getIn([ 'compose', 'message' ])}
    onComposeChange={onComposeChange}
    onSendMessage={onSendMessage}
  />
  , document.getElementById( 'app' )
);

store.subscribe( () => render( store.getState() ) );
render( store.getState() );


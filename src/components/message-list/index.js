import React from 'react';
import { List } from 'immutable';

import './styles.css';

import Message from 'components/message';

export default ({
  messages = List(),
}) => (
  <div className="message-list">
    {
      messages.map( msg =>
        <Message
          key={msg.get( 'id' )}
          us={msg.get( 'self' )}
          them={! msg.get( 'self' )}
          msg={msg.get( 'text' )}
          name={msg.get( 'name' )}
          avatar={msg.get( 'avatar' )}
        />
      )
    }
  </div>
);


import React from 'react';

import './styles.css';

import Message from 'components/message';

export default ({
  messages = [],
}) => (
  <div className="message-list">
    {
      messages.map( msg => 
        <Message
          key={msg.id}
          us={msg.self}
          them={! msg.self}
          msg={msg.text}
          name={msg.name}
          avatar={msg.avatar}
        />
      )
    }
  </div>
);


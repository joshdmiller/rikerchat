import React from 'react';

import './styles.css';

import Profile from 'components/profile';
import MessageList from 'components/message-list';
import Compose from 'components/compose';

export default ({
  recipient,
  messages,
  onComposeChange,
  draftMessage,
  onSendMessage,
}) => (
  <div className='container chat'>
    <Profile name={recipient.name} billet={recipient.billet} />
    <MessageList messages={messages} />
    <Compose value={draftMessage} onChange={onComposeChange} onSubmit={onSendMessage} />
  </div>
);


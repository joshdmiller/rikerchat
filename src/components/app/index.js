import React from 'react';

import './styles.css';

import Chat from 'components/chat';

export default ({
  recipient,
  messages,
  onComposeChange,
  draftMessage,
  onSendMessage,
}) => (
  <Chat
    recipient={recipient}
    messages={messages}
    onComposeChange={onComposeChange}
    draftMessage={draftMessage}
    onSendMessage={onSendMessage}
  />
);


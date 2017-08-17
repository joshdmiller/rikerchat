import React from 'react';

import './styles.css';

import Chat from 'components/chat';

export default ({
  recipient,
  messages,
}) => (
  <Chat
    recipient={recipient}
    messages={messages}
  />
);


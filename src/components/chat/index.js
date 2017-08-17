import React from 'react';

import './styles.css';

import Profile from 'components/profile';
import MessageList from 'components/message-list';
import Compose from 'components/compose';

export default () => (
  <div className='container chat'>
    <Profile />
    <MessageList />
    <Compose />
  </div>
);


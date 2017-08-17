import React from 'react';

import './styles.css';

export default () => (
  <form className='compose' onSubmit={e => e.preventDefault()}>
    <input type='text' className='compose__input' placeholder='Send message...' />
    <button type='submit' className='compose__submit' />
  </form>
);


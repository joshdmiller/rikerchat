import React from 'react';

import './styles.css';

export default ({
  value = '',
  onChange = () => null,
  onSubmit = () => null,
}) => (
  <form className='compose' onSubmit={ e => { e.preventDefault(); onSubmit(); } }>
    <input
      type='text'
      className='compose__input'
      placeholder='Send message...'
      value={value}
      onChange={e => onChange( e.target.value )}
    />
    <button type='submit' className='compose__submit' />
  </form>
);


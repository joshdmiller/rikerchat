import React from 'react';

import './styles.css';

export default ({
  name,
  billet,
}) => (
  <div className='profile'>
    <div className='profile__cover' />
    <div className='profile__avatar' />
    <div className='profile__username'>{ name }</div>
    <div className='profile__billet'>{ billet }</div>
  </div>
);


import { Map } from 'immutable';

const StorePrototype = {
  listeners: [],

  reducer: state => state,
  state: Map(),

  getState () {
    return this.state;
  },

  dispatch ( action ) {
    this.state = this.reducer( this.state, action );
    this.notify();
  },

  actionFactory ( fn ) {
    return ( ...args ) => this.dispatch( fn( ...args, this.state ) );
  },

  notify () {
    this.listeners.forEach( fn => fn() );
  },

  subscribe ( fn ) {
    this.listeners.push( fn );
  },
};

export const createStore = ( reducer, state ) => Object.assign( {}, StorePrototype, { reducer, state } );


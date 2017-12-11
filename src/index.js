import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import Items from './components/items/Items';
import initialState from './reducers/initialState';


const store = configureStore(initialState);
render(<Provider store={store}><Items /></Provider>, document.getElementById('root'));

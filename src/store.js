import { createStore } from 'redux';
import servesReducer from './reducer';

const store = createStore(servesReducer);

export default store;

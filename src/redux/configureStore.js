// package import
import {createStore, combineReducers} from 'redux';

// Reducers
import user from './reducers/user';


const rootReducer = combineReducers({
  user
});

export default configureStore = () => {
  return createStore(rootReducer);
};

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import GreetingsReducer from './greetings';
// import rocketsReducer from './rockets/rockets';
// import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  GreetingsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;

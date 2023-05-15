import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  events: eventsReducer,
  auth:authReducer,
  user:userReducer
});

export default rootReducer;

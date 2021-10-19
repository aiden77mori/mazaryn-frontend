import { combineReducers } from "redux";
import commonReducer from "./reducer_common";
import authReducer from "./reducer_auth";
import feedReducer from './reducer_feed'

const rootReducer = combineReducers({
  login : authReducer,
  posts : feedReducer,
  common : commonReducer
});

export default rootReducer;

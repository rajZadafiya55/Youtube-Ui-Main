import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import videoReducer from './videoReducer';
import likeReducer from './likeReducer';
import userReducer from './userReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  like: likeReducer,
  videos: videoReducer,
  user: userReducer
});

export default reducer;

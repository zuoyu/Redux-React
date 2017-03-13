import { combineReducers } from 'redux';

import posts from './reducers/posts';
import details from './reducers/details';
import commends from './reducers/commends';

export default combineReducers({
  posts,
  details,
  commends
})

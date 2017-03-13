import { combineReducers } from 'redux';

import posts from './reducers/posts';
import details from './reducers/details';

export default combineReducers({
  posts,
  details
})

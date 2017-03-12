import { SET_POSTS, ADD_POST, POST_DELETED } from '../action'
export default function posts(state=[], action={}){
  switch(action.type){
    case ADD_POST:
      return [
        ...state,
        action.post

      ];

    case POST_DELETED:
      return state.filter(item => item.id !== action.postId)
    case SET_POSTS:
      return action.posts;
    default: return state
  }
}

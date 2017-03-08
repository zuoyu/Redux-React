import { SET_POSTS } from '../action'
export default function posts(state=[], action={}){
  switch(action.type){
    case SET_POSTS:
      return action.posts;
    default: return state
  }
}

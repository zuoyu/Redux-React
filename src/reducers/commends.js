import { SET_COMMENDS } from '../action'
export default function commends(state=[], action={}){
  switch(action.type){
    case SET_COMMENDS:
      return action.commends;
    default: return commends
  }
}

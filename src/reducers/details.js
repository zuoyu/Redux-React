import { SET_DETAILS} from '../action'
export default function details(state=[], action={}){
  switch(action.type){
    case SET_DETAILS:
      return action.details;
    default: return details
  }
}

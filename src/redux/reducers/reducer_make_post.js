import { MAKE_POST } from "../types";

export default makePostReducer = (state = [], action) => {
    switch(action.type){
      case `${MAKE_POST}`:
        return {...state.push, res}
      default:
        return state;
    }
}
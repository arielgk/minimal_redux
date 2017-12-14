import * as types from './actionTypes.js';


export function addItem(episode) {

  return (dispatch) => {
    dispatch({ type: types.ADD_EPISODE, episode });
  }
}



import * as types from '../actions/actionTypes';
import initialState from './initialState';



function item(state,action){
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        id: action.item.id,
        title:action.item.title
      }
    default:
      return state;

  }
}

function items(state = initialState, action) {  

  switch(action.type){
    case types.ADD_ITEM:

    return [
      ...state,
      item(undefined, action)
    ];
    default:
      return state
  }

}

export default items;
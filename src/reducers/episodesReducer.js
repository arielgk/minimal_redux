import * as types from "../actions/actionTypes";
import initialState from "./initialState";



const episode = (state, action)=>{
switch(action.type){
  case types.ADD_EPISODE:
    return {
      id: action.episode.id,
      parentId:action.episode.parentId,
      title: action.episode.title
    }
}
}

const episodesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EPISODE:
      return [
        ...state,
        episode(undefined, action)
      ];
    default:
      return state;
  }
};

export default episodesReducer;



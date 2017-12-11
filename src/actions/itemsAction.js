import * as types from './actionTypes.js';


export const addItem = (item)=>{
 return (dispatch)=>{
   dispatch({ type:types.ADD_ITEM, item});
 }
}
import { combineReducers }from 'redux';
import seasons from './seasonsReducer';
import episodes from './episodesReducer';

const rootReducer = combineReducers({
  seasons: seasons,
  episodes:episodes
})


export default rootReducer;
import {combineReducers} from 'redux';
import MovieReducer from './MovieReducer';
const rootReducer = combineReducers({
  stateMovieReducer: MovieReducer
});

export default rootReducer;

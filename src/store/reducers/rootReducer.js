import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import serieFormReducer from './serieForm.reducer';
import serieListReducer from './serieList.reducer';

const rootReducer = combineReducers({
    userReducer,
    serieFormReducer,
    serieListReducer
});

export default rootReducer;
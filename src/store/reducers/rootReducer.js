import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import serieFormReducer from './serieForm.reducer';

const rootReducer = combineReducers({
    userReducer,
    serieFormReducer
});

export default rootReducer;
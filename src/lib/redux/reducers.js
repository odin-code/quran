import { combineReducers } from 'redux';

// UI
import covid from '../../store/covid/reducers';

const combinedReducer = combineReducers({
  covid,
});

export default combinedReducer;

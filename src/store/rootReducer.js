import { componentsReducer } from './components/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  components: componentsReducer,
});

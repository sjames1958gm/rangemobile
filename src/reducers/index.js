import { combineReducers } from 'redux';
import AddrReducer from './AddrReducer';
import ExercisesReducer from './ExercisesReducer';
import SensorsReducer from './SensorsReducer';

export default combineReducers({
  addr: AddrReducer,
  exercises: ExercisesReducer,
  sensors: SensorsReducer
});
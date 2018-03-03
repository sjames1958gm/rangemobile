import { 
  GET_SENSOR_LIST_COMPLETE,
  GET_SENSOR_COMPLETE
} from '../actions/types';

const INITIAL_STATE = {
  sensorList: [],
  sensorValues: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case GET_SENSOR_LIST_COMPLETE:
      let sensors = action.payload.split(/, */);
      return { ...state, sensorList: sensors.map(s => s.split(":")[0]) };
    default:
      return state;
  }
}
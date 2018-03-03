import { 
  GET_EXERCISE_LIST_COMPLETE
} from '../actions/types';

const INITIAL_STATE = {
  exercises: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case GET_EXERCISE_LIST_COMPLETE:
      return { ...state, exercises: action.payload.split(/, */) };
    default:
      return state;
  }
}
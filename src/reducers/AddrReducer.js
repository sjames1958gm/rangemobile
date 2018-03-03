import { 
  ADDR_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  ipAddr: '192.168.1.170'
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ADDR_CHANGED:
      return { ...state, ipAddr: action.payload };
    default:
      return state;
  }
}